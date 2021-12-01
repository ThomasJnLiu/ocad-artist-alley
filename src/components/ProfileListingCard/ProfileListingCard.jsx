import React from "react";
import {
  Box,
  Image,
  Badge,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const ProfileListingCard = (props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        htmlWidth="100%"
        objectFit="cover"
        src={props.listing.listingImage}
        style={{ height: "300px" }}
      />
      <Box p="6">
        <Heading
          size="md"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          style={{ fontWeight: "bold" }}
        >
          {props.listing.listingName}
        </Heading>
        <Heading
          size="sm"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
        >
          Vendor Name
        </Heading>

        <Flex>
          <Text fontSize="xl" mt={3}>
            ${props.listing.listingPrice}
          </Text>
          <Spacer />
          {props.onUserProfile && (
            <Button
              colorScheme="pink"
              onClick={() => {
                props.handleDelete(props.listing.id);
              }}
            >
              Delete
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProfileListingCard;
