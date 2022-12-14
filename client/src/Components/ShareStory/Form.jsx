import { VStack, Input, Heading, Text, Textarea, Button, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle, FaPencilAlt } from "react-icons/fa"
import {BiCategory} from "react-icons/bi"
const Form = ({storydata,setstorydata}) => {

 
  const addstory=async()=>{
    const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/story/add",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
        },
        body:JSON.stringify(storydata)
    })

    if(resp.status!="200"){
      alert("Can't be publish, Try Again")
    }else{
      alert("Publish Successfully")
    }
  }
  return (
    <VStack gap="5px" border="2px" borderColor={"rgb(51,63,85)"} p="20px" borderRadius={"15px"} bgColor={"white"} justifyContent={"left"} w="40%">
      <Heading color={"rgb(51,63,85)"} fontSize={"29px"}>Share Your Story,Today!</Heading>
      <InputGroup><InputLeftAddon children={<FaPencilAlt />} />      
        <Input placeholder={"Title of the Story e.g The rising kid"} value={storydata.title} onChange={(e)=>{setstorydata({...storydata,title:e.target.value})}} /></InputGroup>

      <Input p="5px" type={"text"}  title="hgg" placeholder="Thumbnail of the Story"  value={storydata.img} onChange={(e)=>{setstorydata({...storydata,img:e.target.value})}}/>
      <Textarea
     value={storydata.description} onChange={(e)=>{setstorydata({...storydata,description:e.target.value})}}
        placeholder='Type short description of Your Story'
        size='xl'
        p="10px"
      />


      <Textarea
        p="10px"
       
        placeholder='Type your Story'
        size='xl'
        minH={"100px"}
        value={storydata.content} onChange={(e)=>{setstorydata({...storydata,content:e.target.value})}}
      />
     
      <InputGroup>
        <InputLeftAddon children={<BiCategory />} />
        <Input type='string' placeholder='Category of the story'  value={storydata.category} onChange={(e)=>{setstorydata({...storydata,category:e.target.value})}}/>
      </InputGroup>
      <Button w="full" borderColor={"rgb(248,170,0)"} _hover={{ border: "2px", bgColor: "white", color: "rgb(248,170,0)" }} onClick={addstory} bgColor={"rgb(51,63,85)"} color="white">Publish</Button>
    </VStack>

  )
}

export default Form