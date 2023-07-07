import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_guestTransportation";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import AddNewTrip from "../../../components/Transport/AssignTripForm/AssignTripForm";
import "./guestTransport.scss";

const GuestTransport = () => {
  return (
    <div className="guestTransport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <AddNewTrip />
      </div>
    </div>
  );
};

export default GuestTransport;
