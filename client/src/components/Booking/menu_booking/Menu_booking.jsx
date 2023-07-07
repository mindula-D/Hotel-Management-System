import React from "react";
import "./menu_booking.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/booking/AddBooking"
        style={{ textDecoration: "none" }}
        className="AddBooking"
        
      >
        ADD A BOOKING

      </NavLink>

      <NavLink
        to="/booking/BookingRecord"
        style={{ textDecoration: "none" }}
        className="BookingRecord"
      >
        BOOKING RECORDS
      </NavLink>


      <NavLink
        to="/booking/GenReport"
        style={{ textDecoration: "none" }}
        className="GenReport"
      >
        GENERATE REPORTS
      </NavLink>
      
      <NavLink
        to="/booking/BookingSearch"
        style={{ textDecoration: "none" }}
        className="BookingSearch"
      >
        BOOKING INFO
      </NavLink>
      
    </div>
  );
};

export default Menu;
