import React from "react";
import { Heading, SimpleGrid, Text, Container } from "@chakra-ui/react";
function Faq() {
  return (
    <div style={{ backgroundColor: "#f9f9f7",paddingBottom:"100px" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <Heading fontFamily="Poppins" fontSize="32px" color="blue.900" pt="100px">
        Frequently Asked Questions
      </Heading>
      <SimpleGrid  columns={2} mt="50px" spacing={5} ml="100px" mr="100px">
        <Container height="300px" w="80%" bg="white" boxShadow="2xl" borderRadius="10px" textAlign="left" p="20px">
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            Can Email Sandbox send emails to real recipients inboxes?
          </Text>
          <Text mt="20px">
            Email Sandbox is a testing tool and is not designed to deliver
            emails to real email addresses. But you can use our Email API or
            SMTP Service to send emails to your recipients.
          </Text>
        </Container>
        <Container height="300px" boxShadow="2xl" w="80%" bg="white" textAlign="left" borderRadius="10px" p="20px">
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            How can I preview my email in different email clients?
          </Text>
          <Text mt="20px">
            HTML Check analyzes your template for support with popular email
            clients and explains how to fix errors right away. This is more
            efficient than manual comparison of previews from email clients, but
            you still can forward your test emails to real recipients and open
            them in specific email clients.
          </Text>
        </Container>
        <Container boxShadow="2xl" height="300px" w="80%" bg="white" textAlign="left" p="20px" borderRadius="10px">
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            Can I send a test email to Sandbox from my Gmail?
          </Text>
          <Text mt="20px">
            Yes, you can! On Business, Premium, and Enterprise plans, there is a
            separate email address available for each of your inboxes. With it,
            you can send messages from any CRM, email sending app or client,
            such as Gmail, Hubspot, Sendgrid, etc.
          </Text>
        </Container>
        <Container boxShadow="2xl" height="300px" w="80%" bg="white" textAlign="left" p="20px" borderRadius="10px">
          <Text fontSize="xl" fontFamily="Poppins" color="blue.900">
            How much does Email Sandbox cost?
          </Text>
          <Text mt="20px">
            Mailtrap features a forever free plan that offers the basic
            functionality for personal use of Email Sandbox. Paid plans start
            from $9.99 per month, and are suitable for companies of different
            sizes. View the Mailtrap pricing for more details.
          </Text>
        </Container>
      </SimpleGrid>
    </div>
  );
}

export default Faq;
