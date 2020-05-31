import { GET_GAMER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_GAMER:
      return {
        ...state,
        gamer: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
