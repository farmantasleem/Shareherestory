import React from "react";
import {Box, Button, Center} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export default function CategoryItem({img,text,url}){
let navigate=useNavigate()
    return(
        <Box textAlign={"center"} bg='tomato' bgSize={"cover"} bgImage={img} height='380px'>
        <Center w="full" h="full">
            <h1 style={{fontSize:"30px",color:"white"}}>{text}</h1>
        </Center>
        <Button m="auto" onClick={()=>{navigate(`/reading/${url}`)}} _hover={{bgColor:"black"}} color={"white"}  position="relative" top={"-60px"} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
   Read Stories
  </Button>
        </Box>
    
      
    )
}