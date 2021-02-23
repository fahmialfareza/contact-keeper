import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
import NavbarContext from "../../context/navbar/navbarContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  const navbarContext = useContext(NavbarContext);

  const { setActive } = navbarContext;

  useEffect(() => {
    loadUser();
    setActive("/");
  }, []);

  return (
    <div className="row mt-2">
      <div className="col-md-6">
        <ContactForm />
      </div>
      <div className="col-md-6">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
