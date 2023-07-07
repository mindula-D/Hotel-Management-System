import React from "react";
import "./menu_employees.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/employees/addEmployees"
        style={{ textDecoration: "none" }}
        className="addEmployees"
      >
        ADD EMPLOYEES
      </NavLink>
      <NavLink
        to="/employees/viewEmployees"
        style={{ textDecoration: "none" }}
        className="viewEmployees"
      >
        VIEW EMPLOYEES
      </NavLink>
      <NavLink
        to="/employees/salary"
        style={{ textDecoration: "none" }}
        className="salary"
      >
        SALARY
      </NavLink>
      <NavLink
        to="/employees/salaryReport"
        style={{ textDecoration: "none" }}
        className="salaryReport"
      >
        SALARY REPORT
      </NavLink>
    </div>
  );
};

export default Menu;
