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
import { StarIcon } from "@chakra-ui/icons";
import classes from "./ListingCard.module.css";

const ListingCard = (props) => {
  return (
    <a href={props.listing.listingUrl} target="_blank" rel="noreferrer">
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
          <Text fontSize="xl" mt={3}>
            ${props.listing.listingPrice}
          </Text>
        </Box>
      </Box>
    </a>
  );
};

export default ListingCard;
