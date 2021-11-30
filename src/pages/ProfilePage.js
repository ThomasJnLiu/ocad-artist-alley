import UserProfile from "../components/Profile/UserProfile";
import { Container, Flex, VStack } from "@chakra-ui/react";
import ListingsList from "../components/ListingsList/ListingsList";

const ProfilePage = () => {
  return (
    <>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <UserProfile />
            <ListingsList userProfile={true} />
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default ProfilePage;
