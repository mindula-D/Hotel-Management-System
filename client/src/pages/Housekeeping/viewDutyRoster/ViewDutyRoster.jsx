import React from "react";
import Sidebar from "../../../components/Housekeeping/siebar_housekeeping/Sidebar_housekeeping";
import Navbar from "../../../components/Housekeeping/navbar_housekeeping/Navbar_housekeeping";
import Path from "../../../components/Housekeeping/path_housekeeping/Path_housekeeping_viewDutyRoster";
import Menu from "../../../components/Housekeeping/menu_housekeeping/Menu_housekeeping";
import "./viewDutyRoster.scss";
import Datatable from "../../../components/Housekeeping/dutyRoster/Datatable";

const ViewDutyRoster = () => {
  return (
    <div className="viewDutyRoster">
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

export default ViewDutyRoster;
