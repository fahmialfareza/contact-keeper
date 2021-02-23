import { SET_NAVBAR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_NAVBAR:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
