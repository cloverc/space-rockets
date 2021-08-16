import React, { useContext } from 'react';
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";
import { FavouritesContext } from "../context/favourite-context";

export default function FavouriteButton({type, id}) {

    const { favouriteLaunches, favouriteLaunchPads, addLaunchToFaves, removeLaunchFromFaves, addLaunchPadToFaves, removeLaunchPadFromFaves } = useContext(FavouritesContext);

    let currentFavourite = favouriteLaunches.includes(id) || favouriteLaunchPads.includes(id);
 
    const isFavourite = currentFavourite ? true : false;
     
    function handleClick(event, type, id) {
        event.preventDefault()
        if (type === 'launch') {
			if (currentFavourite) {
				removeLaunchFromFaves(id)
			} else {
				addLaunchToFaves(id)
			}
		}
        if (type === 'launchPad') {
            if (currentFavourite) {
                removeLaunchPadFromFaves(id)
            } else {
                addLaunchPadToFaves(id)
            }
        }
	}

    return (
        <>
          <IconButton
            onClick={(event) => handleClick(event, type, id)}
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
