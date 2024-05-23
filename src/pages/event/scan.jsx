import { HeadAdmin } from "@/components/HeadApp";
import { SidebarMenu } from "@/components/SidebarOrganization";
import { FormCalculate } from "@/components/form/FormCalculate";

import { withAuth } from "@/lib/authorization";
import { Container, Flex } from "@chakra-ui/react";

function MenuAdd() {
  return (
    <>
      <HeadAdmin />
      <main>
        <Flex>
          <SidebarMenu flex={1} />{" "}
          <Container maxW="80%">            
            <FormCalculate/>
          </Container>
        </Flex>
      </main>
    </>
  );
}

export default withAuth(MenuAdd);
