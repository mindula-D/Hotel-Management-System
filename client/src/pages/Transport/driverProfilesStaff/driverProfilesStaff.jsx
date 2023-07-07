import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_driverProfilesStaff";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import Datatablestaff_transport from "../../../components/Transport/datatablestaff_transport/Datatablestaff_transport";
import "./driverProfilesStaff.scss";

const DriverProfilesStaff = () => {
  return (
    <div className="driverProfilesStaff">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <Datatablestaff_transport />
      </div>
    </div>
  );
};

export default DriverProfilesStaff;
