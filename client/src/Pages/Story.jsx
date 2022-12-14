import React from "react";
import { Container, Tab,HStack, TabList, TabPanel, TabPanels, Tabs, VStack,Button,Heading} from "@chakra-ui/react"
import StoryCard from "../Components/Stories/StoryCard";
import {BiTrendingUp} from "react-icons/bi"
import {AiFillRead} from "react-icons/ai"
import bg from "../assets/bg2.png"
import { useSelector } from "react-redux";
import { useSearchParams,useParams } from "react-router-dom";
import Loading from "./Loading";

const Story=()=>{
  const state=useSelector((state)=>{return state})
  const[story,setstory]=React.useState([])
  const[params,setparams]=useSearchParams();
  const[page,setpage]=React.useState(params.get("page")||1)
  const[maxpage,setmaxpage]=React.useState(1)
  const useparams=useParams()
  const result=params.get("result")
  const[loading,setloading]=React.useState(true)

const maxpages=async()=>{
  const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/story/all")
  const parsed_resp=await resp.json();
  setmaxpage(Math.ceil(parsed_resp.Data/3))
 
}

 const getdata=async()=>{ 
    const story_data=await fetch(`https://ill-jade-eel-gear.cyclic.app/story?result=${result}&page=${page}`)
    const story_parse=await story_data.json();
    setstory(story_parse)
    setloading(false)
    console.log(story_parse)
 }

 React.useEffect(()=>{
  if(maxpage==1){
    maxpages()
  }

  getdata()


 },[page])
if(loading){
  return <Loading/>
}
    return(
<Container bgSize={"cover"} overflow="hidden" bgColor={{base:"white",md:"rgb(199,236,228)"}} maxW={"100%"} p={{base:"0px",md:"20px"}}>
        <Container  borderRadius="20px" maxW={{base:"100%",md:"80%"}} p={{base:"0px",md:"20px"}}>
        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList w="full" justifyContent={"center"} >
  <Tab ><Button onClick={()=>{
    setpage((state)=>{ 
      setparams({"result":"mostviewed","page":1})
    
    return 1})
   
    }} borderRadius={"20px"} rightIcon={<BiTrendingUp/>}>Most Viewed</Button></Tab>
    <Tab ><Button onClick={()=>{
      setparams({"result":"recent","page":1}) 
      setpage(1)
      }} borderRadius={"20px"} rightIcon={<AiFillRead/>}>Recent</Button></Tab>
 
    
  </TabList>
  <TabPanels>
    <TabPanel >
  <VStack gap="20px">
     {
      story.map((e=>{
        return  <StoryCard img={e.img} views={e.views} title={e.title} author={e.author.name} description={e.description}/>
        
      }))
     }
    <HStack>
      <Button disabled={1==page} onClick={()=>{
        setpage((state)=>{
           setparams({result,page:state==1?1:state-1}) 
           return state==1?1:state-1})
       
        }}>Prev</Button>
      <Button>{page}</Button>
      <Button disabled={maxpage==page} onClick={()=>{
        setpage((state)=>{
          setparams({result,page:state==maxpage?state:state+1}) 
          return state==maxpage?state:state+1})
      
        }}>Next</Button>
    </HStack>
  </VStack>
  </TabPanel>
    <TabPanel>
    <VStack gap="20px">
    {
      story.map((e=>{
        return  <StoryCard img={e.img} views={e.views} title={e.title} author={e.author.name} description={e.description}/>
        
      }))
     }
    <HStack>
      <Button disabled={1==page} onClick={()=>{
        setpage((state)=>{
           setparams({result,page:state==1?1:state-1}) 
           return state==1?1:state-1})
       
        }}>Prev</Button>
      <Button>{page}</Button>
      <Button disabled={maxpage==page} onClick={()=>{
        setpage((state)=>{
          setparams({result,page:state==maxpage?state:state+1}) 
          return state==maxpage?state:state+1})
      
        }}>Next</Button>
    </HStack>
  </VStack>
    </TabPanel>
  
  </TabPanels>

</Tabs>
        </Container>
</Container>
    )
}

export default Story