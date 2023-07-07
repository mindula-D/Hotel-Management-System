import React from "react";
import "./navbar_transportation.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Jayadinu Dias</li>
            <li className="post">Transportation Manager</li>
          </ul>
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxZQZCd01ATWHWCxzCd5y3jZikJlMTriTKczlkMhCA=s360"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
