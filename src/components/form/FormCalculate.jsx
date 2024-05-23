import {
  Box,
  Button,
  FormControl,
  Input,
  Flex,
  Stack,
  VStack,
  useToast,
  Heading,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Tab,
  Table,
  TableContainer,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
  Text,
  TableCaption,
  HStack,
  Highlight,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Loading } from "../Loading";
import axiosInstanceAuthorization from "@/lib/axiosInstanceAuthorization";
import { primaryColor, white } from "@/lib/color";

export function FormCalculate() {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [inputPersediaan, setInputPersediaan] = useState("");
  const [inputPermintaan, setInputPermintaan] = useState("");

  const [isResultOpen, setIsResultOpen] = useState();

  const [valuePersediaan, setValuePersediaan] = useState();
  const [valuePermintaan, setValuePermintaan] = useState();
  const [valueProduksi, setValueProduksi] = useState();
  const [
    valueDerajatKeanggotaanPersediaan,
    setValueDerajatKeanggotaanPersediaan,
  ] = useState();
  const [
    valueDerajatKeanggotaanPermintaan,
    setValueDerajatKeanggotaanPermintaan,
  ] = useState();
  const [valueDerajatKeanggotaanProduksi, setValueDerajatKeanggotaanProduksi] =
    useState();
  const [valueR1DerajatPersediaan, setValueR1DerajatPersediaan] = useState();
  const [valueR1DerajatPermintaan, setValueR1DerajatPermintaan] = useState();
  const [valueR1Alpha, setValueR1Alpha] = useState();
  const [valueR1Zi, setValueR1Zi] = useState();
  const [valueR1Aixzi, setValueR1Aixzi] = useState();
  const [valueR2DerajatPersediaan, setValueR2DerajatPersediaan] = useState();
  const [valueR2DerajatPermintaan, setValueR2DerajatPermintaan] = useState();
  const [valueR2Alpha, setValueR2Alpha] = useState();
  const [valueR2Zi, setValueR2Zi] = useState();
  const [valueR2Aixzi, setValueR2Aixzi] = useState();
  const [valueR3DerajatPersediaan, setValueR3DerajatPersediaan] = useState();
  const [valueR3DerajatPermintaan, setValueR3DerajatPermintaan] = useState();
  const [valueR3Alpha, setValueR3Alpha] = useState();
  const [valueR3Zi, setValueR3Zi] = useState();
  const [valueR3Aixzi, setValueR3Aixzi] = useState();
  const [valueR4DerajatPersediaan, setValueR4DerajatPersediaan] = useState();
  const [valueR4DerajatPermintaan, setValueR4DerajatPermintaan] = useState();
  const [valueR4Alpha, setValueR4Alpha] = useState();
  const [valueR4Zi, setValueR4Zi] = useState();
  const [valueR4Aixzi, setValueR4Aixzi] = useState();
  const [valueProduksiEsBatu, setValueProduksiEsBatu] = useState();
  const [valueDatetime, setValueDatetime] = useState();

  const handleCalculate = async () => {
    try {
      if (!(inputPersediaan && inputPermintaan)) {
        toast({
          title: "Complete field to calculate",
          status: "warning",
          position: "bottom-right",
          isClosable: true,
        });
        return;
      }
      const { data } = await axiosInstanceAuthorization.post(`/calculate`, {
        persediaan: inputPersediaan,
        permintaan: inputPermintaan,
      });
      toast({
        title: "Success calculating",
        status: "success",
        position: "bottom-right",
        isClosable: true,
      });
      const {
        persediaan,
        permintaan,
        produksi,
        derajat_keanggotaan_persediaan,
        derajat_keanggotaan_permintaan,
        derajat_keanggotaan_produksi,
        r1_derajat_persediaan,
        r1_derajat_permintaan,
        r1_alpha,
        r1_zi,
        r1_aixzi,
        r2_derajat_persediaan,
        r2_derajat_permintaan,
        r2_alpha,
        r2_zi,
        r2_aixzi,
        r3_derajat_persediaan,
        r3_derajat_permintaan,
        r3_alpha,
        r3_zi,
        r3_aixzi,
        r4_derajat_persediaan,
        r4_derajat_permintaan,
        r4_alpha,
        r4_zi,
        r4_aixzi,
        produksi_es_batu,
        datetime,
      } = data.results;

      setValuePersediaan(persediaan);
      setValuePermintaan(permintaan);
      setValueProduksi(produksi);
      setValueDerajatKeanggotaanPersediaan(derajat_keanggotaan_persediaan);
      setValueDerajatKeanggotaanPermintaan(derajat_keanggotaan_permintaan);
      setValueDerajatKeanggotaanProduksi(derajat_keanggotaan_produksi);
      setValueR1DerajatPersediaan(r1_derajat_persediaan);
      setValueR1DerajatPermintaan(r1_derajat_permintaan);
      setValueR1Alpha(r1_alpha);
      setValueR1Zi(r1_zi);
      setValueR1Aixzi(r1_aixzi);
      setValueR2DerajatPersediaan(r2_derajat_persediaan);
      setValueR2DerajatPermintaan(r2_derajat_permintaan);
      setValueR2Alpha(r2_alpha);
      setValueR2Zi(r2_zi);
      setValueR2Aixzi(r2_aixzi);
      setValueR3DerajatPersediaan(r3_derajat_persediaan);
      setValueR3DerajatPermintaan(r3_derajat_permintaan);
      setValueR3Alpha(r3_alpha);
      setValueR3Zi(r3_zi);
      setValueR3Aixzi(r3_aixzi);
      setValueR4DerajatPersediaan(r4_derajat_persediaan);
      setValueR4DerajatPermintaan(r4_derajat_permintaan);
      setValueR4Alpha(r4_alpha);
      setValueR4Zi(r4_zi);
      setValueR4Aixzi(r4_aixzi);
      setValueProduksiEsBatu(produksi_es_batu);
      setValueDatetime(datetime);

      console.log(`
  Persediaan: ${valuePersediaan}
  Permintaan: ${valuePermintaan}
  Produksi: ${valueProduksi}
  Derajat keanggotaan persediaan: ${valueDerajatKeanggotaanPersediaan}
  Derajat keanggotaan permintaan: ${valueDerajatKeanggotaanPermintaan}
  Derajat keanggotaan produksi: ${valueDerajatKeanggotaanProduksi}
  R1 Derajat persediaan: ${valueR1DerajatPersediaan}
  R1 Derajat permintaan: ${valueR1DerajatPermintaan}
  R1 Alpha: ${valueR1Alpha}
  R1 Zi: ${valueR1Zi}
  R1 Aixzi: ${valueR1Aixzi}
  R2 Derajat persediaan: ${valueR2DerajatPersediaan}
  R2 Derajat permintaan: ${valueR2DerajatPermintaan}
  R2 Alpha: ${valueR2Alpha}
  R2 Zi: ${valueR2Zi}
  R2 Aixzi: ${valueR2Aixzi}
  R3 Derajat persediaan: ${valueR3DerajatPersediaan}
  R3 Derajat permintaan: ${valueR3DerajatPermintaan}
  R3 Alpha: ${valueR3Alpha}
  R3 Zi: ${valueR3Zi}
  R3 Aixzi: ${valueR3Aixzi}
  R4 Derajat persediaan: ${valueR4DerajatPersediaan}
  R4 Derajat permintaan: ${valueR4DerajatPermintaan}
  R4 Alpha: ${valueR4Alpha}
  R4 Zi: ${valueR4Zi}
  R4 Aixzi: ${valueR4Aixzi}
  Produksi es batu: ${valueProduksiEsBatu}
  Datetime: ${valueDatetime}
`);
      setIsResultOpen(true);
    } catch (error) {
      let errorMessage = "Error while calculating";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }
      toast({
        title: errorMessage,
        status: "error",
        position: "bottom-right",
        isClosable: true,
      });
    }
  };

  const modalResult = () => {
    return (
      <Modal
        size="full"
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
      >
        <ModalOverlay />
        <ModalContent align="center">
          <ModalHeader>Total Ice Cube Production</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            align-items="center"
            justify-content="center"
            direction="horizontal"
          >
            <Table
              variant="striped"
              overflow="auto"
              align="center"
              objectFit="contain"
            >
              <TableContainer>
                <Thead>
                  <Tr>
                    <Th>Variable</Th>
                    <Th>Value</Th>
                    <Th>Degree of Group</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Supply</Td>
                    <Td>{valuePersediaan}</Td>
                    <Td>{valueDerajatKeanggotaanPersediaan}</Td>
                  </Tr>
                  <Tr>
                    <Td>Demand</Td>
                    <Td>{valuePermintaan}</Td>
                    <Td>{valueDerajatKeanggotaanPermintaan}</Td>
                  </Tr>
                  <Tr>
                    <Td>Ice Cube Production</Td>
                    <Td>{valueProduksi}</Td>
                    <Td>{valueDerajatKeanggotaanProduksi}</Td>
                  </Tr>
                </Tbody>
              </TableContainer>
            </Table>
            <Table mt={6} variant="striped" overflow="auto" size="sm">
              <TableContainer>
                <Thead>
                  <Tr>
                    <Th>Rule</Th>
                    <Th>Conditons</Th>
                    <Th>Degree of Supply</Th>
                    <Th>Degree of Demand</Th>
                    <Td>(αi)</Td>
                    <Td>Zi</Td>
                    <Td>αi×Zi</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>R1</Td>
                    <Td>
                      If There is <Text as="b">Little</Text> Supply and{" "}
                      <Text as="b">Little</Text> Demand Then{" "}
                      <Text as="b">Little</Text> Production
                    </Td>
                    <Td>{valueR1DerajatPersediaan}</Td>
                    <Td>{valueR1DerajatPermintaan}</Td>
                    <Td>{valueR1Alpha}</Td>
                    <Td>{valueR1Zi}</Td>
                    <Td>{valueR1Aixzi}</Td>
                  </Tr>
                  <Tr>
                    <Td>R2</Td>
                    <Td>
                      If There is <Text as="b">Little</Text> Supply and{" "}
                      <Text as="b">Lot</Text> Demand Then{" "}
                      <Text as="b">Lot</Text> Production
                    </Td>
                    <Td>{valueR2DerajatPersediaan}</Td>
                    <Td>{valueR2DerajatPermintaan}</Td>
                    <Td>{valueR2Alpha}</Td>
                    <Td>{valueR2Zi}</Td>
                    <Td>{valueR2Aixzi}</Td>
                  </Tr>
                  <Tr>
                    <Td>R3</Td>
                    <Td>
                      If There is <Text as="b">Lot</Text> Supply and{" "}
                      <Text as="b">Little</Text> Demand Then{" "}
                      <Text as="b">Little</Text> Production
                    </Td>
                    <Td>{valueR3DerajatPersediaan}</Td>
                    <Td>{valueR3DerajatPermintaan}</Td>
                    <Td>{valueR3Alpha}</Td>
                    <Td>{valueR3Zi}</Td>
                    <Td>{valueR3Aixzi}</Td>
                  </Tr>
                  <Tr>
                    <Td>R4</Td>
                    <Td>
                      If There is <Text as="b">Lot</Text> Supply and{" "}
                      <Text as="b">Lot</Text> Demand Then{" "}
                      <Text as="b">Lot</Text> Production
                    </Td>
                    <Td>{valueR4DerajatPersediaan}</Td>
                    <Td>{valueR4DerajatPermintaan}</Td>
                    <Td>{valueR4Alpha}</Td>
                    <Td>{valueR4Zi}</Td>
                    <Td>{valueR4Aixzi}</Td>
                  </Tr>

                  <Tr>
                    <Td>
                      <Text as="b">Total</Text>
                    </Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>
                      <Text as="b">{valueProduksiEsBatu}</Text>
                    </Td>
                  </Tr>
                </Tbody>
                <TableCaption>
                  <HStack>
                    <Text as="b"> Ice Cube Production</Text>
                    <Text>= ∑(αi×Zi) / ∑(αi) = 450 / 1 =</Text>
                    <Text as="b"> {parseFloat(valueProduksi)}</Text>
                  </HStack>
                </TableCaption>
              </TableContainer>
            </Table>
          </ModalBody>
          <ModalFooter>
            <VStack>
              <Center>
                <Button
                  bg={primaryColor}
                  color={white}
                  my={4}
                  alignContent="center"
                  alignItems="center"
                  onClick={() => {
                    setIsResultOpen(false);
                  }}
                >
                  Close
                </Button>
              </Center>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  if (loading) return <Loading />;

  return (
    <>
      <form>
        <Flex mt={4}>
          <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            flex={18}
          >
            <Stack spacing={4}>
              <FormControl>
                <Flex>
                  <Box flex="1" mr={2}>
                    <FormLabel>Enter supply amount</FormLabel>
                    <Input
                      name="persediaan"
                      value={inputPersediaan}
                      onChange={(e) => setInputPersediaan(e.target.value)}
                      type="number"
                    />
                  </Box>
                  <Box flex="1" mr={2}>
                    <FormLabel>Enter demand amount</FormLabel>
                    <Input
                      name="permintaan"
                      value={inputPermintaan}
                      onChange={(e) => setInputPermintaan(e.target.value)}
                      type="number"
                    />
                  </Box>
                </Flex>
              </FormControl>
            </Stack>
          </Box>
        </Flex>
        <VStack mt={4}>
          <Center></Center>
          <Button
            bg={primaryColor}
            color={white}
            onClick={() => {
              handleCalculate();
            }}
          >
            Calculate
          </Button>
        </VStack>
      </form>
      {modalResult()}
    </>
  );
}
