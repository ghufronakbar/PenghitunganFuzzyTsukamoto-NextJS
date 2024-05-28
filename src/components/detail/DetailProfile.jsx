import {
  Box,
  Center,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstanceAuthorization from "@/lib/axiosInstanceAuthorization";
import { Loading } from "../Loading";

export function DetailProfile() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [profile, setProfile] = useState(null);

  const { isLoading, isError, refetch: refetchDataProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosInstanceAuthorization.get(`/profile`);
      const profileData = data.user;
      setProfile(profileData);
      setEmail(profileData.email);
      setFullname(profileData.fullname)
      return profileData;
    },
  });

  const handleUpdateProfile = async () => {
    try {
      await axiosInstanceAuthorization.put(`/profile/edit`, {
        email,
        fullname,
      });

      toast({
        title: "Successfully updated profile",
        status: "success",
      });
      refetchDataProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Failed to update profile",
        description: error.response?.data?.message || "An unexpected error occurred",
        status: "error",
      });
    }
  };

  const handleUpdatePassword = async () => {
    try {
      if (newPassword === confirmationPassword) {
        await axiosInstanceAuthorization.put(`/profile/password`, {
          old_password: oldPassword,
          password: newPassword,
        });
        toast({
          title: "Successfully changed password",
          status: "success",
        });
        setOldPassword("");
        setNewPassword("");
        setConfirmationPassword("");
      } else {
        toast({
          title: "Confirmation password doesn't match",
          status: "error",
        });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast({
        title: "Failed to change password",
        description: error.response?.data?.message || "An unexpected error occurred",
        status: "error",
      });
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      {profile && (
        <Flex justifyContent="center">
          <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            flex={2}
          >
            <form>
              <FormControl my={6}>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl my={6}>
                <FormLabel>Nama</FormLabel>
                <Input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>
              <VStack>
                <Button onClick={handleUpdateProfile}>Perbarui Profile</Button>
              </VStack>
            </form>
          </Box>
          <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            flex={1}
          >
            <form>
              <FormControl my={6}>
                <FormLabel>Password Lama</FormLabel>
                <Input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </FormControl>
              <FormControl my={6}>
                <FormLabel>Password Baru</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
              <FormControl my={6}>
                <FormLabel>Konfrimasi Password</FormLabel>
                <Input
                  type="password"
                  value={confirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                />
              </FormControl>
              <VStack>
                <Button onClick={handleUpdatePassword}>Perbarui Password</Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      )}
    </>
  );
}
