import React from "react";
import { Route, Routes } from "react-router-dom"
import About from "../Pages/About";
import Books from "../Pages/Books";
import { Checkout } from "../Pages/Checkout";
import { Dashboard } from "../Pages/Dashboard";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Loading from "../Pages/Loading";
import Login from "../Pages/Login";
import Read from "../Pages/Read";
import ShareStory from "../Pages/ShareStory";
import Story from "../Pages/Story";

const AllRoutes=()=>{
    return(
        <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/stories" element={<Story/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/sharestory" element={<ShareStory/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/reading/:title" element={<Read/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/contact" element={<Loading/>}/>
        </Routes>
    )
}
export default AllRoutes