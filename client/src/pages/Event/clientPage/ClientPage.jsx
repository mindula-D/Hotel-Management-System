import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_clientPage";
import Menu from "../../../components/Event/menu_event/Menu_event";
//import ReportTable from "../../components/reportTable/ReportTable";
//import Path from "../../components/path_event/Path_clientPage";

import "./clientPage.scss";
import ActivityTable from "../../../components/Event/activityTable/ActivityTable";

const ClientPage = () => {
  return (
    <div className="displayHome">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EVENT MANAGEMENT</h1>
        <Menu />
        <ActivityTable />
      </div>
    </div>
  );
};

export default ClientPage;
