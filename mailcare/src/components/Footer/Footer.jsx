import React from "react";
import {
  HStack,
  Stack,
  Text,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
function Footer() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <HStack spacing={190} ml="50px">
        <Stack>
          <Image src="https://drive.google.com/uc?export=view&id=1cunZ8C5ljNPSQy4ajKnAZbpeYcXQe2tE" />
        </Stack>
        <Stack>
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            MailCare
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Pricing
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Changelog
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Status
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Terms of Service
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Navigational Information
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            DPA
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            Railsware Experience
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Mailcare Blog
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Coupler.io
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Smart Checklist for Jira
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            Careers – Railsware Hiring
          </Text>
          <br />
          <br />
          <br />
          <br />
        </Stack>
        <Stack>
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            contact
          </Text>
          <Text
            _hover={{
              color: useColorModeValue("whatsapp.500"),
              cursor: "pointer",
            }}
          >
            email: support@mailtrap.io
          </Text>
          <Text fontSize="sm" paddingLeft="2.7rem">
            <img
              width="55%"
              src="https://drive.google.com/uc?export=view&id=1mtphbxfyGal2Rv4BhvXB3ln5S3gSGHAv"
              alt=""
            />
          </Text>
        <br/>
        <br />
        <br />
        <br />
        <Text fontSize="sm" >
              © Railsware Products Studio, Inc.
            </Text>
            <br />
            <br />
        </Stack>
      </HStack>
    </div>
  );
}

export default Footer;
