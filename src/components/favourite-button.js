import React, { useState } from 'react';
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";


export default function FavouriteButton({type, id}) {

    const [favourite, setFavourite] = useState(false)

    function handleClick(event) {
        event.preventDefault()
		favourite ? setFavourite(false) : setFavourite(true);
	}

    console.log(type, id)

    return (
        <>
          <IconButton
            onClick={(event) => handleClick(event, type)}
            as={Star}
            variant="solid"
            colorScheme="white"
            size="sm"
            stroke="#FFD700"
            style={favourite ? { fill: "#FFD700" } : { fill: "none" }}
          />
        </>
    )
}
