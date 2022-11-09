import React from "react";
import { HStack,Spacer,Text,Image, Box} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <HStack>
        <Box>
        <Image w="150px" src="https://i.postimg.cc/VLHFhj7N/Mail-Care-removebg-preview.png" alt='Mailcare' />
        </Box>
        <Text>Email Testing</Text>
        <Spacer/>

        <Text>Email Api</Text>
        <Spacer/>

        <Text>Pricing</Text>
        <Spacer/>
        <Text>Resources</Text>
    </HStack>
  
  );
};

export default Navbar;
