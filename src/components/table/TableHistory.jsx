import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  ModalBody,
  VStack,
  HStack,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import axiosInstanceAuthorization from "../../lib/axiosInstanceAuthorization";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loading } from "../Loading";
import {
  primaryColor,
  primaryColor2,
  secondaryColor,
  white,
} from "@/lib/color";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { formatDate, formatTime } from "@/lib/formatDate";
import { formatDecimal } from "@/lib/formatDecimal";

export function TableHistory() {
  const toast = useToast();
  const searchParams = useSearchParams();
  const [idCalculate, setIdCalculate] = useState();
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const {
    data: dataHistory,
    isLoading,
    isError,
    refetch: refetchDataHistory,
  } = useQuery({
    queryKey: ["calculate/history"],
    queryFn: async () => {
      const dataResponse = await axiosInstanceAuthorization.get(
        `/calculate/history`
      );
      return dataResponse.data;
    },
  });

  const {
    data: dataHistoryId,
    isLoading: isLoadingId,
    isError: isErrorId,
  } = useQuery({
    queryKey: ["calculate/history", idCalculate],
    queryFn: async () => {
      if (idCalculate) {
        const dataResponseId = await axiosInstanceAuthorization.get(
          `/calculate/history/${idCalculate}`
        );
        return dataResponseId.data.results;
      }
      return null;
    },
    enabled: !!idCalculate,
  });

  const NoData = () => {
    if (dataHistory?.results?.length === 0) {
      return (
        <Alert status="warning">
          <AlertIcon />
          There's no data
        </Alert>
      );
    }
    return null;
  };

  const HandleDetail = (id_calculate) => {
    setIdCalculate(id_calculate);
    setIsResultOpen(true);
  };

  const ModalConfirmDelete = () => {
    return (
      <>
        <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure want to delete this history?</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                colorScheme="red"
                onClick={() => {
                  HandleDelete(idCalculate);
                }}
              >
                Finish
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const HandleDelete = async (id_history) => {
    await axiosInstanceAuthorization.delete(
      `/calculate/history/delete/${id_history}`
    );
    toast({
      title: "History has been deleted",
      status: "info",
      position: "bottom-right",
      isClosable: true,
    });
    refetchDataHistory();
    setIsDeleteOpen(false);
  };

  const ModalResult = () => {
    if (isLoadingId) return <Loading />;
  
    return (
      <>
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
                      <Td>{dataHistoryId?.persediaan}</Td>
                      <Td>
                        <Box
                          as="button"
                          bg={primaryColor2}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Sedikit (
                          {formatDecimal(
                            dataHistoryId?.derajat_keanggotaan_persediaan
                          )}
                          ){" "}
                        </Box>{" "}
                        <Box
                          as="button"
                          bg={secondaryColor}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Banyak (
                          {
                            formatDecimal(1 -
                              dataHistoryId?.derajat_keanggotaan_persediaan
                            )}
                          ){" "}
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Permintaan</Td>
                      <Td>{dataHistoryId?.permintaan}</Td>
                      <Td>
                        <Box
                          as="button"
                          bg={primaryColor2}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Sedikit (
                          {formatDecimal(
                            dataHistoryId?.derajat_keanggotaan_permintaan
                          )}
                          ){" "}
                        </Box>{" "}
                        <Box
                          as="button"
                          bg={secondaryColor}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Banyak (
                          {
                            formatDecimal(1 -
                              dataHistoryId?.derajat_keanggotaan_permintaan
                            )}
                          ){" "}
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Produksi Es Batu</Td>
                      <Td>{formatDecimal(dataHistoryId?.produksi)}</Td>
                      <Td>
                        <Box
                          as="button"
                          bg={primaryColor2}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Sedikit (
                          {formatDecimal(
                            dataHistoryId?.derajat_keanggotaan_produksi
                          )}
                          ){" "}
                        </Box>{" "}
                        <Box
                          as="button"
                          bg={secondaryColor}
                          color={white}
                          px={4}
                          py={2}
                          borderRadius={20}
                        >
                          Banyak (
                          {
                            formatDecimal(1 -
                              dataHistoryId?.derajat_keanggotaan_produksi
                            )}
                          ){" "}
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
                      <Th>(αi)</Th>
                      <Th>Zi</Th>
                      <Th>αi×Zi</Th>
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
                      <Td>{formatDecimal(dataHistoryId?.r1_derajat_persediaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r1_derajat_permintaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r1_alpha)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r1_z1)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r1_aixzi)}</Td>
                    </Tr>
                    <Tr>
                      <Td>R2</Td>
                      <Td>
                        Jika ada <Text as="b">Sedikit</Text> Persediaan dan{" "}
                        <Text as="b">Banyak</Text> Permintaan Maka{" "}
                        <Text as="b">Banyak</Text> Produksi
                      </Td>
                      <Td>{formatDecimal(dataHistoryId?.r2_derajat_persediaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r2_derajat_permintaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r2_alpha)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r2_z1)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r2_aixzi)}</Td>
                    </Tr>
                    <Tr>
                      <Td>R3</Td>
                      <Td>
                        Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                        <Text as="b">Sedikit</Text> Permintaan Maka{" "}
                        <Text as="b">Sedikit</Text> Produksi
                      </Td>
                      <Td>{formatDecimal(dataHistoryId?.r3_derajat_persediaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r3_derajat_permintaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r3_alpha)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r3_z1)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r3_aixzi)}</Td>
                    </Tr>
                    <Tr>
                      <Td>R4</Td>
                      <Td>
                        Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                        <Text as="b">Banyak</Text> Permintaan Maka{" "}
                        <Text as="b">Banyak</Text> Produksi
                      </Td>
                      <Td>{formatDecimal(dataHistoryId?.r4_derajat_persediaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r4_derajat_permintaan)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r4_alpha)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r4_z1)}</Td>
                      <Td>{formatDecimal(dataHistoryId?.r4_aixzi)}</Td>
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
                        <Text as="b">{formatDecimal(dataHistoryId?.produksi_es_batu)}</Text>
                      </Td>
                    </Tr>
                  </Tbody>
                  <TableCaption>
                    <HStack>
                      <Text as="b"> Produksi Es Batu</Text>
                      <Text>= ∑(αi×Zi) / ∑(αi) = 450 / 1 =</Text>
                      <Text as="b"> {formatDecimal(dataHistoryId?.produksi)}</Text>
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
      </>
    );
  };
  
  if (isLoading) return <Loading />;

  return (
    <>
      {" "}
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        flex={18}
        mt={4}
      >
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Persediaan</Th>
                <Th>Permintaan</Th>
                <Th>Produksi</Th>
                <Th>Waktu</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataHistory &&
                dataHistory.results.map((item, index) => (
                  <Tr key={item.id_calculate}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Text>{formatDecimal(item.persediaan)}</Text>
                    </Td>
                    <Td>
                      <Text>{formatDecimal(item.permintaan)}</Text>
                    </Td>
                    <Td>
                      <Text>{formatDecimal(item.produksi)}</Text>
                    </Td>
                    <Td>
                      <Text>{formatDate(item.datetime)}</Text>
                      <Text>{formatTime(item.datetime)}</Text>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => {
                          HandleDetail(item.id_calculate);
                        }}
                        color={white}
                        bg={primaryColor}
                        mx={2}
                      >
                        Detail
                      </Button>
                      <Button
                        onClick={() => {
                          setIdCalculate(item.id_calculate);
                          setIsDeleteOpen(true);
                        }}
                        color={white}
                        bg="red"
                        mx={2}
                      >
                        Hapus
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
          <NoData />
        </TableContainer>
      </Box>
      <ModalConfirmDelete />
      <ModalResult />
    </>
  );
}
