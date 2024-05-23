import {
  Alert,
  AlertIcon,
  Box,
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
  Tooltip, // Import Tooltip
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsCheck2All, BsXCircle } from "react-icons/bs";
import axiosInstanceAuthorization from "../../lib/axiosInstanceAuthorization";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Loading } from "../Loading";
import { primaryColor, secondaryColor, tersierColor, white } from "@/lib/color";
import {
  CheckCircleIcon,
  CheckIcon,
  CloseIcon,
  TimeIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {formatDate, formatTime} from "@/lib/formatDate";

export function TableHistory() {
  const router = useRouter();
  const toast = useToast();
  const searchParams = useSearchParams();
  const queryPaid = searchParams.get("paid");
  const [idCalculate, setIdCalculate] = useState();
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const {
    data: dataHistory,
    isLoading,
    isError,
    refetch: refetchDataEvent,
  } = useQuery({
    queryKey: ["calculate/history"],
    queryFn: async () => {
      const dataResponse = await axiosInstanceAuthorization.get(
        `/calculate/history`
      );
      console.log(dataResponse);
      return dataResponse.data;
    },
  });

  const noData = () => {
    if (dataHistory && dataHistory.length === 0) {
      return (
        <Alert status="warning">
          <AlertIcon />
          There's no data
        </Alert>
      );
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error loading data</Text>;

  return (
    <>
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
                    <Text>{item.permintaan}</Text>
                  </Td>
                  <Td>
                    <Text>{item.persediaan}</Text>
                  </Td>
                  <Td>
                    <Text>{item.produksi}</Text>
                  </Td>
                  <Td>
                  <Text>{formatDate(item.datetime)}</Text>
                  <Text>{formatTime(item.datetime)}</Text>
                  </Td>
                  <Td>
                    <Button onClick={() => {}} color={white} bg={primaryColor} mx={2}>
                      Detail
                    </Button>
                    <Button onClick={() => {}} color={white} bg="red" mx={2}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        {noData()}
      </TableContainer>
    </>
  );
}
