import { HeadApp } from "@/components/HeadApp";
import { SidebarMenu } from "@/components/SidebarMenu";
import { FormCalculate } from "@/components/form/FormCalculate";
import ShowRulesImage from "@/components/show/ShowRulesImage";
import ShowRulesText from "@/components/show/ShowRulesText";

import { withAuth } from "@/lib/authorization";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

function MenuAdd() {
  return (
    <>
      <HeadApp />
      <main>
        <Flex>
          <SidebarMenu flex={1} />{" "}
          <Container maxW="80%">
           
              <Heading my={8}>Calculate With Fuzzy Tsukamoto</Heading>
              <ShowRulesImage />
              <ShowRulesText/>
              <FormCalculate />
        
          </Container>
        </Flex>
      </main>
    </>
  );
}

export default withAuth(MenuAdd);
