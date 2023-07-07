import React from "react";
import Sidebar from "../../../components/Housekeeping/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../../components/Housekeeping/navbar_housekeeping/Navbar_housekeeping";
import Path from "../../../components/Housekeeping/path_housekeeping/Path_housekeeping_getFeedback";
import Menu from "../../../components/Housekeeping/menu_housekeeping/Menu_housekeeping";
import GetFeedbackForm from "../../../components/Housekeeping/getFeedbackForm/GetFeedbackForm";
import "./getFeedback.scss";

const GetFeedback = () => {
  return (
    <div className="getFeedback">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">HOUSEKEEPING MANAGEMENT</h1>
        <Menu />
        <div className="form">
          <GetFeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default GetFeedback;
