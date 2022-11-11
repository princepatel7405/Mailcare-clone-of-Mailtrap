import { Heading ,SimpleGrid,Text,  Stack,Image} from "@chakra-ui/react";
import React from "react";
const MiddleContent = () => {
  return (
    <div style={{backgroundColor:"white"}}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <Heading
        fontFamily="Poppins"
        fontSize="32px"
        color="blue.900"
        mt="50px"
        lineHeight="42px"
      >
        Email testing challenges that
      </Heading>
      <Heading
        fontFamily="Poppins"
        fontSize="32px"
        color="blue.900"
        lineHeight="42px"
      >
        {" "}
        Mailtrap Sandbox solves
      </Heading>
      <SimpleGrid columns={2} spacing={10} mt="50px">
        <Stack  direction={"row"} spacing={6} ml="180px" >
            <Image  src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg"/>
            <Stack >
            <Text textAlign="left" w="97%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Configure your testing environment in 5 minutes</Text>
            <Text textAlign="left" w="100%" fontSize="14px" lineHeight="23px">Each account comes with an individual testing environment. Integrate it with your app in just a few clicks.</Text>

            </Stack>
        </Stack>
        <Stack  direction={"row"} spacing={6} mr="180px" >
            <Image  w='70px' src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg"/>
            <Stack >
            <Text textAlign="left" w="100%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Keep all testing data organized in one place</Text>
            <Text textAlign="left" w="100%" fontSize="14px" lineHeight="23px">Create individual inboxes for different environments or review servers and group them into relevant projects.</Text>

            </Stack>
        </Stack>
        <Stack  direction={"row"} spacing={6} ml="180px" >
            <Image w="70px" src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg"/>
            <Stack >
            <Text textAlign="left" w="97%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Quickly integrate with Sandbox API</Text>
            <Text textAlign="left" w="100%" fontSize="14px" lineHeight="23px">Get started quickly with our well-documented API and configure automated testing with unlimited API calls.</Text>

            </Stack>
        </Stack>
        <Stack  direction={"row"} spacing={6} mr="180px" >
            <Image w="70px" src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg"/>
            <Stack >
            <Text textAlign="left" w="97%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Dig into both the content and source of your emails</Text>
            <Text textAlign="left" w="100%" fontSize="14px" lineHeight="23px">View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.</Text>

            </Stack>
        </Stack>
        <Stack  direction={"row"} spacing={6} ml="180px" >
            <Image  w="70px" src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg"/>
            <Stack >
            <Text textAlign="left" w="100%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Easily share test emails with your team</Text>
            <Text textAlign="left" w="100%" fontSize="14px" lineHeight="23px">Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.</Text>
            </Stack>
        </Stack>
        <Stack  direction={"row"} spacing={6} mr="180px" >
            <Image w="70px"  src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg"/>
            <Stack >
            <Text textAlign="left" w="97%" fontSize="18px" lineHeight="23px" fontFamily="Poppins">Test your email sending service</Text>
            <Text textAlign="left" w="96%" fontSize="14px" lineHeight="23px">Send emails to Mailtrap Email Sandbox directly from your CRM or email sending service. Simulate sending to multiple recipients.</Text>

            </Stack>
        </Stack>
      </SimpleGrid>
    </div>
  );
};

export default MiddleContent;
