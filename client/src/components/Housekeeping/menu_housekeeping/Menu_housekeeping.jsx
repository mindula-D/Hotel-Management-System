import React from "react";
import "./menu_housekeeping.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/housekeeping/assignJob"
        style={{ textDecoration: "none" }}
        className="assignJob"
      >
        ASSIGN A JOB
      </NavLink>
      <NavLink
        to="/housekeeping/viewDutyRoster"
        style={{ textDecoration: "none" }}
        className="viewDutyRoster"
      >
        VIEW DUTY ROSTER
      </NavLink>
      <NavLink
        to="/housekeeping/getFeedback"
        style={{ textDecoration: "none" }}
        className="getFeedback"
      >
        GET A FEEDBACK
      </NavLink>
      <NavLink
        to="/housekeeping/viewFeedback"
        style={{ textDecoration: "none" }}
        className="viewFeedback"
      >
        VIEW FEEDBACK
      </NavLink>
    </div>
  );
};

export default Menu;
