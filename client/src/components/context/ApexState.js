import React, { useReducer } from "react";
import Axios from "axios";
import ApexContext from "./apexContext";
import ApexReducer from "./apexReducer";
import { METADATA, PLATFORM_INFO, STATS } from "./types";

const ApexState = (props) => {
  const InitialState = {
    metadata: {},
    platformInfo: {},
    overallStats: {},
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

    dispatch({
      type: STATS,
      payload: res.data.data.segments[0].stats,
    });
  };

  return (
    <ApexContext.Provider
      value={{
        metadata: state.metadata,
        platformInfo: state.platformInfo,
        overallStats: state.overallStats,
        getGamer,
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};

export default ApexState;
