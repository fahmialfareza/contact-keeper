import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light my-2">
      <div className="card-body">
        <h6 className="text-primary text-capitalize text-left">
          {name}{" "}
          <span
            className={
              "badge " +
              (type == "professional" ? "badge-success" : "badge-primary")
            }
          >
            {type}
          </span>
        </h6>
        <ul className="list-group">
          {email && (
            <li className="list-group-item">
              <i className="fas fa-envelope-open"></i> {email}
            </li>
          )}
          {phone && (
            <li className="list-group-item">
              <i className="fas fa-envelope-open"></i> {phone}
            </li>
          )}
        </ul>
        <div className="form-group mt-2">
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
