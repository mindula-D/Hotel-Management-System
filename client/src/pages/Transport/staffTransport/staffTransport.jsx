import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_staffTransportation";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import AddNewStaffDriver from "../../../components/Transport/AddStaffDriverForm/AddStaffDriverForm";
import "./staffTransport.scss";

const StaffTransport = () => {
  return (
    <div className="staffTransport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <AddNewStaffDriver />
      </div>
    </div>
  );
};

export default StaffTransport;
