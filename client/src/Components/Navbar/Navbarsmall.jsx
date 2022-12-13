import { Drawer, DrawerOverlay,Button, HStack, Image , DrawerBody,DrawerContent,DrawerHeader,useDisclosure, VStack, Heading} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom"
import {HamburgerIcon} from "@chakra-ui/icons"
import logo from "../../assets/logo.png"


const Navbarsmall=()=>{

  const { isOpen, onOpen, onClose } = useDisclosure()
  const Navlinks=[{link:"Home",to:"/"},{link:"About",to:"/about"},{"link":"Story","to":"/story"}]
    const[cur,setcur]=React.useState(0)
    return(
    <HStack  bgColor="white" p="20px" justifyContent={"space-between"}>
 <Image height={"70px"} maxW="50%" src={logo}/>        

        <Button colorScheme='blue' onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer size="xs"  placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"white"} justifyContent={"center"} >
          <DrawerHeader  borderBottomWidth='1px'> <Heading>Share Here Story</Heading></DrawerHeader>
          <DrawerBody>
         <VStack ml="20px" textAlign="left" alignItems={"left"} gap={"10px"} fontSize={"1.2rem"}>
         {
            Navlinks.map((e,i)=>{
                return <Link  onClick={()=>{
                  setcur(i) 
                  onClose()}} style={cur==i?{"color":"rgb(252,167,51)"}:{"backgroundColor":"white"}} to={e.to}>{e.link}</Link>
            })
           }
          
            {/* <Button>Login</Button>
            <Button minW={"full"} height="3rem" bgColor={"rgb(252,167,51)"} border="2px" _hover={{"color":"rgb(252,167,51)","bgColor":"white","borderColor":"rgb(252,167,51)"}} color="white">Share Your Story</Button> */}
         </VStack>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>)
}
export default Navbarsmall