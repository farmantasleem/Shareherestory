import React from "react";
import { VStack,Button, Heading, Textarea,InputGroup,Input,InputLeftAddon, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";

export const Comment = ({id}) => {
    const[comment,setcomment]=useState("")
    const [allcomment,setallcomment]=useState([])
    const myid="6394d66e8cd2f044c1ed0679"
  
    const addcomment=async()=>{
        const add_comment=await fetch(`https://ill-jade-eel-gear.cyclic.app/comment/${id}`,{
            method:"POST",
            headers:{
                'content-type':"application/json",
                'authorization':`bearer ${localStorage.getItem("JWT_TOKEN")}`
            },
            body:JSON.stringify({comment})
        })
       if(add_comment.status==200){
        alert("Comment added")
       }else{
        alert("cant be added")
       }
    }

    useEffect(()=>{
       
            getcomment()
       
    },[])
    const getcomment=async()=>{
        const getComment=await fetch(`https://ill-jade-eel-gear.cyclic.app/comment/${id}`)
        const parsed_comment=await getComment.json()
        setallcomment(parsed_comment)
    }
    return (
        <VStack  minW={{base:"80%",md:"800px"}} maxW={{base:"80%",md:"800px"}}>
            <Heading textAlign={"left"} pb="10px" borderBottom="2px" mb="20px" borderBottomColor={"black"} minW="100%" fontSize={"27px"}>Comments</Heading>
           <Textarea value={comment} onChange={(e)=>{setcomment(e.target.value)}} placeholder="Enter Your Comment here"/>
            <Button onClick={()=>{addcomment()}} minW="full">Comment</Button>
        {
            allcomment.map(e=>{
                return   <Text p="20px" mb="20px"  mt="20px" border="2px" borderColor={"silver"} minW="full" textAlign={"left"}>{e.comment + "  - By  "+e.user.name}</Text>
        
            })
        }
          
        </VStack>)
}