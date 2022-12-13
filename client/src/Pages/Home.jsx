import { Center, Container, useStatStyles } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Category from "../Components/Home/Category";
import { Feature } from "../Components/Home/Feature";
import Front from "../Components/Home/Front";
import bg from "../assets/bg2.png"
import { getbooksdata } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const Home=()=>{
    let state=useSelector(st=>st)
   const[loading,setloadig]=useState(true);
   useEffect(()=>{
    setTimeout(() => {
        setloadig(false)
    }, 3000);
   },[])
   if(loading){
    return <Loading/>
   }
    return(
       <>
        <Front/>
        <Container  maxW={"100vw"}>
            <Category/>
        </Container>
        </>

        // <Container minW={"80vw"} >
        //     <Feature/>
        // </Container>
    )
}

export default Home