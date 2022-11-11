import React from "react";
import {
  Heading,
  Box,
  Text,
  HStack,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
function Setup() {
  return (
    <Box
      bg="
    #f9f9f7"
    pb="100px"
    >
      <Heading
        fontFamily="Poppins"
        fontSize="32px"
        lineHeight="42px"
        pt="100px"
        mt="100px"
      >
        Setup takes less than 5 minutes
      </Heading>
      <Text mt="10px">
        Mailtrap Sandbox is compatible with any app or framework that supports
        SMTP
      </Text>
      <HStack ml="200px">
        <Image src="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-480x345.png" />
        <List
          spacing={8}
          fontSize="19px"
          fontFamily="Poppins"
          color="blue.900"
          textAlign="left"
          
        >
          <ListItem w="60%">
            <ListIcon as={CheckIcon} color="green.500" />
            Select your integration from 20+ code samples or copy SMTP
            credentials
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Paste the configuration to your project
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Run your email sending code
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem w="70%">
            <ListIcon as={CheckIcon} color="green.500" />
            Instantly receive a message in your Sandbox inbox
          </ListItem>
        </List>
      </HStack>
    </Box>
  );
}

export default Setup;
