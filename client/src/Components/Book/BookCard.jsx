import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, Text,useToast } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {AiOutlineHeart,AiFillHeart,AiOutlineShareAlt} from "react-icons/ai"
import {FiShare} from "react-icons/fi"
import {FaUserAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
const BookCard=({title,description,author,cost,img,id})=>{
    const[like,setlike]=useState(false)
    const[cart,setcart]=useState(false)
    let navigate=useNavigate()
    const toast=useToast()
    const addtocart=async()=>{
      const add_item=await fetch(`https://ill-jade-eel-gear.cyclic.app/cart/${id}`,{
        "method":"POST",
        headers:{
          "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
        }
      })
      if(add_item.status==200){
        setcart(true)
        toast({
          title: 'Added to cart Successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }else{
        toast({
          title: 'Login to add to cart',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
    return<Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
   p="10px"
    variant='outline'
    bgColor={"white"}
    maxH={{base:"auto",md:"350px"}}
  >
    <Image
      objectFit='cover'
      maxW={{ base: '80%', md: '250px' }}
      src={img}
      alt='Caffe Latte'
      m="auto"
      maxH={{base:"auto",md:"200px"}}
      borderRadius={"10px"}
    />
  
    <Stack spacing="0px">
      <CardBody maxW={{base:"90%",md:"620px"}} m="auto">
        <Heading size='md'>{title}</Heading>
       
        <Text py='2'>
       {description}
        </Text>
        <Heading size="19px" color="white" borderRadius={"10px"}  pl="10px" pr="10px" bgColor="teal" maxW="fit-content">₹ {cost}</Heading>
        <Text py='2'>
      
        <Button textAlign={"left"} alignContent={"left"} bgColor="transparent" leftIcon={<FaUserAlt/>}>By {author}</Button>
        </Text>
       
      </CardBody>
  
      <CardFooter>
       <HStack gap="10px">
       <Button onClick={()=>{navigate("/checkout")}}  variant='solid'  rightIcon={<ArrowForwardIcon />} bgColor="rgb(199,236,228)">
        Buy Now
        </Button>

        <Button rightIcon={<FiShare/>} onClick={()=>{addtocart()}}>{cart?"Added to cart":"Add To cart"}</Button>
       </HStack>

      </CardFooter>
    </Stack>
  </Card>
}

export default BookCard