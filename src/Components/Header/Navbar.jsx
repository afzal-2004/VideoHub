import { Button, HStack } from "@chakra-ui/react";
import { Example } from "../Togglemode";
import { RiMenu2Line } from "react-icons/ri";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  DrawerBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <>
      <HStack className=" flex justify-between p-5">
        <RiMenu2Line className="    text-[30px]" onClick={onOpen} />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton className="p-4" />

            <DrawerBody className="mt-[20px]  flex flex-col justify-between ">
              <ul className="h-[50%]    flex  flex-col text-[25px] items-center gap-3 ">
                <li onChange={onClose}>
                  <Link to="/">Home</Link>
                </li>

                <li onClick={onclose}>
                  <Link to="/videos">Videos</Link>
                </li>

                <li onClick={onclose}>
                  <Link to="/upload"> Upload Video</Link>
                </li>
              </ul>

              <HStack>
                <div className=" flex w-full justify-between ">
                  <Link to={"/Login"}>
                    <Button href="#" background={"blue"} color={"white"}>
                      Login
                    </Button>
                  </Link>
                  <Link to={"/signUp"}>
                    <Button href="#" background={"blue"} color={"white"}>
                      Sign UP
                    </Button>
                  </Link>
                </div>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Example />
      </HStack>
    </>
  );
};
