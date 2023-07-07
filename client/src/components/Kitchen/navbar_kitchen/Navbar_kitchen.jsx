import React from "react";
import "./navbar_kitchen.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Dilshika Kumarasinghe</li>
            <li className="post">Kitchen Manager</li>
          </ul>
          <img
            src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-avatar-vector-icon-white-background-png-image_5199250.jpg"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
