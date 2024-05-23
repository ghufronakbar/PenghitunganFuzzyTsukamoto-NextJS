import { primaryColor, white } from "@/lib/color";
import {
  Modal,
  Box,
  Center,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  Text,
  ModalBody,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const ShowRulesImage = () => {
  const [isModalSupply, setIsModalSupply] = useState();
  const [isModalDemand, setIsModalDemand] = useState();
  const [isModalProduction, setIsModalProduction] = useState();

  const ModalSupply = () => {
    return (
      <Modal
        size="xl"
        isOpen={isModalSupply}
        onClose={() => setIsModalSupply(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Group of Function Supply</ModalHeader>
          <ModalBody>
            <Image
              src="/fungsipersediaan.png"
              alt="fungsi persediaan"
              width={600}
              height={400}
              objectFit="contain"
            />
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              bg={primaryColor}
              color={white}
              onClick={() => {
                setIsModalSupply(false);
              }}
            >
              Finish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  const ModalDemand = () => {
    return (
      <Modal
        size="xl"
        isOpen={isModalDemand}
        onClose={() => setIsModalDemand(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Group of Function Demand</ModalHeader>
          <ModalBody>
            <Image
              src="/fungsipermintaan.png"
              alt="fungsi permintaan"
              width={600}
              height={400}
              objectFit="contain"
            />
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              bg={primaryColor}
              color={white}
              onClick={() => {
                setIsModalDemand(false);
              }}
            >
              Finish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  const ModalProduction = () => {
    return (
      <Modal
        size="xl"
        isOpen={isModalProduction}
        onClose={() => setIsModalProduction(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Group of Function Production</ModalHeader>
          <ModalBody>
            <Image
              src="/fungsiproduksi.png"
              alt="fungsi produksi"
              width={600}
              height={400}
              objectFit="contain"
            />
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              bg={primaryColor}
              color={white}
              onClick={() => {
                setIsModalProduction(false);
              }}
            >
              Finish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <>
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        flex={18}
        mt={4}
      >
        <Box display="flex" justifyContent="space-between">
          <Box
            flex="1"
            mx={2}
            position="relative"
            width="100%"
            height={300}
            onClick={() => {
              setIsModalSupply(true);
            }}
          >
            <Center>
              <Text as="b">Group of Function Supply</Text>
              <Image
                src="/persediaan.png"
                alt="persediaan"
                layout="fill"
                objectFit="contain"
              />
            </Center>
          </Box>
          <Box
            flex="1"
            mx={2}
            position="relative"
            width="100%"
            height={300}
            onClick={() => {
              setIsModalDemand(true);
            }}
          >
            <Center>
              <Text as="b">Group of Function Demand</Text>
              <Image
                src="/permintaan.png"
                alt="permintaan"
                layout="fill"
                objectFit="contain"
              />
            </Center>
          </Box>
          <Box
            flex="1"
            mx={2}
            position="relative"
            width="100%"
            height={300}
            onClick={() => {
              setIsModalProduction(true);
            }}
          >
            <Center>
              <Text as="b">Group of Function Production</Text>
              <Image
                src="/produksi.png"
                alt="produksi"
                layout="fill"
                objectFit="contain"
              />
            </Center>
          </Box>
        </Box>
      </Box>
      <ModalSupply />
      <ModalDemand />
      <ModalProduction />
    </>
  );
};

export default ShowRulesImage;
