import React, { useReducer } from "react";
import Axios from "axios";
import ApexContext from "./apexContext";
import ApexReducer from "./apexContext";
import { GET_GAMER } from "./types";

const ApexState = (props) => {
  const InitialState = {
    gamer: {},
  };

  // Iniialize Reducer
  const [state, dispatch] = useReducer(ApexReducer, InitialState);

  // Finding The Specific Gamer Details
  const getGamer = async (platform, gamerId) => {
    const res = await Axios.get(
      `http://localhost:5000/api/v2/profile/${platform}/${gamerId}`
    );
    dispatch({
      type: GET_GAMER,
      payload: res,
    });
    console.log(platform);
  };

  return (
    <ApexContext.Provider
      value={{
        gamer: state.gamer,
        getGamer,
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};

export default ApexState;
