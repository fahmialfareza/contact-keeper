import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length == 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        filtered != null ? (
          filtered.map((contact) => (
            <CSSTransition
              key={contact._id}
              timeout={500}
              className={{
                enter: "my-node-enter",
                enterActive: "my-node-enter-active",
                exit: "my-node-exit",
                exitActive: "my-node-exit-active",
              }}
            >
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        ) : (
          contacts.map((contact) => (
            <CSSTransition
              key={contact._id}
              timeout={500}
              className={{
                enter: "my-node-enter",
                enterActive: "my-node-enter-active",
                exit: "my-node-exit",
                exitActive: "my-node-exit-active",
              }}
            >
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
