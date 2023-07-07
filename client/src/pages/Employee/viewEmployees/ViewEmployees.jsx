import React from "react";
import Sidebar from "../../../components/Employee/sidebar_employees/Sidebar_employees";
import Navbar from "../../../components/Employee/navbar_employees/Navbar_employees";
import Path from "../../../components/Employee/path_employees/Path_employees_viewEmployees";
import Menu from "../../../components/Employee/menu_employees/Menu_employees";
import "./viewEmployees.scss";
import Datatable from "../../../components/Employee/datatable/Datatable";

const ViewEmployees = () => {
  return (
    <div className="viewEmployees">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />

        <Datatable />
      </div>
    </div>
  );
};

export default ViewEmployees;
