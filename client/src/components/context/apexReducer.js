import { METADATA, PLATFORM_INFO, STATS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case METADATA:
      return {
        ...state,
        metadata: action.payload,
      };
    case PLATFORM_INFO:
      return {
        ...state,
        platformInfo: action.payload,
      };
    case STATS:
      return {
        ...state,
        overallStats: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
