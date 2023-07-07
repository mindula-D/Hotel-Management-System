import React from "react";
import "./menu_transportation.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/transportation/addDriver"
        style={{ textDecoration: "none" }}
        className="addDriver"
      >
        ADD GUEST DRIVER
      </NavLink>
      <NavLink
        to="/transportation/staffTransport"
        style={{ textDecoration: "none" }}
        className="staffTransport"
      >
        ADD STAFF DRIVER
      </NavLink>
      <NavLink
        to="/transportation/guestTransport"
        style={{ textDecoration: "none" }}
        className="guestTransport"
      >
        ASSIGN GUEST TRIP
      </NavLink>
      <NavLink
        to="/transportation/driverProfiles"
        style={{ textDecoration: "none" }}
        className="driverProfiles"
      >
        GUEST DRIVER PROFILES

        </NavLink>
      <NavLink
        to="/transportation/driverProfilesStaff"
        style={{ textDecoration: "none" }}
        className="driverProfilesStaff"
      >
        STAFF DRIVER PROFILES
      </NavLink>
      <NavLink
        to="/transportation/generateReport"
        style={{ textDecoration: "none" }}
        className="generateReport"
      >
        ASSIGNED TRIPS
      </NavLink>
    </div>
  );
};

export default Menu;
