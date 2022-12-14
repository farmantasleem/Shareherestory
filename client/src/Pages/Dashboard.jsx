import React from "react";
import { Tabs,TabList,Tab,TabPanel,TabPanels,Button,Center,Grid, SimpleGrid, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,} from "@chakra-ui/react"
import {GiShoppingBag} from "react-icons/gi"
import {AiFillRead} from "react-icons/ai"
import{FaComments,FaShoppingCart} from "react-icons/fa"
import{MdLogout} from "react-icons/md"
import CartItem from "../Components/Cart/CartItem";
import Mystory from "../Components/Dashboard/Mystory";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
export const Dashboard=()=>{
  const History=useNavigate()
  const [mystory,setmystory]=useState([])
  const[cart,setcart]=useState([])
  const[reload,setreload]=useState(false)
  const[order,setorder]=useState([])
  const handlelogout=()=>{
    localStorage.removeItem("JWT_TOKEN")
    History("/")
    
  }
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

  //get story
  const getStory=async()=>{
   const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/story/mystories",{
    headers:{
      "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
    }
   })

   const parsed_data=await resp.json();

   setmystory(parsed_data)

  }
const getOrder=async()=>{
  const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/order",{
    headers:{
      "authorization":`bearer ${localStorage.getItem("JWT_TOKEN")}`
    }
   })
   if(resp.status==200){
    const data_resp=await resp.json()
    setorder(data_resp.data.reverse())
   }
}
  useEffect(()=>{
    getStory()
    getCart()
    getOrder()
  },[reload])


    return(
     <Center minW="100%" maxW="100%" p="20px" justifyContent={"center"}>
           <Tabs variant='soft-rounded' colorScheme='twitter'>
  <TabList justifyContent={"center"} justifySelf="center" flexWrap={"wrap"} gap={"20px"}>
  <SimpleGrid  columns={{base:2,md:5}} gap={6}>
  <Tab p="0px"><Button _hover={{"bgColor":"transparent"}} alignContent={"center"} borderRadius={"20px"}  bgColor="transparent" rightIcon={<GiShoppingBag/>}>My Orders</Button></Tab>
    <Tab p="0px"  ><Button  _hover={{"bgColor":"transparent"}} alignSelf="center" alignContent={"center"} borderRadius={"20px"} bgColor="transparent" rightIcon={<AiFillRead/>}>My Stories</Button></Tab>

    <Button _hover={{"bgColor":"transparent"}} onClick={handlelogout} alignContent={"center"} borderRadius={"20px"}  color="white" bgColor="rgb(44,184,210)" rightIcon={<MdLogout/>}>Log Out</Button>
</SimpleGrid>
  
  </TabList>
  <TabPanels>
    <TabPanel>
    <TableContainer>
  <Table variant='striped' colorScheme='black'>

    <Thead >
      <Tr shadow="md">
        <Th>Book Title</Th>
        <Th>Author</Th>
        <Th>Cost</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        order.map(e=>{
          return <Tr>
            <Td>{e.product.title}</Td>
            <Td>{e.product.author}</Td>
            <Td>{e.product.cost}</Td>
          </Tr>
        })
      }
    </Tbody>
    
  </Table>
</TableContainer>
    </TabPanel>
  
    <TabPanel> 
      {
        mystory.map((e)=>{
          
          return  <Mystory setreload={setreload} id={e._id} views={e.views} title={e.title} img={e.img} author={e.author.name} description={e.description}/>
        })
      }
     
       </TabPanel>
  
  </TabPanels>
</Tabs>
     </Center>
)
}