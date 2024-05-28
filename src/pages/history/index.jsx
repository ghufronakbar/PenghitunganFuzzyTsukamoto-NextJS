import { HeadApp } from "@/components/HeadApp";
import { SidebarMenu } from "@/components/SidebarMenu";
import { TableHistory } from "@/components/table/TableHistory";
import { withAuth } from "@/lib/authorization";
import { Container, Flex, Heading } from "@chakra-ui/react";

const History = () => {
  return (
    <>
      <HeadApp />
      <main>
        <Flex>
          <SidebarMenu flex={1} />
          <Container maxW="80%">
            <Heading marginBottom="8" marginTop="8">
              Riwayat
            </Heading>
            <TableHistory/>
          </Container>
        </Flex>
      </main>
    </>
  );
};

export default withAuth(History);
