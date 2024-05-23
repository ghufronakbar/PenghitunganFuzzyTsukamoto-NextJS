import { HeadAdmin } from "@/components/HeadApp";
import { SidebarMenu } from "@/components/SidebarOrganization";
import { FormCalculate } from "@/components/form/FormCalculate";
import ShowRulesImage from "@/components/show/ShowRulesImage";
import ShowRulesText from "@/components/show/ShowRulesText";

import { withAuth } from "@/lib/authorization";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

function MenuAdd() {
  return (
    <>
      <HeadAdmin />
      <main>
        <Flex>
          <SidebarMenu flex={1} />{" "}
          <Container maxW="80%">
            <Box
              p={8}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mt={4}
            >
              <Heading my={4}>Calculate With Fuzzy Tsukamoto</Heading>
              <ShowRulesImage />
              <ShowRulesText/>
              <FormCalculate />
            </Box>
          </Container>
        </Flex>
      </main>
    </>
  );
}

export default withAuth(MenuAdd);
