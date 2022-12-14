import { Button, Heading, HStack, Text, useToast, VStack } from "@chakra-ui/react";
// import React,{useEffect, useState} from "react";
import React,{ useState} from "react";
import { RiAddBoxFill } from "react-icons/ri"
// import { GrAddCircle } from "react-icons/gr"
import { FaMinusSquare } from "react-icons/fa"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Details } from "./Details";

export const Cart = ({details,total,settotal}) => {
    const toast=useToast()
    const[ticket,setTicket]=useState(1)
   
   
    



    const handlecheckout=()=>{
        if(details.name.length>1&&details.email.length>1&&details.ph.length>0){
            toast({
                title: 'Success',
               
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
         
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
    
    return (<VStack pl={{base:"10px",md:"20px"}} pr={{base:"10px",md:"20px"}} justifyContent="center" pt="40px" pb={{base:"20px",md:"20px"}} spacing={"25px"} textAlign={"left"}  w={{base:"80vw",md:"40vw"}}  alignItems="left" border="2"  borderRadius={"10px"}>
       <Details/>
      

      
        <Button schema="telegram" colorScheme={"telegram"} onClick={handlecheckout}>Checkout</Button>
    </VStack>)
}