import { Container, HStack,VStack, Stack ,Heading, useToast} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../Components/ShareStory/Form";
import Livepreview from "../Components/ShareStory/Livepreview";
const ShareStory=()=>{
    let navigate=useNavigate()
    const [storydata, setstorydata] = React.useState({
        title: "",
        description: "",
        content: "",
   
        img: "",
        category:""
      })

      let statedata=useSelector((es)=>{return es})
      let toast=useToast()
      React.useEffect(()=>{
      if(!statedata.auth){
          toast({
            title: 'Login to Publish Your Story',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
       return  navigate("/")
      }
      },[])
    return(<Container bgImage={"https://www.incimages.com/uploaded_files/image/1920x1080/getty_169958707_174801.jpg"} minW="100%">
        <Stack p="20px" direction={{base:"column",md:"row"}} justifyContent={"space-around"}>
          
               
                    <Form storydata={storydata} setstorydata={setstorydata}/>
               
                <VStack>
           
            <Livepreview storydata={storydata}/>
                </VStack>

        </Stack>
    </Container>)
}

export default ShareStory