import { Container,Heading,HStack, Image, Text,VStack,Button } from "@chakra-ui/react";
import React from "react";
import bg from "../../assets/bg2.png"
import share from "../../assets/share.png"
import { useNavigate } from "react-router-dom";
const Front=()=>{
    let navigate=useNavigate()
    return(<Container overflow={"hidden"} bgSize={"cover"} bgImage={bg} minW={"full"} minH="600px">
<HStack w="full" p="20px" justifyContent={"space-between"}>
    <VStack gap="5px">
        <Heading fontWeight={"300"} fontSize={"39px"}>We're So Excited...</Heading>
        <Heading fontSize={"49px"}>To Listen Your Story!</Heading>
        <HStack pt="20px">
            <Button onClick={()=>{navigate("/stories?result=mostviewed")}} bgColor="white" color="black">Read Top Stories</Button>
            <Button onClick={()=>{navigate("/about")}} fontStyle={"italic"} bgColor="rgb(196,236,236)">Who We are?</Button>
        </HStack>
    </VStack>
    <Image height={"500px"} src={share}/>
</HStack>
    </Container>
        )
}

export default Front