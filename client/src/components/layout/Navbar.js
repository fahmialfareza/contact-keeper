import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import NavbarContext from "../../context/navbar/navbarContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const navbarContext = useContext(NavbarContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const { active } = navbarContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className={"nav-item dropdown " + (active == "/" && "active")}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-user"></i> Hello, {user && user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link
            to="/"
            className={"dropdown-item " + (active == "/" && "active")}
          >
            <i className="fas fa-tachometer-alt"></i>{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
          <a onClick={onLogout} className="dropdown-item">
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </div>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className={"nav-item " + (active == "/register" && "active")}>
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className={"nav-item " + (active == "/login" && "active")}>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          <i className={icon}></i> {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={"nav-item " + (active == "/about" && "active")}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
