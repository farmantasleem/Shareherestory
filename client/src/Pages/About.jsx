import { Button, Card, CardBody, CardFooter, Container, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {MdTravelExplore} from "react-icons/md"

import { useNavigate } from "react-router-dom";
import Loading from "./Loading.jsx"

const About=()=>{
  let navigate=useNavigate()


    return(
       <Container minW="100vw" alignItems={"center"}>
         <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
minW={"70%"}
maxW={{base:"100%",md:"70%"}}
m="auto"
mt="40px"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '500px' }}
    src='https://i.ibb.co/0Zfjbyz/1669611444184.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody p="20px" direction={{base:"column",md:"row"}}>
      <Heading className="first" size='lg' mb="30px">ABOUT</Heading>

      <Text   fontSize={"20px"} >
      Hi, Welcome 👋<br/>
       ShareHereStories is an platform where world listen your stories, Some stories deserves world attention so therefore we came up with shareherestory where you can read and publish your own stories
    
      </Text>
    </CardBody>

    <CardFooter>
   <HStack>   <Button variant='solid' colorScheme='linkedin' rightIcon={<BsLinkedin/>}>
   <a target="_blank" href="https://www.linkedin.com/in/farmanarsh/">Follow on Linkedin</a>
      </Button>
    
      </HStack>
    </CardFooter>
  </Stack>
</Card>
       </Container>

    )
}

export default About