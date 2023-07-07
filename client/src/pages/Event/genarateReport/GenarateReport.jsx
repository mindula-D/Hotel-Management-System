import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_genarateReport";
import Menu from "../../../components/Event/menu_event/Menu_event";
//import Datatable from "../../components/datatable/DataTable";
import ReportTable from "../../../components/Event/reportTable/ReportTable";
import "./genarateReport.scss";

const GenarateReport = () => {
  return (
    <div className="genarateReport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EVENT MANAGEMENT</h1>
        <Menu />

        <ReportTable />
      </div>
    </div>
  );
};

export default GenarateReport;
