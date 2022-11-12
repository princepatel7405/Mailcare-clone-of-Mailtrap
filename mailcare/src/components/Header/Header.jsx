import React from 'react'
import { Heading,Text ,Box,Button,HStack,Image,Flex} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (<div>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
</style>
    <Heading fontSize="42px" fontFamily="Poppins" mt="100px">Email Sandbox</Heading>
    <Box mt="50px">
    <Text fontSize="20px" fontWeight="600" lineHeight="23px" p="15px">Capture SMTP traffic from staging and dev environments</Text>
    <Text fontSize="20px" fontWeight="600" lineHeight="23px" p="15px">Automate test flows and scenarios with flexible API</Text>
    <Text fontSize="20px" fontWeight="600" lineHeight="23px" p="15px">Analyze email content for spam score and validate HTML/CSS</Text>
    </Box>
    <NavLink to="/sign-up">

    <Button color="white" bg="green.300" fontSize="14px" p="22px" mt="40px" >Sign Up for Free</Button>
    </NavLink>
  <HStack mt="50px" justifyContent="center">
    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg'/>
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Python.svg"/>
    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/NET.svg'/>
    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg' />
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg" />
  </HStack>
  <Flex justifyContent="center" mt="40px">
  <Image  src="https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-964x574.png"/>

  </Flex>
  </div>
  )
}

export default Header