import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { id, name, email, phone, type } = contact;

  const onChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (current == null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <h2 className="text-primary text-center">
            {current ? "Edit Contact" : "Add Contact"}
          </h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="phone"
              name="phone"
              value={phone}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <h5>Contact Type</h5>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              name="type"
              value="personal"
              id="customRadioInline1"
              className="custom-control-input"
              checked={type === "personal"}
              onChange={onChange}
            />{" "}
            <label
              className="custom-control-label"
              htmlFor="customRadioInline1"
            >
              Personal{" "}
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              name="type"
              value="professional"
              id="customRadioInline2"
              className="custom-control-input"
              checked={type === "professional"}
              onChange={onChange}
            />{" "}
            <label
              className="custom-control-label"
              htmlFor="customRadioInline2"
            >
              Professional{" "}
            </label>
          </div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
            className="btn btn-primary btn-block mt-4"
          />
          {current && (
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
