import React from "react";
import { Box, Flex, Text,Spacer ,Button,Image} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function BottomPoster() {
  return (
    <Box bg="blue.900">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <Flex>
        <Box ml="150px" textAlign="left">
          <Text color="white" fontSize="xl" fontFamily="Poppins" mt="40px">
            Create Your Free Account
          </Text>
          <Text color="white"  fontSize="6xl" fontFamily="Poppins">In 3 Clicks</Text>
          <NavLink to="/sign-up">

          <Button color="white" mb="80px" bg="green.300" fontSize="14px" p="22px" mt="20px" >Sign Up Now</Button>
          </NavLink>
        </Box>
        <Spacer/>
        <Image src="https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg" h="300px"/>
      </Flex>
    </Box>
  );
}

export default BottomPoster;
