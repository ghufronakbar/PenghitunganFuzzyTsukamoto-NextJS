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
import { primaryColor, primaryColor2, secondaryColor, white } from "@/lib/color";
import { formatDecimal } from "@/lib/formatDecimal";
import { formatDate } from "@/lib/formatDate";

export function FormCalculate() {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [inputPersediaan, setInputPersediaan] = useState("");
  const [inputPermintaan, setInputPermintaan] = useState("");

  const [isResultOpen, setIsResultOpen] = useState(false);

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

  const HandleCalculate = async () => {
    try {
      if (!(inputPersediaan && inputPermintaan)) {
        toast({
          title: "Isi untuk melakukan kalkulasi",
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
        title: "Success mengkalkulasi",
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
      setIsResultOpen(true);
    } catch (error) {
      let errorMessage = "Error ketika mengkalkulasi";
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


const ModalResult = () => {
  return (
    <Modal
      size="full"
      isOpen={isResultOpen}
      onClose={() => setIsResultOpen(false)}
    >
      <ModalOverlay />
      <ModalContent align="center">
        <ModalHeader>Total Produksi Es Batu</ModalHeader>
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
                  <Th>Variabel</Th>
                  <Th>Nilai</Th>
                  <Th>Derajat Keanggotaan</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Persediaan</Td>
                  <Td>{formatDecimal(valuePersediaan)}</Td>
                  <Td>
                    <Box
                      as="button"
                      bg={primaryColor2}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Sedikit ({formatDecimal(valueDerajatKeanggotaanPersediaan)}){" "}
                    </Box>{" "}
                    <Box
                      as="button"
                      bg={secondaryColor}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Banyak ({formatDecimal(1 - valueDerajatKeanggotaanPersediaan)}){" "}
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Permintaan</Td>
                  <Td>{formatDecimal(valuePermintaan)}</Td>
                  <Td>
                    <Box
                      as="button"
                      bg={primaryColor2}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Sedikit ({formatDecimal(valueDerajatKeanggotaanPermintaan)}){" "}
                    </Box>{" "}
                    <Box
                      as="button"
                      bg={secondaryColor}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Banyak ({ formatDecimal(1 -valueDerajatKeanggotaanPermintaan)}){" "}
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Produksi Es Batu</Td>
                  <Td>{formatDecimal(valueProduksi)}</Td>
                  <Td>
                    <Box
                      as="button"
                      bg={primaryColor2}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Sedikit ({formatDecimal(valueDerajatKeanggotaanProduksi)}){" "}
                    </Box>{" "}
                    <Box
                      as="button"
                      bg={secondaryColor}
                      color={white}
                      px={4}
                      py={2}
                      borderRadius={20}
                    >
                      Banyak ({formatDecimal(1 - valueDerajatKeanggotaanProduksi)}){" "}
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </TableContainer>
          </Table>
          <Table mt={6} variant="striped" overflow="auto" size="sm">
            <TableContainer>
              <Thead>
                <Tr>
                  <Th>Rule</Th>
                  <Th>Kondisi</Th>
                  <Th>Derajat Persediaan</Th>
                  <Th>Derajat Permintaan</Th>
                  <Td>(αi)</Td>
                  <Td>Zi</Td>
                  <Td>αi×Zi</Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>R1</Td>
                  <Td>
                    Jika ada <Text as="b">Sedikit</Text> Persediaan dan{" "}
                    <Text as="b">Sedikit</Text> Permintaan Maka{" "}
                    <Text as="b">Sedikit</Text> Produksi
                  </Td>
                  <Td>{formatDecimal(valueR1DerajatPersediaan)}</Td>
                  <Td>{formatDecimal(valueR1DerajatPermintaan)}</Td>
                  <Td>{formatDecimal(valueR1Alpha)}</Td>
                  <Td>{formatDecimal(valueR1Zi)}</Td>
                  <Td>{formatDecimal(valueR1Aixzi)}</Td>
                </Tr>
                <Tr>
                  <Td>R2</Td>
                  <Td>
                    Jika ada <Text as="b">Sedikit</Text> Persediaan dan{" "}
                    <Text as="b">Banyak</Text> Permintaan Maka{" "}
                    <Text as="b">Banyak</Text> Produksi
                  </Td>
                  <Td>{formatDecimal(valueR2DerajatPersediaan)}</Td>
                  <Td>{formatDecimal(valueR2DerajatPermintaan)}</Td>
                  <Td>{formatDecimal(valueR2Alpha)}</Td>
                  <Td>{formatDecimal(valueR2Zi)}</Td>
                  <Td>{formatDecimal(valueR2Aixzi)}</Td>
                </Tr>
                <Tr>
                  <Td>R3</Td>
                  <Td>
                    Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                    <Text as="b">Sedikit</Text> Permintaan Maka{" "}
                    <Text as="b">Sedikit</Text> Produksi
                  </Td>
                  <Td>{formatDecimal(valueR3DerajatPersediaan)}</Td>
                  <Td>{formatDecimal(valueR3DerajatPermintaan)}</Td>
                  <Td>{formatDecimal(valueR3Alpha)}</Td>
                  <Td>{formatDecimal(valueR3Zi)}</Td>
                  <Td>{formatDecimal(valueR3Aixzi)}</Td>
                </Tr>
                <Tr>
                  <Td>R4</Td>
                  <Td>
                    Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                    <Text as="b">Banyak</Text> Permintaan Maka{" "}
                    <Text as="b">Banyak</Text> Produksi
                  </Td>
                  <Td>{formatDecimal(valueR4DerajatPersediaan)}</Td>
                  <Td>{formatDecimal(valueR4DerajatPermintaan)}</Td>
                  <Td>{formatDecimal(valueR4Alpha)}</Td>
                  <Td>{formatDecimal(valueR4Zi)}</Td>
                  <Td>{formatDecimal(valueR4Aixzi)}</Td>
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
                    <Text as="b">{formatDecimal(valueProduksiEsBatu)}</Text>
                  </Td>
                </Tr>
              </Tbody>
              <TableCaption>
                <HStack>
                  <Text as="b"> Produksi Es Batu</Text>
                  <Text>= ∑(αi×Zi) / ∑(αi) = 450 / 1 =</Text>
                  <Text as="b"> {formatDecimal(valueProduksi)}</Text>
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
                Tutup
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
                    <FormLabel>Masukkan persediaan</FormLabel>
                    <Input
                      name="persediaan"
                      value={inputPersediaan}
                      onChange={(e) => setInputPersediaan(e.target.value)}
                      type="number"
                    />
                  </Box>
                  <Box flex="1" mr={2}>
                    <FormLabel>Masukkan permintaan</FormLabel>
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
              HandleCalculate();
            }}
          >
            Hitung
          </Button>
        </VStack>
      </form>
      {ModalResult()}
    </>
  );
}
