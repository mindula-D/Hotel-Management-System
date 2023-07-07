import React from "react";
import Sidebar from "../../../components/Kitchen/siebar_kitchen/Sidebar_kitchen";
import Navbar from "../../../components/Kitchen/navbar_kitchen/Navbar_kitchen";
import Path from "../../../components/Kitchen/path_kitchen/Path_kitchen_addCount";
import Menu from "../../../components/Kitchen/menu_kitchen/Menu_kitchen";
import "./Update.scss";
import Update from "../../../components/Kitchen/update/Update";

const UpdateFood = () => {
  return (
    <div className="addFood">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <Menu />
        <Update />
      </div>
    </div>
  );
};

export default UpdateFood;
