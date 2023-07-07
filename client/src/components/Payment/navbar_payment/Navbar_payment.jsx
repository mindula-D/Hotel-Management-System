import React from "react";
import "./navbar_payment.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Heshan Jayasundara</li>
            <li className="post">Payment Manager</li>
          </ul>
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxb5NboefLNR_nd9iNSY6rW43bgPbHCmr9kUz7xvwA=s96-c-rg-br100"
            alt="profile_img"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
