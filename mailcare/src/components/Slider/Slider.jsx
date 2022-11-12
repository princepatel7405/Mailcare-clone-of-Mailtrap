import React from "react";
import { Heading, Container, HStack, Text } from "@chakra-ui/react";
function Slider() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f7",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <Heading color="blue.900" fontFamily="Poppins" fontSize="32px">
        From our #BestClientEver
      </Heading>
      <HStack ml="10px" mr="80px" mt="50px" >
        <Container bg="white" padding="20px" h="200px">
          <HStack lineHeight="42px">
            <Heading fontFamily="Poppins" color="blue.900" fontSize="21px">
              Joshua Anderton
            </Heading>
            <Text>@joshuaanderton</Text>
          </HStack>
          <Text textAlign="left">
            Just signed up for @Mailtrap and I’m loving it. So easy to set up.
            Provides so much peace of mind. Ahh just love it.
          </Text>
          <Text textAlign="left" lineHeight="42px">
          1:25 PM – Nov 07, 2020
          </Text>
        </Container>
        <Container bg="white" padding="20px" h="200px">
          <HStack lineHeight="42px">
            <Heading fontFamily="Poppins" color="blue.900" fontSize="21px">
              DeveloperMitch
            </Heading>
            <Text>@mitchellfinlay</Text>
          </HStack>
          <Text textAlign="left">
            After all these years of web development, how have I only JUST
            started using @Mailtrap. I had heard about it, but never got round
            to using it. An awesome way of testing emails
          </Text>
          <Text textAlign="left" lineHeight="42px">
            7:38 PM – Jan 13, 2021
          </Text>
        </Container>
      </HStack>
    </div>
  );
}

export default Slider;
