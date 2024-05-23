import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

import { HeadAdmin } from "@/components/HeadApp";
import { primaryColor, white } from "@/lib/color";
import { axiosInstance } from "@/lib/axiosInstance";

function Copyright(props) {
  return (
    <Text align="center" {...props}>
      {"Copyright © "}
      <Link color="blue.500" href={process.env.BASE_URL}>
        Event Ease
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Text>
  );
}

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/register", {
        fullname: fullName,
        email,
        password,
        confirmation_password: confirmPassword,
      });

      const { success, message, status } = response.data;
      if (status == 200) {
        toast({
          title: "Register successfully!",
          status: "success",
          position: "bottom-right",
          isClosable: true,
        });
        router.push(`/login`);
      } else {
        console.log(response);
        setError(message);
        toast({
          title: message || "Registration failed",
          status: "error",
          position: "bottom-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error registering:", error.message);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to register. Please try again.";
      setError(errorMessage);
      toast({
        title: errorMessage,
        status: "error",
        position: "bottom-right",
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {HeadAdmin()}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} flex="1">
        <Box
          display={{ base: "none", md: "block" }}
          bgImage="url(https://source.unsplash.com/random?wallpapers)"
          bgSize="cover"
          bgPosition="center"
        />
        <Container maxW="md" py={8}>
          <Flex align="center" justify="center" direction="column">
            <Avatar bg={primaryColor} icon={<LockIcon />} mb={4} />
            <Heading as="h1" size="lg" mb={6}></Heading>
            <Box as="form" w="100%" onSubmit={handleRegister}>
              <VStack spacing={4}>
                <FormControl id="fullName">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormControl id="confirmPassword">
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" color={white} bg={primaryColor} w="full">
                  Register
                </Button>
              </VStack>
              <Flex justify="space-between" mt={4}>
                <HStack
                  onClick={() => {
                    router.push(`/login`);
                  }}
                >
                  <Text>Already have an account?</Text>
                  <Text color={primaryColor}>Login</Text>
                </HStack>
              </Flex>
              <Copyright mt={8} />
            </Box>
          </Flex>
        </Container>
      </Grid>
    </Box>
  );
}
