import React from "react";
import "./navbar_booking.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Praneeth Dilshan</li>
            <li className="post">Booking Manager</li>
          </ul>
          <img
            src="https://media.licdn.com/dms/image/D5603AQHxxRppsbvqpg/profile-displayphoto-shrink_800_800/0/1672749060783?e=1686787200&v=beta&t=iVMKo02sbeipj6JAJd9roZ2oKHkWvg65YOsOopOmrRs"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
