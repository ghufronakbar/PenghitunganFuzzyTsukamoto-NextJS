import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useQuery } from "@tanstack/react-query";
import axiosInstanceAuthorization from "@/lib/axiosInstanceAuthorization";
import { primaryColor, secondaryColor, white } from "@/lib/color";
import Image from "next/image";

export function SidebarMenu() {
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
    <>
      <Sidebar backgroundColor={primaryColor}>
        <br />
        <Box
          p={3}
          mx={2}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Stack onClick={() => router.push(`/profile`)}>
            <Text as="b" fontSize="2xl" color={white} textAlign="center">
              {profileSB && profileSB.fullname}
            </Text>
          </Stack>
        </Box>
        <br />
        <br />
        <Menu>
          <MenuItem onClick={() => router.push(`/calculate`)}>
            <Text color={white}>🧮 Kalkulasi</Text>
          </MenuItem>
          <MenuItem onClick={() => router.push(`/history`)}>
            <Text color={white}>📒 Riwayat</Text>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Text color={white}>🔒 Logout</Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
