import { Container, HStack,VStack, Stack ,Heading} from "@chakra-ui/react";
import React from "react";
import Form from "../Components/ShareStory/Form";
import Livepreview from "../Components/ShareStory/Livepreview";
const ShareStory=()=>{
    const [storydata, setstorydata] = React.useState({
        title: "",
        description: "",
        content: "",
   
        img: "",
        category:""
      })
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