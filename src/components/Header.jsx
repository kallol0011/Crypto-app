// import { HStack , Button, Grid } from '@chakra-ui/react';
// import React from 'react';
// import {Link} from "react-router-dom"
// const Header = () => {
//     return (
//         <Grid templateColumns='repeat(5, 1fr)' gap={4}
//          p={"4"}  shadow={"base"}  bgColor={"blackAlpha.900"} 
          
//         >

//             <Button variant={"unstyled"} color={"white"} >
//               <Link to="/" > Home </Link>
//             </Button>
            
            // <Button variant={"unstyled"} color={"white"} >
            //   <Link to="/exchanges" > Exchanges </Link>
            // </Button>

//             <Button variant={"unstyled"} color={"white"} >
//               <Link to="/coins" > Coins </Link>
//             </Button>

//         </Grid>
//     );
// };

// export default Header;

import { Box, Flex, IconButton, Button, Text, HStack } from "@chakra-ui/react";
import { FaBars, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex
    
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.7rem"
      w={"90%"}
      margin="auto"
      color="white"
      bg="rgb(3, 8, 27)"
    >
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<FaBars />}
          size="md"
          aria-label="Toggle Navigation"
          bg="transparent"
          color="white"
          _hover={{ bg: "transparent" }}
        />
        
      </Box>

      <Box  >
        <Link to="/">
       <Text fontSize={"28px"}  > Coinbase </Text>  
        </Link>
      </Box>


      <Box display={{ base: "none", md: "flex" }} width={{ md: "auto" }} alignItems="center">
      <HStack  gap={9}
         p={"4"}  shadow={"base"}   
          
        >

            <Button variant={"unstyled"} color={"white"} >
              <Link to="/" > Home </Link>
            </Button>
            
            <Button variant={"unstyled"} color={"white"} >
              <Link to="/exchanges" > Exchanges </Link>
            </Button>

            <Button variant={"unstyled"} color={"white"} >
              <Link to="/coins" > Coins </Link>
            </Button>

        </HStack> 

      </Box>

      <Box gap={4} display={{ base: "flex", md: "flex" }} alignItems="center">
      <Button bg="rgb(2,18,45)" color={"white"} >
              <Link to="/login" > 
              <Text mr="1rem">Log In</Text>
               </Link>
            </Button>

        <Button bg="rgb(20,82,191)" color={"white"} >
              <Link to="/signup" > 
              <Text m="0.5rem">Sign Up</Text>
               </Link>
            </Button>
      </Box>
    </Flex>
  );
}

export default Header;
