import React from "react";
import "./navbar_event.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Senuri Jayasuriya</li>
            <li className="post">Event  Manager</li>
          </ul>
          <img
            src="https://media.licdn.com/dms/image/C4E03AQFhPnoDvI5dZg/profile-displayphoto-shrink_400_400/0/1624541947414?e=1687392000&v=beta&t=Z7O17nwI4zQXLfgaqGALjNp5cID6LdPnz_-LcqeAkrE"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
