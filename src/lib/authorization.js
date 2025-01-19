import { useRouter } from "next/router";
import { useEffect, useState, createContext } from "react";
import { jwtDecode } from "jwt-decode"; // Perhatikan bahwa tidak ada kurung kurawal
import { useToast } from "@chakra-ui/react";
import { Loading } from "@/components/Loading";

export const AuthContext = createContext();

export function withAuth(Component) {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      } else {
        try {
          const payload = jwtDecode(token);
          if (!payload.id_user) {
            router.push("/login");
          } else if (payload.exp < Date.now() / 1000) {
            console.log("waktu habis");
            toast({
              title: "Session has expired",
              status: "warning",
              position: "bottom-right",
              isClosable: true,
            });
            router.push("/login");
          } else {
            setUserData(payload);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          router.push("/login");
        }
      }
    }, [router]);


    if (loading) {
      return <Loading />
    }

    return (
      <AuthContext.Provider value={userData}>
        <Component {...props} />
      </AuthContext.Provider>
    );
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
}

