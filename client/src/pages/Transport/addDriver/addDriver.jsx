import React from "react";
import Sidebar from "../../../components/Transport/siebar_transportation/Sidebar_transportation";
import Navbar from "../../../components/Transport/navbar_transportation/Navbar_transportation";
import Path from "../../../components/Transport/path_transportation/Path_transportation_addDriver";
import Menu from "../../../components/Transport/menu_transportation/Menu_transportation";
import AddNewDriver from "../../../components/Transport/AddDriverForm/AddDriverForm";
import "./addDriver.scss";

const AddDriver = () => {
  return (
    <div className="addDriver">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">TRANSPORTATION MANAGEMENT</h1>
        <Menu />
        <AddNewDriver />
      </div>
    </div>
  );
};

export default AddDriver;
