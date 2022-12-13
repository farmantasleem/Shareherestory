import { Grid, GridItem, VStack,Image,Heading,Text, HStack, Button, color } from "@chakra-ui/react";
import React from "react";
import {AiFillLike} from "react-icons/ai"
import "./index.css"
export const Feature=()=>{
    return(<Grid
        h='500px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
        mt="20px"
 
      >
        <GridItem   className="shadow" borderRadius={"10px"}  rowSpan={2} colSpan={1} >
            <VStack gap={"0px"}  borderRadius={"10px"} bgColor={"white"} p="20px" minW={"full"} minH="full">
                <Image  borderRadius={"10px"} minW="full" maxH={"310px"} src="https://inc42.com/cdn-cgi/image/width=1360,height=1020,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/09/masai-ftr.png"/>
                <Heading fontSize={"17px"}>Recently Added: Masai Offers Full stack web developement</Heading>
                <HStack  alignItems="center" p="10px" minW={"full"} justifyContent="space-between">
                    <Text>By: Prateek Shukla</Text>
                    <Text>Date: 19 Nov 2022</Text>
                </HStack>
                <HStack  alignItems="center" p="10px" minW={"full"} justifyContent="space-between">

                        <Button w={"200px"} mt="5px" display="inline" bgColor="rgb(252,167,51)" color="white">Read</Button>
                        <AiFillLike size={"30px"} display="inline" color="rgb(0,42,144)" cursor={"pointer"}/>
                </HStack>
            </VStack>
        </GridItem>
        <GridItem colSpan={1} bg='papayawhip' />
        <GridItem colSpan={1} bg='papayawhip' />
        
      </Grid>)
}