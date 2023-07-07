import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_generateReport";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import Datatabletrip_transport from "../../../components/Transport/datatabletrip_transport/Datatabletrip_transport";
import "./generateReport.scss";

const GenerateReport = () => {
  return (
    <div className="generateReport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <Datatabletrip_transport />
      </div>
    </div>
  );
};

export default GenerateReport;
