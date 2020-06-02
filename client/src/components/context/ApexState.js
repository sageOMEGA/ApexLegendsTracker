import React, { useReducer } from "react";
import Axios from "axios";
import ApexContext from "./apexContext";
import ApexReducer from "./apexReducer";
import { LOADING_TRUE, LOADING_FALSE, GAMER } from "./types";

const ApexState = (props) => {
  const InitialState = {
    loading: false,
    gamer: {},
  };

  const isEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // Iniialize Reducer
  const [state, dispatch] = useReducer(ApexReducer, InitialState);

  // Finding The Specific Gamer Details
  const getGamer = async (platform, gamerId) => {
    dispatch({
      type: LOADING_TRUE,
    });

    const res = await Axios.get(
      `http://localhost:5000/api/v2/profile/${platform}/${gamerId}`
    );

    dispatch({
      type: GAMER,
      payload: res.data.data,
    });

    dispatch({
      type: LOADING_FALSE,
    });
  };

  return (
    <ApexContext.Provider
      value={{
        loading: state.loading,
        gamer: state.gamer,
        getGamer,
        isEmpty,
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};

export default ApexState;
