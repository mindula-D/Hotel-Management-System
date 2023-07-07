import React from "react";
import "./navbar_employees.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Sasrika Neewin</li>
            <li className="post">Employee Manager</li>
          </ul>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHxsdRuy28laQ/profile-displayphoto-shrink_400_400/0/1624547865421?e=1686787200&v=beta&t=epH6U-cZxB4ySv7TOiVOFvpVOZnsox2aF6L8XcyVWgE"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;