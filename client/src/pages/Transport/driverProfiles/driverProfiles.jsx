import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_driverProfiles";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import Datatable_transport from "../../../components/Transport/datatable_transport/Datatable_transport";
import "./driverProfiles.scss";

const DriverProfiles = () => {
  return (
    <div className="driverProfiles">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <Datatable_transport />
      </div>
    </div>
  );
};

export default DriverProfiles;
