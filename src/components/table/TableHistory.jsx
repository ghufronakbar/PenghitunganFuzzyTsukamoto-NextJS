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
import { primaryColor, secondaryColor, white } from "@/lib/color";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { formatDate, formatTime } from "@/lib/formatDate";

export function TableHistory() {
  const toast = useToast();
  const searchParams = useSearchParams();
  const [idCalculate, setIdCalculate] = useState();
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const queryClient = useQueryClient();

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
                      <Td>{dataHistoryId?.persediaan}</Td>
                      <Td>
                        <Center>
                          {dataHistoryId?.derajat_keanggotaan_persediaan ==
                          0 ? (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={secondaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Little
                            </Box>
                          ) : (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={primaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Lot
                            </Box>
                          )}
                        </Center>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Demand</Td>
                      <Td>{dataHistoryId?.permintaan}</Td>
                      <Td>
                        <Center>
                          {" "}
                          {dataHistoryId?.derajat_keanggotaan_permintaan ==
                          0 ? (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={secondaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Little
                            </Box>
                          ) : (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={primaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Lot
                            </Box>
                          )}
                        </Center>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Ice Cube Production</Td>
                      <Td>{dataHistoryId?.produksi}</Td>
                      <Td>
                        <Center>
                          {dataHistoryId?.derajat_keanggotaan_produksi == 0 ? (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={secondaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Little
                            </Box>
                          ) : (
                            <Box
                              as="button"
                              borderRadius="md"
                              bg={primaryColor}
                              color={white}
                              px={4}
                              h={8}
                            >
                              A Lot
                            </Box>
                          )}
                        </Center>{" "}
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
                      <Th>Conditons</Th>
                      <Th>Degree of Supply</Th>
                      <Th>Degree of Demand</Th>
                      <Th>(αi)</Th>
                      <Th>Zi</Th>
                      <Th>αi×Zi</Th>
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
                      <Td>{dataHistoryId?.r1_derajat_persediaan}</Td>
                      <Td>{dataHistoryId?.r1_derajat_permintaan}</Td>
                      <Td>{dataHistoryId?.r1_alpha}</Td>
                      <Td>{dataHistoryId?.r1_z1}</Td>
                      <Td>{dataHistoryId?.r1_aixzi}</Td>
                    </Tr>
                    <Tr>
                      <Td>R2</Td>
                      <Td>
                        If There is <Text as="b">Little</Text> Supply and{" "}
                        <Text as="b">Lot</Text> Demand Then{" "}
                        <Text as="b">Lot</Text> Production
                      </Td>
                      <Td>{dataHistoryId?.r2_derajat_persediaan}</Td>
                      <Td>{dataHistoryId?.r2_derajat_permintaan}</Td>
                      <Td>{dataHistoryId?.r2_alpha}</Td>
                      <Td>{dataHistoryId?.r2_z1}</Td>
                      <Td>{dataHistoryId?.r2_aixzi}</Td>
                    </Tr>
                    <Tr>
                      <Td>R3</Td>
                      <Td>
                        If There is <Text as="b">Lot</Text> Supply and{" "}
                        <Text as="b">Little</Text> Demand Then{" "}
                        <Text as="b">Little</Text> Production
                      </Td>
                      <Td>{dataHistoryId?.r3_derajat_persediaan}</Td>
                      <Td>{dataHistoryId?.r3_derajat_permintaan}</Td>
                      <Td>{dataHistoryId?.r3_alpha}</Td>
                      <Td>{dataHistoryId?.r3_z1}</Td>
                      <Td>{dataHistoryId?.r3_aixzi}</Td>
                    </Tr>
                    <Tr>
                      <Td>R4</Td>
                      <Td>
                        If There is <Text as="b">Lot</Text> Supply and{" "}
                        <Text as="b">Lot</Text> Demand Then{" "}
                        <Text as="b">Lot</Text> Production
                      </Td>
                      <Td>{dataHistoryId?.r4_derajat_persediaan}</Td>
                      <Td>{dataHistoryId?.r4_derajat_permintaan}</Td>
                      <Td>{dataHistoryId?.r4_alpha}</Td>
                      <Td>{dataHistoryId?.r4_z1}</Td>
                      <Td>{dataHistoryId?.r4_aixzi}</Td>
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
                        <Text as="b">{dataHistoryId?.produksi_es_batu}</Text>
                      </Td>
                    </Tr>
                  </Tbody>
                  <TableCaption>
                    <HStack>
                      <Text as="b"> Ice Cube Production</Text>
                      <Text>= ∑(αi×Zi) / ∑(αi) = 450 / 1 =</Text>
                      <Text as="b"> {parseFloat(dataHistoryId?.produksi)}</Text>
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
                <Th>Supply</Th>
                <Th>Demand</Th>
                <Th>Production</Th>
                <Th>Input At</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataHistory &&
                dataHistory.results.map((item, index) => (
                  <Tr key={item.id_calculate}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Text>{item.persediaan}</Text>
                    </Td>
                    <Td>
                      <Text>{item.permintaan}</Text>
                    </Td>
                    <Td>
                      <Text>{item.produksi}</Text>
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
                        Delete
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
