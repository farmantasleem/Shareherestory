import { Text,Container, Heading,InputGroup, Image, HStack,InputLeftAddon, useDisclosure, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, Input, DrawerCloseButton, VStack, Checkbox, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./navbar.css"
import {EmailIcon,LockIcon} from "@chakra-ui/icons"
import {BiUser,BiPhoneCall} from "react-icons/bi"
import bg from "../../assets/bg2.png"
import {MdAddCircle} from "react-icons/md"
import {FaUserCircle} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { Authenticated } from "../../redux/actions";

const Navbar = () => {
    const Navlinks = [{title:"Home",link:"/"}, {title:"Books",link:"books"},{title:"Stories",link:"stories?result=mostviewed"}, {title:"About",link:"about"}, {title:"Contact",link:"contact"}]
    const [cur, setcur] = useState(0)
    const toast=useToast()
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let statedata=useSelector((es)=>{return es})
    const JWT_TOKEN=localStorage.getItem("JWT_TOKEN")
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [userData,setuserData]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
    })
    const [reg, setreg] = useState(true)
    // eslint-disable-next-line 

    const handleLogin=async()=>{
        try{
            const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/user/login",{
                method:"POST",
               
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({email:userData.email,password:userData.password})
                
            })
            if(resp.status!="404"){
                const dataresp=await resp.json();
                localStorage.setItem("JWT_TOKEN",dataresp.token)
                toast({
                    title: 'Login Successfull.',
               
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                  dispatch(Authenticated())
                
                  onClose()
               
            }else{
                toast({
                    title: 'Wrong Credentials',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            
          }catch(err){
            alert("error"+err.message)
          }
    }

    const handleSignup=async()=>{
      try{
        const resp=await fetch("https://ill-jade-eel-gear.cyclic.app/user/signup",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        if(resp.status!="404"){
            toast({
                title: 'Account created successfully.',
           
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }else{
            toast({
                title: 'Account cannot be created',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        
      }catch(err){
        alert("error"+err.message)
      }

    }
    return (
        <HStack borderBottom={"2px"} borderBottomColor={"white"} className="navbar"  bgColor={"white"} overflow={"hidden"} maxW={"100%"} alignContent={"center"} height="75px"  borderColor="white" justifyContent={"space-around"}>
            {/* <Image borderColor="silver" height={"60px"} borderRadius="20px" src={logo} /> */}
            <Heading fontWeight={"300"} color="rgb(44,184,210)" letterSpacing={"2px"} fontSize={"25px"}>ShareHereStory</Heading>
            <HStack spacing={"40px"} fontSize={"17px"}>
                {
                    Navlinks.map((e, i) => {
                        return <Link to={e.link} onClick={() => { setcur(i) }} style={cur == i ? { "color": "white","padding":"9px","borderRadius":"10px","backgroundColor": "rgb(44,184,210)" } : {  }}>{e.title}</Link>
                    })
                }
              

            </HStack>
            <HStack>
                <Button letterSpacing="1.9px" fontSize={"14px"} fontWeight="300" border="2px" _hover={{ "color": "rgb(252,167,51)", "bgColor": "white", "borderColor": "rgb(252,167,51)" }} color="rgb(44,184,210)" onClick={()=>{navigate("/sharestory")}} rightIcon={<MdAddCircle fontSize={"20px"}/>}>Share Your Story</Button>
             <Button  letterSpacing="1.9px" fontSize={"14px"} onClick={()=>{navigate("/dashboard")}} fontWeight="300"  rightIcon={<FaUserCircle/>} bgColor="rgb(44,184,210)" color="white"  hidden={!JWT_TOKEN}>My Dashboard</Button>
                <>
                    <Button display={JWT_TOKEN?"none":""}  letterSpacing="1.9px" fontSize={"14px"} fontWeight="300" ref={btnRef} rightIcon={<FaUserCircle/>} bgColor="rgb(44,184,210)" color="white" onClick={onOpen}>
                        Login/Register
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        
                        
                    >
                        <DrawerOverlay />
                        <DrawerContent  bgColor={"rgb(206,225,229)"}>
                            <DrawerCloseButton />
                            <DrawerHeader>{reg?"Create your account":"Welcome back! Log in "}</DrawerHeader>

                            <DrawerBody >
                           <VStack>
                           <InputGroup display={reg?"flex":"none"}>
                                    <InputLeftAddon children={<BiUser/>} />
                                    <Input type='text' value={userData.name} onChange={(e)=>{setuserData({...userData,name:e.target.value})}} placeholder='Enter Your Full Name' />
                                </InputGroup>
                               
                                <InputGroup display={reg?"flex":"none"}>
                                    <InputLeftAddon children={< BiPhoneCall/>} />
                                    <Input type='text' placeholder='Enter Your Number'  value={userData.phone} onChange={(e)=>{setuserData({...userData,phone:e.target.value})}}/>
                                </InputGroup>
                           <InputGroup>
                                    <InputLeftAddon children={<EmailIcon/>} />
                                    <Input type='email' placeholder='Enter Your Email Address' value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}} />
                                </InputGroup>
                                <InputGroup>
                                <InputLeftAddon children={<LockIcon/>}/>
                                <Input type="password" placeholder="Enter Your Password" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}}/>
                                </InputGroup>
                               
                                <Checkbox w={"full"} textAlign="left">I agree to the terms of use and have read and understand the privacy policy</Checkbox>
                                <Checkbox w={"full"} textAlign="left">Remember me</Checkbox>
                               <HStack>
                              
                               <Text cursor={"pointer"}>{reg?"Already have an account?":"Don't have an account?"}</Text>
                               <Button bgColor={"transparent"} onClick={()=>{setreg(!reg)}}>{reg?"Sign in":"Sign Up"}</Button>
                               </HStack>
                               <Button color="white" onClick={()=>{reg?handleSignup():handleLogin()}}  bgColor='rgb(252,173,65)' minW={"100%"}>{reg?"Signup":"Login"}</Button>
                           </VStack>
                     
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                </>
            </HStack>
        </HStack>)
    // eslint-disable-next-line 
}

export default Navbar