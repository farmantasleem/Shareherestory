// import { Container,Heading, Stack,Center } from "@chakra-ui/react";
import {  Stack,Center ,Heading, VStack, Table, Td,Th} from "@chakra-ui/react";
import React,{useEffect,useState} from "react";
// import {GiDirectionSigns} from "react-icons/gi"
import { Cart } from "../Components/Cart/Cart"
import {Details} from "../Components/Cart/Details"
import { useSearchParams } from "react-router-dom";
import ShoppingCart from "../Components/Cart/ShoppingCart";


export const Checkout=()=>{
    const[details,setdetails]=useState({name:"",email:"",ph:"",gender:""})
    const[total,settotal]=useState(0)
    const[reload,setreload]=useState(false)
    return(<>
        <Center overflow={"hidden"}  bgSize={"cover"}   >
        <Stack direction={{base:"column",md:"row"}}>
        <VStack>
         
           <ShoppingCart reload={reload} setreload={setreload} total={total} settotal={settotal}/>
        </VStack>
     
      <Details  reload={reload} setreload={setreload} />
    </Stack>
        </Center>
</>)
}