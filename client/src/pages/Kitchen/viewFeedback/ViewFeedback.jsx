import React from "react";
import Sidebar from "../../components/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../components/navbar_kitchen/Navbar_kitchen";
import Path from "../../components/path_kitchen/Path_housekeeping_viewFeedback";
import Menu from "../../components/menu_kitchen/Menu_kitchen";
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
        VIEW FEEDBACK
      </div>
    </div>
  );
};

export default ViewFeedback;
