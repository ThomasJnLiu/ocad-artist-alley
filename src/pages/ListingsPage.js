import React from "react";
import ListingsList from "../components/ListingsList/ListingsList";
import { Container, Flex, VStack } from "@chakra-ui/react";

const ListingsPage = () => {
  return (
    <div>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <ListingsList />
          </VStack>
        </Flex>
      </Container>
    </div>
  );
};

export default ListingsPage;
