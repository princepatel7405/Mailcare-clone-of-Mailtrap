import React from "react";
import { Box ,Image,Flex} from "@chakra-ui/react";
function Users() {
  return (
    <div style={{ padding: "50px" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
      </style>
      <Box fontSize="38px" w="60%" ml="20%" fontFamily="Poppins"  >
        Trusted by 150,000+ monthly active users
      </Box>
      <Flex justifyContent="space-evenly" mt="100px" mb="150px">
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg"/>
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg"/>
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg"/>
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg"/>
    <Image src="https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg"/>
      </Flex>
    </div>
  );
}

export default Users;
