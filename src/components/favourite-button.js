import React, { useContext } from 'react';
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";
import { FavouritesContext } from "../context/favourite-context";

export default function FavouriteButton({type, item, id}) {

    const { favouriteLaunches, favouriteLaunchPads, addLaunchToFaves, removeLaunchFromFaves, addLaunchPadToFaves, removeLaunchPadFromFaves } = useContext(FavouritesContext);

    let currentFavourite = favouriteLaunchPads.find((launchPad) => launchPad.site_id === id) 
    || favouriteLaunches.find((launch) => launch.flight_number === id);
 
    const isFavourite = currentFavourite ? true : false;
     
    function handleClick(event, type, item) {
        event.preventDefault()
        if (type === 'launch') {
			if (currentFavourite) {
				removeLaunchFromFaves(item)
			} else {
				addLaunchToFaves(item)
			}
		}
        if (type === 'launchPad') {
            if (currentFavourite) {
                removeLaunchPadFromFaves(item)
            } else {
                addLaunchPadToFaves(item)
            }
        }
	}

    return (
        <>
          <IconButton
            onClick={(event) => handleClick(event, type, item)}
            as={Star}
            variant="solid"
            colorScheme="white"
            size="s"
            stroke="#FFD700"
            style={isFavourite ? { fill: "#FFD700" } : { fill: "none" }}
          />
        </>
    )
}
