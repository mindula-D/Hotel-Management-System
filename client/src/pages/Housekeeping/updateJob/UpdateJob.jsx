import React from "react";
import Sidebar from "../../../components/Housekeeping/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../../components/Housekeeping/navbar_housekeeping/Navbar_housekeeping";
import Path from "../../../components/Housekeeping/path_housekeeping/Path_housekeeping_updateJob";
import Menu from "../../../components/Housekeeping/menu_housekeeping/Menu_housekeeping";
import UpdateJobForm from "../../../components/Housekeeping/updateJobForm/UpdateJobForm";
import "./updateJob.scss";

const UpdateJob = () => {
  return (
    <div className="assignJob">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">HOUSEKEEPING MANAGEMENT</h1>
        <Menu />
        <div className="form">
          <UpdateJobForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
