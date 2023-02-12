import {
  Drawer,
  DrawerOverlay,
  Button,
  HStack,
  Image,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

const Navbarsmall = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cur, setcur] = React.useState(0);
  let statedata = useSelector((es) => es);
  console.log(statedata);
  return (
    <HStack bgColor="white" p="20px" justifyContent={"space-between"}>
      <Image height={"70px"} maxW="50%" src={logo} />

      <Button colorScheme="blue" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer size="xs" placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"white"} justifyContent={"center"}>
          <DrawerHeader borderBottomWidth="1px">
            {" "}
            <Heading>Share Here Story</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              ml="20px"
              textAlign="left"
              alignItems={"left"}
              gap={"10px"}
              fontSize={"1.2rem"}
            >
              <Link
                onClick={() => {
                  onClose();
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  onClose();
                }}
                to="/"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  onClose();
                }}
                to="/stories?result=mostviewed"
              >
                Story
              </Link>
              <Link
                onClick={() => {
                  onClose();
                }}
                to="/login"
              >
                {statedata.auth?"Dashboard":"Login"}
              </Link>

              {/* <Button>Login</Button>
            <Button minW={"full"} height="3rem" bgColor={"rgb(252,167,51)"} border="2px" _hover={{"color":"rgb(252,167,51)","bgColor":"white","borderColor":"rgb(252,167,51)"}} color="white">Share Your Story</Button> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
export default Navbarsmall;
