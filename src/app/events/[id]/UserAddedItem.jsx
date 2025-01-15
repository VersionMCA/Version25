import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

function UserAddedItem({ email, handleDeleteUser }) {
  return (
    <li className="flex flex-row p-2 border rounded-md items-center">
      <span>{email.split("@")[0]}</span>
      <span
        className="ml-2 cursor-pointer"
        onClick={() => handleDeleteUser(email)}
        role="button"
      >
        <X />
      </span>
    </li>
  );
}

UserAddedItem.propTypes = {
  email: PropTypes.string.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserAddedItem;
