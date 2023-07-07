import React from "react";
import "./menu_event.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      
      <NavLink
        to="/event/feeBaseActivities"
        style={{ textDecoration: "none" }}
        className="feeBaseActivities"
      >
      FEEBASE ACTIVITIES
      </NavLink>
      <NavLink
        to="/event/addEvent"
        style={{ textDecoration: "none" }}
        className="addEvent"
      >
      ADD EVENT
      </NavLink>
      <NavLink
        to="/event/genarateReport"
        style={{ textDecoration: "none" }}
        className="genarateReport"
      >
        GENARATE REPORT
      </NavLink>
      <NavLink
        to="/event/recordTable"
        style={{ textDecoration: "none" }}
        className="recordTable"
      >
      RECORD TABLE
      </NavLink>

     
    </div>
  );
};

export default Menu;
