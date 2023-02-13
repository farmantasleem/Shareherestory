import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text, useToast } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {AiOutlineHeart,AiFillHeart,AiOutlineShareAlt} from "react-icons/ai"
import {FiShare} from "react-icons/fi"
import {useNavigate} from "react-router-dom"
import {FaUserAlt} from "react-icons/fa"
const Mystory=({title,img,description,author,views,id,setreload})=>{
  let navigate=useNavigate()
  let toast=useToast()
  const handledelete=async()=>{
    const resp=await fetch(`https://ill-jade-eel-gear.cyclic.app/story/${id}`,{
      method:"DELETE",
      headers:{"authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`}
    })

    if(resp.status==200){
      toast({
        title: 'Successfully Deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setreload((s)=>!s)
    }else{
      alert("TRY AGAIN")
    }
  }


    const[like,setlike]=useState(false)
    return<Card
    direction={{ base: 'column', md: 'row' }}
    overflow='hidden'
   p="10px"
   pl="20px"
    variant='outline'
  minH={{base:"600px",md:"300px"}}
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
       
       </HStack>
      </CardBody>
  
      <CardFooter>
      

      </CardFooter>
    </Stack>
  </Card>
}

export default Mystory