import {Checkbox, Center, Container,FormControl,FormLabel,FormErrorMessage, FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Authenticated } from "../redux/actions";


const Login = () => {
  const [userData,setuserData]=useState({
      email:"",
      password:"",
      name:""
  })

  const toast=useToast()

  const dispatch=useDispatch()
  const handleLogin=async()=>{
    try{
        const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/user/login",{
            method:"POST",
           
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email:userData.email,password:userData.password})
            
        })
        if(resp.status!="404"){
            const dataresp=await resp.json();
            localStorage.setItem("JWT_TOKEN",dataresp.token)
            toast({
                title: 'Login Successfull.',
           
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              dispatch(Authenticated())
            
              onClose()
           
        }else{
            toast({
                title: 'Wrong Credentials',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        
      }catch(err){
        alert("error"+err.message)
      }
}

const handleSignup=async()=>{
  try{
    const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/user/signup",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    if(resp.status!="404"){
        toast({
            title: 'Account created successfully.',
       
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }else{
        toast({
            title: 'Account cannot be created',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
    
  }catch(err){
    alert("error"+err.message)
  }

}
const navigate=useNavigate()

  return (
    <Container bgColor={"rgb(0,18,51)"} minW="100%" minH={"500px"}>
    <Center>
    <Tabs margin={"40px"} minH={{md:"400px"}}  minW={{md:"400px"}} borderRadius="10px" maxW="400px" bgColor="white" padding={"20px"}>
  <TabList>
   <HStack minW="100%" justifyContent={"center"}> <Tab>LOGIN</Tab>
    <Tab>REGISTER</Tab>
   </HStack>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Center >
      <VStack>
      <FormControl gap={"20px"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="Password" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          <Checkbox mt="20px" defaultChecked>Remember me</Checkbox>
          <Button mt="30px" minW="100%" bgColor="rgb(202,225,249)" color="rgb(0,18,51)" onClick={handleLogin}>LOGIN</Button>
          </FormControl>
      </VStack>

        
      
      </Center>
    </TabPanel>
    <TabPanel>
    <Center>
        <FormControl>
        <FormLabel>Name</FormLabel>
          <Input type="text" value={userData.name} onChange={(e)=>{setuserData({...userData,name:e.target.value})}}/>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="text" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          
          
          <Button mt="30px" minW="100%" onClick={handleSignup}>REGISTER</Button>
        
        </FormControl>
      </Center>
    </TabPanel>
 
  </TabPanels>
</Tabs>
    </Center>
      
    </Container>
  );
};

export default Login