// import { FormControl, FormHelperText, FormLabel, Select, Input, Stack, InputGroup, InputLeftAddon, Heading, VStack} from "@chakra-ui/react"
import { FormControl,  Select,Input, Stack, InputGroup, InputLeftAddon, Heading, VStack, Textarea,Button, useToast} from "@chakra-ui/react"
// import React, { useState } from "react"
import React from "react"
import {MdAlternateEmail,MdCall,MdPersonOutline,MdDriveFileRenameOutline} from "react-icons/md"

export const Details = ({setreload,reload}) => {
    const[details,setdetails]=React.useState({name:"",email:"",ph:"",gender:"male"})

    let toast=useToast()
    const[cart,setcart]=React.useState([])

      //get cart
  const getCart=async()=>{
    const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/cart",{
      headers:{
        "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
      }
    })

    const parsed_data=await resp.json();
    setcart(parsed_data.data||[])
  }

  React.useEffect(()=>{
 
    getCart()
 
  },[reload])
    const handlecheckout=async()=>{
        if(details.name.length>1&&details.email.length>1&&details.ph.length>0){
           
              await getCart()

              const resp=await fetch(`https://ill-jade-eel-gear.cyclic.app/order/${cart[0].product._id}`,{
                method:"POST",
                headers:{
                    "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
                  }

              })

              if(resp.status==200){
                toast({
                    title: 'Successfully Ordered',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                setreload((s)=>{return !s})
              }else{
                toast({
                    title: 'Try again',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
              }
             
         
        }else{
                toast({
          title: 'Information Required',
          description: "All input fields are required",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        }
    }

    return (
        <Stack   m="5px" borderRadius="10px"  direction={"column"} minW="30vw">
            <Heading mb="20px" w="Full" textAlign={"center"} fontSize={"21px"}>Personal Details</Heading>
            <FormControl>
             <VStack justifyContent={"left"} alignItems="left" spacing={"20px"}>
             <InputGroup>
                    <InputLeftAddon children={<MdPersonOutline/>} />
                    <Input value={details.name} onChange={(e)=>{setdetails({...details,name:e.target.value})}} type='text'  placeholder='Enter Your Full Name' />
                </InputGroup>
                <InputGroup>
                    <Textarea placeholder="Enter Your Address" />
                </InputGroup>
             <InputGroup >
        
                    <InputLeftAddon children={<MdAlternateEmail/>} />
                    <Input type='email' value={details.email} onChange={(e)=>{setdetails({...details,email:e.target.value})}}  placeholder='Enter Email Address' />
                </InputGroup>
                <InputGroup >
        
                    <InputLeftAddon children={<MdCall/>} />
                    <Input type='tel' value={details.ph} onChange={(e)=>{setdetails({...details,ph:e.target.value})}}  placeholder='Phone number' />
                </InputGroup>
                
                <Select variant='outline' value={details.gender} onChange={(e)=>{setdetails({...details,gender:e.target.value})}}  placeholder='Gender'>
                    <option>
                        Male
                    </option>
                    <option>
                        Female
                    </option>
                    <option>
                        Other
                    </option>
                </Select>
                <Button schema="telegram" colorScheme={"telegram"} onClick={handlecheckout}>Checkout</Button>
             </VStack>

            </FormControl>
        </Stack>)
}