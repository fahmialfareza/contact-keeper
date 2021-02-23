import React, { useContext, useEffect } from "react";
import NavbarContext from "../../context/navbar/navbarContext";

const About = () => {
  const navbarContext = useContext(NavbarContext);
  const { setActive } = navbarContext;

  useEffect(() => {
    setActive("/about");
  }, []);

  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">This is a fullstack React-app for keeping contacts</p>
      <p className="bg-dark text-light p-1">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
