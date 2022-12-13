import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {AiOutlineHeart,AiFillHeart,AiOutlineShareAlt} from "react-icons/ai"
import {FiShare} from "react-icons/fi"
import {FaUserAlt} from "react-icons/fa"
import blankimg from "../../assets/blankimg.jpg"
const Livepreview=({storydata})=>{
    const[like,setlike]=useState(false)
    return<Card
    direction={{ base: 'column', sm: 'column' }}
    overflow='hidden'
   p="10px"
    variant='outline'
    bgColor={"rgb(221,232,228)"}
    border="2px"
    borderColor={"white"}
  >
     <Heading fontSize={"24px"} w="full" textAlign={"center"} m="10px">Live Preview</Heading>
    <Image
      objectFit='cover'
      maxW={{ base: '80%', md: '350px' }}
      src={storydata.img||blankimg}
      alt='Caffe Latte'
      m="auto"
      
      borderRadius={"10px"}
    />
  
    <Stack>
        
      <CardBody maxW={{base:"90%",md:"380px"}} m="auto">
        <Heading size='md' >{storydata.title||"Title of the Story"}</Heading>
  
        <Text py='2'>
         {storydata.description||"Description of the story"}
        </Text>
        <Text py='2'>
      
        <Button bgColor="transparent" leftIcon={<FaUserAlt/>}>Shared By {storydata.author||"Unknown"}</Button>
        </Text>
      </CardBody>
  
      <CardFooter>
       <HStack gap="10px">
       <Button variant='solid'  rightIcon={<ArrowForwardIcon />} bgColor="rgb(199,236,228)">
          Read Story
        </Button>
        <Button rightIcon={like?<AiFillHeart/>:<AiOutlineHeart/>} onClick={()=>{setlike(!like)}}>{like?"Liked":"Like"}</Button>
        <Button rightIcon={<FiShare/>}>Share</Button>
       </HStack>

      </CardFooter>
    </Stack>
  </Card>
}

export default Livepreview