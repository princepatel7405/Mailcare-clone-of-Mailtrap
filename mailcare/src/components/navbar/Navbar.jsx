import React from "react";
import {
  HStack,
  Text,
  Image,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Navbar = () => {
    //const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex justifyContent="center" pos="fixed" bg="white" >
      
        <Image 
          w="10%"
          h="auto"
          src="https://i.postimg.cc/y891HtH8/Screenshot-2022-11-11-032413.png"
          alt="Mailcare"
          ml={{sm:"20rem",md:"10rem",lg:"5rem",xl:"1rem"}}
          
        />
      
      <HStack ml={{sm:"5rem",md:"10rem",lg:"15rem",xl:"20rem"}} spacing="50px" mr="5rem" >
        <Menu>
          <MenuButton color="blue.900" bg="white"  as={Button} rightIcon={<ChevronDownIcon />}>
            Email Testing
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" _hover={{ color: 'green.400',bg:"white" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2021/06/qa_automation_icon_menu.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <Text>QA Automation 
                <Text>Automation for email testing</Text>
              </Text>
              
            </MenuItem>
            <MenuItem minH="40px"  _hover={{ color: 'green.400',bg:"white"  }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2021/06/check_html_icon_menu.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>HTML check 
                <Text>Check HTML/CSS issues</Text>
              </Text>
            </MenuItem>
            <MenuItem minH="40px" _hover={{ color: 'green.400',bg:"white"  }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Fake SMTP Server 
                <Text>Your Own SMTP server</Text>
              </Text>
            </MenuItem>
            <MenuItem minH="40px" _hover={{ color: 'green.400',bg:"white"  }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Sandbox API 
                <Text>Intigrate with your API</Text>
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>

        <Box color="blue.900" fontWeight="500">Email Api</Box>

        <Box color="blue.900" fontWeight="500">Pricing</Box>
                <Menu>
          <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
            Resources
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" _hover={{ color: 'green.400' ,bg:"white" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-09.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <Text>API
                <Text>Integrate with existing</Text>
              </Text>
              
            </MenuItem>
            <MenuItem minH="40px" _hover={{ color: 'green.400',bg:"white"  }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-08.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Case Studies
                <Text>Success stories of our customers</Text>
              </Text>
            </MenuItem>
            <MenuItem minH="40px" _hover={{ color: 'green.400',bg:"white"  }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-07.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Blog 
                <Text>Best content about emails</Text>
              </Text>
            </MenuItem>
            <MenuItem minH="40px"  _hover={{ color: 'green.400' ,bg:"white" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://mailtrap.io/wp-content/uploads/2022/03/Transactional-Email-Sending_icon-06.svg"
                alt="Simon the pensive"
                mr="12px"
              />
              <Text>Help
                <Text>How-to's and Knowledge base</Text>
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Stack direction="row" spacing={4} align="center">
        
        <Button color="green.400" variant="outline">
          Log in
        </Button>
        <Button colorScheme="green"  color="white" variant="solid">
          Sign up
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
