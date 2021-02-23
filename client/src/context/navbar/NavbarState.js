import React, { useReducer } from "react";
import NavbarContext from "./navbarContext";
import NavbarReducer from "./navbarReducer";
import { SET_NAVBAR } from "../types";

const NavbarState = (props) => {
  const initialState = {
    active: "/login"
  };

  const [state, dispatch] = useReducer(NavbarReducer, initialState);

  // set Alert
  const setActive = (pathname) => {
    dispatch({
      type: SET_NAVBAR,
      payload: pathname,
    });
  };

  return (
    <NavbarContext.Provider
      value={{
        active: state.active,
        setActive,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
