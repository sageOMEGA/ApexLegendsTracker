import React, { useReducer } from "react";
import Axios from "axios";
import ApexContext from "./apexContext";
import ApexReducer from "./apexReducer";
import { METADATA, PLATFORM_INFO } from "./types";

const ApexState = (props) => {
  const InitialState = {
    metadata: {},
    platformInfo: {},
  };

  // Iniialize Reducer
  const [state, dispatch] = useReducer(ApexReducer, InitialState);

  // Finding The Specific Gamer Details
  const getGamer = async (platform, gamerId) => {
    const res = await Axios.get(
      `http://localhost:5000/api/v2/profile/${platform}/${gamerId}`
    );

    dispatch({
      type: METADATA,
      payload: res.data.data.metadata,
    });

    dispatch({
      type: PLATFORM_INFO,
      payload: res.data.data.platformInfo,
    });
  };

  return (
    <ApexContext.Provider
      value={{
        metadata: state.metadata,
        platformInfo: state.platformInfo,
        getGamer,
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};

export default ApexState;
