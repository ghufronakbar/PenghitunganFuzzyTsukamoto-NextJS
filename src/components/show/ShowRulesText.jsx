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
          Rules that are used:{" "}
        </Text>
        <Table mt={4}>
          <Thead>
            <Tr>
              <Th>R1</Th>
              <Td>
                If There is <Text as="b">Little</Text> Supply and{" "}
                <Text as="b">Little</Text> Demand Then{" "}
                <Text as="b">Little</Text> Production
              </Td>
            </Tr>
            <Tr>
              <Th>R2</Th>
              <Td>
                If There is <Text as="b">Little</Text> Supply and{" "}
                <Text as="b">Lot</Text> Demand Then <Text as="b">Lot</Text>{" "}
                Production
              </Td>
            </Tr>
            <Tr>
              <Th>R3</Th>
              <Td>
                If There is <Text as="b">Lot</Text> Supply and{" "}
                <Text as="b">Little</Text> Demand Then{" "}
                <Text as="b">Little</Text> Production
              </Td>
            </Tr>
            <Tr>
              <Th>R4</Th>
              <Td>
                If There is <Text as="b">Lot</Text> Supply and{" "}
                <Text as="b">Lot</Text> Demand Then <Text as="b">Lot</Text>{" "}
                Production
              </Td>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </>
  );
};

export default ShowRulesText;
