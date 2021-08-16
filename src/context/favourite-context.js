import React, { useEffect, createContext, useReducer } from 'react';

const initialState = {
  favouriteLaunches: localStorage.getItem("favouriteLaunches")
  ? JSON.parse(localStorage.getItem("favouriteLaunches"))
  : [],
  favouriteLaunchPads: localStorage.getItem("favouriteLaunchPads")
  ? JSON.parse(localStorage.getItem("favouriteLaunchPads"))
  : [],
}

const ADD_FAVE_LAUNCH = "ADD_FAVE_LAUNCH";
const REMOVE_FAVE_LAUNCH = "REMOVE_FAVE_LAUNCH";
const ADD_FAVE_LAUNCH_PAD = "ADD_FAVE_LAUNCH_PAD";
const REMOVE_FAVE_LAUNCH_PAD = "REMOVE_FAVE_LAUNCH_PAD";

export const FavouritesContext = createContext(initialState);

const favouritesReducer = (state = { favouriteLaunches: [], favouriteLaunchPads: [] }, action) => {
  if (action.type === ADD_FAVE_LAUNCH) {
    return {
      ...state, 
      favouriteLaunches: [action.payload, ...state.favouriteLaunches],
    }
  }
  if (action.type === REMOVE_FAVE_LAUNCH) {
    const filteredLaunches = state.favouriteLaunches.filter(item => {
      return item !== action.payload;
    });
    return {
      favouriteLaunches: [...filteredLaunches], favouriteLaunchPads: [...state.favouriteLaunchPads]};

  }
  if (action.type === ADD_FAVE_LAUNCH_PAD) {
    return {
      ...state,
      favouriteLaunchPads: [action.payload, ...state.favouriteLaunchPads],
    };
  }
  if (action.type === REMOVE_FAVE_LAUNCH_PAD) {
    const filteredLaunchPads = state.favouriteLaunchPads.filter(item => {
      return item !== action.payload;
    });
    return {
      favouriteLaunches: [...state.favouriteLaunches], favouriteLaunchPads: [...filteredLaunchPads] };

  }
  return state;
};

export const FavouritesProvider = ({children}) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState)

  useEffect(() => {
    localStorage.setItem(
      "favouriteLaunches",
      JSON.stringify(state.favouriteLaunches)
    );
    localStorage.setItem(
      "favouriteLaunchPads",
       JSON.stringify(state.favouriteLaunchPads)
    );
  }, [state]);

  const addLaunchToFaves = item => {
    dispatch ({
        type: ADD_FAVE_LAUNCH,
        payload: item,
    });
  };

  const removeLaunchFromFaves = item => {
    dispatch ({
        type: REMOVE_FAVE_LAUNCH,
        payload: item,
    });
  };

  const addLaunchPadToFaves = item => {
    dispatch ({
        type: ADD_FAVE_LAUNCH_PAD,
        payload: item,
    });
  };

  const removeLaunchPadFromFaves = item => {
    dispatch ({
        type: REMOVE_FAVE_LAUNCH_PAD,
        payload: item,
    });
  };

  return <FavouritesContext.Provider value={{favouriteLaunches: state.favouriteLaunches, favouriteLaunchPads: state.favouriteLaunchPads, addLaunchToFaves, removeLaunchFromFaves, addLaunchPadToFaves, removeLaunchPadFromFaves}}>{children}</FavouritesContext.Provider>
}
