import { Image, Heading, HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { List, ListItem, Icon } from "@chakra-ui/react";
function Qa() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <div style={{ backgroundColor: "white" }}>
        <Heading
          fontFamily="Poppins"
          fontSize="32px"
          w="25%"
          mt="50px"
          ml="40%"
        >
          How different teams use Email Sandbox
        </Heading>
        <Image
          src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg"
          mt="50px"
          ml="20%"
          w="800px"
        />
        <HStack>
          <Box>
            <Text fontSize="xl" fontFamily="Poppins">
              Developers
            </Text>
            <List spacing={3} textAlign="left">
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Experiment with the email sending functionality
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Cover code with tests to run automated checks via Sandbox API
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Verify different email aspects, debug sending script and HTML
                template
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
          </Box>
          <Box>
            <Text fontSize="xl" fontFamily="Poppins">
            QAs
            </Text>
            <List spacing={3} textAlign="left">
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Run safe email tests in staging and/or testing environment
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Integrate Sandbox API with automated testing tools
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Compare revised emails with their previous versions
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
          </Box>
          <Box>
            <Text fontSize="xl" fontFamily="Poppins">
            Marketers and managers
            </Text>
            <List spacing={3} textAlign="left">
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Smoothly collaborate with development and QA teams
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                View test emails in shared inboxes or forward to recipients
              </ListItem>
              <ListItem>
                <Icon
                  viewBox="0 0 200 200"
                  color="green.500"
                  marginRight="10px"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                Send emails to Sandbox inboxes from CRMs and common sending tools 
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
          </Box>
        </HStack>
      </div>
    </>
  );
}

export default Qa;
