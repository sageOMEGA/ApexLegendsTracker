import { METADATA, PLATFORM_INFO } from "./types";

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
    default:
      return {
        state,
      };
  }
};
