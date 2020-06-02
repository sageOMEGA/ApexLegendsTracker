import { LOADING_TRUE, LOADING_FALSE, GAMER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GAMER:
      return {
        ...state,
        gamer: action.payload,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        state,
      };
  }
};
