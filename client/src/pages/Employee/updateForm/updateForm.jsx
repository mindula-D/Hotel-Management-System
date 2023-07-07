import React from "react";
import Sidebar from "../../../components/Employee/sidebar_employees/Sidebar_employees";
import Navbar from "../../../components/Employee/navbar_employees/Navbar_employees";
import Path from "../../../components/Employee/path_employees/Path_employees_salary";
import Menu from "../../../components/Employee/menu_employees/Menu_employees";
import UpdateEmployees from "../../../components/Employee/updateEmployees/updateEmployees";
import "./updateForm.scss";
const UpdateForm = () => {
  return (
    <div className="updateForm">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        <UpdateEmployees />
      </div>
    </div>
  );
};

export default UpdateForm;
