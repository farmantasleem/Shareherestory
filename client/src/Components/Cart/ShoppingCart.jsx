import { Stack, Table, Tbody, Td,Th,Tr, VStack ,Heading} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CartItem from "./CartItem";

const ShoppingCart=({settotal,setreload,reload})=>{
    const[cart,setcart]=useState([])
    
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

  useEffect(()=>{
 
    getCart()
 
  },[reload])
    return(
    <Stack p="20px" mt="30px">
           <Heading w="full" textAlign={"center"} fontSize={"21px"}>Shopping Cart</Heading>
         
        <Table>
                <Th>
                        <Td>Book</Td>
                        <Td>Author</Td>
                        
                        <Td>Price</Td>
                        <Td>Remove</Td>
                </Th>
           
            <Tbody gap={"20px"} rowGap="20px">
           {
            cart.map(e=>{
                
                return   (  <Tr mt="20px">
                <CartItem setreload={setreload} id={e._id} settotal={settotal} cost={e.product.cost} author={e.product.author} img={e.product.img} title={e.product.title}/>
                </Tr>)
            })
           }
            </Tbody>
             

        </Table>

    </Stack>
        )
}

export default ShoppingCart;