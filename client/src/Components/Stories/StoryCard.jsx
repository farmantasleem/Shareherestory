import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {AiOutlineHeart,AiFillHeart,AiOutlineShareAlt} from "react-icons/ai"
import {FiShare} from "react-icons/fi"
import {useNavigate} from "react-router-dom"
import {FaUserAlt} from "react-icons/fa"
const StoryCard=({title,img,description,author,views})=>{
  let navigate=useNavigate()
    const[like,setlike]=useState(false)
    return<Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
   p="10px"
   pl="20px"
    variant='outline'
  minH="300px"
  maxH="300px"
  minW="90%"
  maxW="90%"
    borderRadius={"20px"}
    bgColor={"white"}
    justifyContent="left"
    textAlign={"left"}
    justifyItems={"left"}
  >
    <Image
      objectFit='cover'
      maxW={{ base: '80%', md: '350px' }}
      minW={{ base: '80%', md: '350px' }}
      src={img}
      alt='Caffe Latte'
      m="auto"
      minH="250px"
      maxH="250px"
      borderRadius={"10px"}
    />
  
    <Stack>
      <CardBody maxW={{base:"90%",md:"100%"}} minW={{base:"90%",md:"100%"}} m="auto">
        <Heading size='md'>{title}</Heading>
  
        <Text py='2' maxH={"100px"} overflow="hidden">
          {description}
        </Text>
        <Heading size="19px" color="white" borderRadius={"10px"}  pl="10px" pr="10px" bgColor="rgb(11,22,42)" fontWeight={"500"} maxW="fit-content">{"Total Views : "+views}</Heading>
        <Text py='2'>
      
        <Button bgColor="transparent" leftIcon={<FaUserAlt/>}>Shared By {author||"auhor"}</Button>
        </Text>
        <HStack gap="10px">
       <Button variant='solid'  rightIcon={<ArrowForwardIcon />} onClick={()=>{navigate(`/reading/${title.split(" ").join("_")}`)}} bgColor="rgb(199,236,228)">
          Read Story
        </Button>
        <Button rightIcon={like?<AiFillHeart/>:<AiOutlineHeart/>} onClick={()=>{setlike(!like)}}>{like?"Liked":"Like"}</Button>
        <Button rightIcon={<FiShare/>}>Share</Button>
       </HStack>
      </CardBody>
  
      <CardFooter>
      

      </CardFooter>
    </Stack>
  </Card>
}

export default StoryCard