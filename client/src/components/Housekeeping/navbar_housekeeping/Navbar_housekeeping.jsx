import React from "react";
import "./navbar_housekeeping.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Mindula Deshapriya</li>
            <li className="post">Housekeeping Manager</li>
          </ul>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
