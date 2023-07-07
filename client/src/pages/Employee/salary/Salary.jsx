import React from "react";
import Sidebar from "../../../components/Employee/sidebar_employees/Sidebar_employees";
import Navbar from "../../../components/Employee/navbar_employees/Navbar_employees";
import Path from "../../../components/Employee/path_employees/Path_employees_salary";
import Menu from "../../../components/Employee/menu_employees/Menu_employees";
import "./salary.scss";
import SalaryForm from "../../../components/Employee/SalaryForm";

const Salary = () => {
  return (
    <div className="salary">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        <SalaryForm />
      </div>
    </div>
  );
};

export default Salary;
