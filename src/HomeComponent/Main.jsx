import { Flex, Box, Heading, Text, Button, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import styled from "styled-components";

export default function Main() {
  return (
    <Box justifyContent="space-between" display={"flex"} paddingTop="4%"  w={"90%"} margin="auto"  gap={1} h="100vh" flexDirection={useBreakpointValue({ base: "column", lg: "row" })} >


       <Box paddingTop={"4%"}
    //    bg={"green"}
        w="60%" 
        >
       <Flex alignItems="center" gap={1} mb={2}>
          <Box>
            <Image src={badgePercent} alt="badgepercent" />
          </Box>{" "}
          <Heading size="md" ml="2" color="rgb(36,142,200)">
            Investment made easy
          </Heading>
        </Flex>

        <Box 
        // bg={"blue"} 
        textAlign="left" pt={"4%"} > 
           <Text fontSize={"65px"} fontWeight="700" >The Easies Way to Track Multiple Currencies</Text>
          </Box>
          <Box>
            <Text fontSize={"21px"} textAlign={"left"} > Market Watchman allow you tu monitor your balances, trade without, limits and earn rewards for specific coins.</Text>
          </Box>

        </Box>

       <Box  
        // bg={"yellow"} 
             >
          <Image src={home} w="100%"   marginTop={"1%"} marginLeft={"18%"}   />
          
       </Box>
      
    </Box>

  )
}
    


    


  
