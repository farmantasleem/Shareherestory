import { Box, Container, Heading, Image, VStack, Text, HStack,Button } from "@chakra-ui/react";
import React from "react";
import {BsForward} from "react-icons/bs"
import bg from "../assets/bg2.png"
import {GrLinkPrevious,GrLinkNext,GrHomeRounded} from "react-icons/gr"
import { useParams, useSearchParams } from "react-router-dom";

import "./first.css"
import { useState } from "react";
import { useEffect } from "react";
import { Comment } from "../Components/Comment/Comment";
const Read = () => {
    let {title}= useParams()
   const uniquetitle=title
    
    console.log(uniquetitle)
    const [reading,setreading]=useState({});
    const setData=async()=>{
        let getdata=await fetch(`https://ill-jade-eel-gear.cyclic.app/story/${uniquetitle}`)
        let resp=await getdata.json();
        setreading(resp[0]);
        console.log(resp)
       
    }


    useEffect(()=>{
        setData()
    
    },[])

    return (<Container alignItems={"center"}  overflow="hidden" minW={"100%"}>
        <VStack m="auto"  borderColor="rgb(44,184,210)" bgColor={"white"} maxW={{base:"100%",md:"70%"}} mt="10px" p="10px" borderRadius={"10px"}>

            <Heading minW="full" textAlign={"left"}  fontStyle={"italic"} pb="10px" borderBottom={"2px"} borderBottomColor="silver">
               {reading.title + " By "+reading?.author?.name||"loading"}
            </Heading>
            <Box borderRadius={"10px"} minW={{base:"90%",md:"full"}} maxW="95%" h="350px" bgRepeat={"no-repeat"} bgPosition="top" bgSize={"cover"} bgImage={reading.img||"loading"} />
            <Text pl="10px" minW="full" textAlign={"left"} fontSize={"20px"} maxW={"750px"}>{reading.content||"loading"}</Text>
       
        <HStack p="10px" minW="full" borderRadius={"10px"} bgColor={"rgb(237,242,247)"} justifyContent="center" gap={"30px"} alignItems="center" alignContent={"center"}>
            
            <Button bgColor={"white"} leftIcon={<GrLinkPrevious/>}>Prev Page</Button>
            <GrHomeRounded/>
            <Button bgColor={"white"} rightIcon={<GrLinkNext/>}>Random Story</Button>
        </HStack>
        {reading._id?<Comment id={reading._id}/>:""}
        </VStack>

    </Container>)
}

export default Read