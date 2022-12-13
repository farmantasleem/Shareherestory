import { Container, Image, Stack, VStack,Text,Heading,Button, Input, Textarea} from "@chakra-ui/react";
import React from "react";

import {ArrowForwardIcon} from "@chakra-ui/icons"
import {MdOutlineEmail} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import {GoMarkGithub} from "react-icons/go"
import {AiFillLinkedin} from "react-icons/ai"
import logo from "../../assets/logo.jpg"

const Footer=()=>{
    let navigate=useNavigate()
    
    return(
        <Container border={"2px"} borderColor="silver" mt="20px" p="20px" pt="40px" minH="300px" bgColor={"rgb(11,22,42)"} color="white" minW="100%">
            <Stack alignItems={"center"}  justifyContent={"space-evenly"} w="full" h="full" alignContent={"center"} direction={{"base":"column",md:"row"}}>
                
                <VStack  textAlign={"center"} maxW={{base:"full",md:"30%"}}>
                    <Image borderRadius={"10px"} src={logo}/>
                       {/* <Heading pb="10px" borderBottomColor={"white"} borderBottom="2px" size="lg">SharehereStory.</Heading>
                        <Text fontWeight={"400"} fontSize={"16px"} color={"#d9d5d5"}>  ShareHereStories is an platform where world listen your stories, Some stories deserves world attention so therefore we came up with shareherestory where you can read and publish your own stories</Text> */}
                </VStack>
              
                <VStack gap="20px" textAlign={"center"}>
                        <Heading borderBottomColor={"white"} borderBottom="2px" as="h2" size="md">Publish Your Story, Today!🤩</Heading>
                        <Text maxW="300px" fontWeight={"400"} fontSize="16px">Share your story with shareherestory where world listens your story</Text>
                        <Button minW="220px" onClick={()=>{navigate("/sharestory")}} rightIcon={<ArrowForwardIcon/>} colorScheme="linkedin"> Add Story</Button>
                </VStack>
                <VStack pt="20px" gap="10px">
              
              <Button minW="220px" maxW="120px" bgColor={"rgb(238,242,255)"} color="rgb(11,22,42)" border="2px" borderColor={"rgb(11,22,42)"} rightIcon={<GoMarkGithub/>}><a target="_blank" href="https://github.com/farmanfirnas">Follow on Github</a></Button>
                <Button minW="220px" maxW="120px" bgColor={"rgb(238,242,255)"} color="rgb(11,22,42)" border="2px" borderColor={"rgb(11,22,42)"} rightIcon={<AiFillLinkedin/>}><a target="_blank" href="https://www.linkedin.com/in/farmanarsh/">Follow on Linkedin</a> </Button> 
                  <Text pb="10px" >Made with ❤️ by Farman</Text>
            </VStack>
            </Stack>
        </Container>

    )
}

export default Footer;

