import { Image, Select,Heading,Text,HStack, useToast} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import {ImCross} from "react-icons/im"
const CartItem=({img,author,cost,settotal,setreload,id})=>{
  const[price,setprice]=React.useState(20)
  const[qty,setqty]=React.useState(1)
  const[visit,setvisit]=React.useState(1)
useEffect(()=>{
  settotal((s)=>s+cost)
},[])
let toast=useToast()
const handledelete=async()=>{
  
  const resp=await fetch(`https://ill-jade-eel-gear.cyclic.app/cart/${id}`,{
    method:"DELETE",
    headers:{"authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`}
  })

  if(resp.status==200){
    toast({
      title: 'Deleted Successfully',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    setreload((s)=>!s)
  }else{
    toast({
      title: 'Try again later',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }
}
    return(
        <HStack shadow={"md"} p="10px" mb="20px" spacing={"20px"} minW={"430px"} maxW="430px">
              //img of the book  <Image borderRadius="10px" h="120px" w="120px" src={img||"https://i.etsystatic.com/24307483/r/il/582184/3121962896/il_570xN.3121962896_dfx4.jpg"}/>
              //author  <Heading minW="170px" maxW="170px" fontWeight={"400"} fontSize={"17px"}>By {author||"Author"}</Heading>
        
              //price <Text>${cost*qty}</Text>
              
            <ImCross onClick={handledelete} cursor={"pointer"}/>
        </HStack>
    )
}

export default CartItem;