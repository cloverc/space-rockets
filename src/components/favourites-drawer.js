import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import { Star } from "react-feather";

import { FavouritesContext } from "../context/favourite-context";
import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";

export default function FavouritesDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        leftIcon={Star}
        variantColor="yellow"
        ref={btnRef}
        variant="outline"
        onClick={onOpen}
      >
        Favourites
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
        scrollBehavior={"inside"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favourites</DrawerHeader>
          <DrawerBody>
            <ListLaunches />
            <ListLaunchPads />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function ListLaunches() {
  const { favouriteLaunches } = useContext(FavouritesContext);
  console.log("FavouriteLaunches: ", favouriteLaunches);
  return (
    <>
      <Text fontSize="lg" fontWeight="600" py={3}>
        Launches ({favouriteLaunches.length})
      </Text>
      <SimpleGrid spacing="2">
        {favouriteLaunches.length > 0
          ? favouriteLaunches.map((launch) => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ))
          : null}
      </SimpleGrid>
    </>
  );
}

function ListLaunchPads() {
  const { favouriteLaunchPads } = useContext(FavouritesContext);
  return (
    <>
      <Text fontSize="lg" fontWeight="600" py={3}>
        Launch Pads ({favouriteLaunchPads.length})
      </Text>
      <SimpleGrid spacing={2}>
        {favouriteLaunchPads.length > 0
          ? favouriteLaunchPads.map((launchPad) => (
              <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
            ))
          : null}
      </SimpleGrid>
    </>
  );
}
