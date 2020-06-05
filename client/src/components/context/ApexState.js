import React, { useReducer } from "react";
import Axios from "axios";
import ApexContext from "./apexContext";
import ApexReducer from "./apexReducer";
import { LOADING_TRUE, LOADING_FALSE, GAMER } from "./types";
import Lifeline from "../Images/Lifeline.png";
import Wraith from "../Images/Wraith.png";
import Bloodhound from "../Images/Bloodhound.png";
import Pathfinder from "../Images/Pathfinder.png";
import Caustic from "../Images/Caustic.png";
import Revenant from "../Images/Revenant.png";
import Loba from "../Images/Loba.png";
import Gibraltar from "../Images/Gibraltar.png";
import Wattson from "../Images/Wattson.png";
import Octane from "../Images/Octane.png";
import Bangalore from "../Images/Bangalore.png";
import Crypto from "../Images/Crypto.png";
import Mirage from "../Images/Mirage.png";

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
        Lifeline,
        Wraith,
        Crypto,
        Mirage,
        Bloodhound,
        Bangalore,
        Octane,
        Wattson,
        Caustic,
        Gibraltar,
        Pathfinder,
        Loba,
        Revenant,
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};

export default ApexState;
