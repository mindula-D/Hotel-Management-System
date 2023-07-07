import React from "react";
import Sidebar from "../../../components/Kitchen/siebar_kitchen/Sidebar_kitchen";
import Navbar from "../../../components/Kitchen/navbar_kitchen/Navbar_kitchen";
import Path from "../../../components/Kitchen/path_kitchen/Path_kitchen_addFood";
import Menu from "../../../components/Kitchen/menu_kitchen/Menu_kitchen";
import "./addFood.scss";
import AddFoodForm from "../../../components/Kitchen/AddFoodForm";

const AddFood = () => {
  return (
    <div className="addFood">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <Menu />

        <AddFoodForm />
      </div>
    </div>
  );
};

export default AddFood;
