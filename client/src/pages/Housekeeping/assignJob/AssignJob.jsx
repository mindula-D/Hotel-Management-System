import React from "react";
import Sidebar from "../../../components/Housekeeping/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../../components/Housekeeping/navbar_housekeeping/Navbar_housekeeping";
import Path from "../../../components/Housekeeping/path_housekeeping/Path_housekeeping_assignJob";
import Menu from "../../../components/Housekeeping/menu_housekeeping/Menu_housekeeping";
import AssignJobForm from "../../../components/Housekeeping/assignJobForm/AssignJobForm";
import "./assignJob.scss";

const AssignJob = () => {
  return (
    <div className="assignJob">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">HOUSEKEEPING MANAGEMENT</h1>
        <Menu />
        <div className="form">
          <AssignJobForm />
        </div>
      </div>
    </div>
  );
};

export default AssignJob;
