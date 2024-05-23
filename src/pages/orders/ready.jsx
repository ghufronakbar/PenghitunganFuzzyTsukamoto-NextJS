import { HeadAdmin } from "@/components/HeadApp";
import { SidebarMenu } from "@/components/SidebarOrganization";
import { TableHistory } from "@/components/table/TableHistory";
import { withAuth } from "@/lib/authorization";
import { Container, Flex, Heading } from "@chakra-ui/react";

function Ready() {
  return (
    <>
      <HeadAdmin />
      <main>
        <Flex>
          <SidebarMenu flex={1} />
          <Container maxW="80%">
            <Heading marginBottom="8" marginTop="8">
              Ready Orders
            </Heading>
            {TableHistory(5)}
          </Container>
        </Flex>
      </main>
    </>
  );
}

export default withAuth(Ready);
