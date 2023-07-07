import React from "react";
import Sidebar from "../../../components/Employee/sidebar_employees/Sidebar_employees";
import Navbar from "../../../components/Employee/navbar_employees/Navbar_employees";
import Path from "../../../components/Employee/path_employees/Path_employees_addEmployees";
import Menu from "../../../components/Employee/menu_employees/Menu_employees";
import "./addEmployees.scss";
import AddEmployeesForm from "../../../components/Employee/AddEmployeesFrom";

const AddEmployees = () => {
  return (
    <div className="addEmployees">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        <AddEmployeesForm />
      </div>
    </div>
  );
};

export default AddEmployees;
