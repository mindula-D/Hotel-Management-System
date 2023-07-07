import React from "react";
import Sidebar from "../../../components/Housekeeping/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../../components/Housekeeping/navbar_housekeeping/Navbar_housekeeping";
import Path from "../../../components/Housekeeping/path_housekeeping/Path_housekeeping_viewFeedback";
import Menu from "../../../components/Housekeeping/menu_housekeeping/Menu_housekeeping";
import Datatable from "../../../components/Housekeeping/feedbackList/Datatable";
import "./viewFeedback.scss";

const ViewFeedback = () => {
  return (
    <div className="viewFeedback">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">HOUSEKEEPING MANAGEMENT</h1>
        <Menu />
        <Datatable />
      </div>
    </div>
  );
};

export default ViewFeedback;
