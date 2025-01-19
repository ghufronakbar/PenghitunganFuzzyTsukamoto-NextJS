import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axiosInstanceAuthorization from "@/lib/axiosInstanceAuthorization";
import { primaryColor, tersierColor, white } from "@/lib/color";
import Link from "next/link";

export function SidebarMenu({ children }) {
  const router = useRouter();

  const {
    data: profileSB,
    isLoading: loadingProfileSB,
    refetch: refetchProfileSB,
  } = useQuery({
    queryKey: ["profileSB"],
    queryFn: async () => {
      const { data } = await axiosInstanceAuthorization.get("/profile");
      return data.user;
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div style={{ display: "flex", zIndex: "10" }}>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "250px",
          backgroundColor: white,
          color: primaryColor,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link
          style={{
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            border: "0.6px solid #444",
            borderRadius: "10px",
            padding: "5px 10px",
          }}
          href={"/profile"}
        >
          {profileSB?.fullname}
        </Link>
        {MENU_ITEM.map((item, index) => (
          <Link
            key={index}
            style={{
              cursor: "pointer",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              backgroundColor: tersierColor,
              textAlign: "center",
              transition: "background-color 0.3s",
              color: white,
            }}
            href={item.href}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#444")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = tersierColor)
            }
          >
            {item.name}
          </Link>
        ))}
        <div
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#e53e3e",
            textAlign: "center",
            color: white,
          }}
          onClick={handleLogout}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d32f2f")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#e53e3e")
          }
        >
          🔒 Logout
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "250px", // Menyesuaikan lebar sidebar
          padding: "20px",
          width: "100%",
          backgroundColor: "#f7fafc", // Warna latar konten
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const MENU_ITEM = [
  { name: "🧮 Kalkulasi", href: "/calculate" },
  { name: "📒 Riwayat", href: "/history" },
];
