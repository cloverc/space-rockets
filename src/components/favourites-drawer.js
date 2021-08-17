import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/core";
import { Star } from "react-feather";

export default function FavouritesDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button leftIcon={Star} variantColor="yellow" ref={btnRef} variant="outline" onClick={onOpen}>
          Favourites
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Favourites</DrawerHeader>
  
            <DrawerBody>
              <p>Body goes here</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}
