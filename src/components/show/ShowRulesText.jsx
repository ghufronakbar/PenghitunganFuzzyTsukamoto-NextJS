import { primaryColor, white } from "@/lib/color";
import {
  Box,
  Flex,
  Highlight,
  Stack,
  Table,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const ShowRulesText = () => {
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
        <Text fontSize="xl" as="b">
         Aturan yang digunakan
        </Text>
        <Table mt={4}>
          <Thead>
            <Tr>
              <Th>R1</Th>
              <Td>
                Jika ada <Text as="b">Sedikit</Text> Persediaan dan{" "}
                <Text as="b">Sedikit</Text> Permintaan Maka{" "}
                <Text as="b">Sedikit</Text> Produksi
              </Td>
            </Tr>
            <Tr>
              <Th>R2</Th>
              <Td>
                Jika ada <Text as="b">Sedikit</Text> Persediaan dan{" "}
                <Text as="b">Banyak</Text> Permintaan Maka{" "}
                <Text as="b">Banyak</Text> Produksi
              </Td>
            </Tr>
            <Tr>
              <Th>R3</Th>
              <Td>
                Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                <Text as="b">Sedikit</Text> Permintaan Maka{" "}
                <Text as="b">Sedikit</Text> Produksi
              </Td>
            </Tr>
            <Tr>
              <Th>R4</Th>
              <Td>
                Jika ada <Text as="b">Banyak</Text> Persediaan dan{" "}
                <Text as="b">Banyak</Text> Permintaan Maka{" "}
                <Text as="b">Banyak</Text> Produksi
              </Td>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </>
  );
};

export default ShowRulesText;
