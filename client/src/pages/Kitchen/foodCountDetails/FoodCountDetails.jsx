import React from "react";
import Sidebar from "../../../components/Kitchen/siebar_kitchen/Sidebar_kitchen";
import Navbar from "../../../components/Kitchen/navbar_kitchen/Navbar_kitchen";
import Path from "../../../components/Kitchen/path_kitchen/Path_kitchen_foodCountDetails";
import Menu from "../../../components/Kitchen/menu_kitchen/Menu_kitchen";
import Datatablee from "../../../components/Kitchen/datatablee/Datatablee";
import "./foodCountDetails.scss";

const FoodCountDetails = () => {
  return (
    <div className="foodCountDetails">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <Menu />
        <Datatablee />
      </div>
    </div>
  );
};

export default FoodCountDetails;
