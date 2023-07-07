import React from "react";
import Sidebar from "../../../components/Kitchen/siebar_kitchen/Sidebar_kitchen";
import Navbar from "../../../components/Kitchen/navbar_kitchen/Navbar_kitchen";
import Path from "../../../components/Kitchen/path_kitchen/Path_kitchen_addCount";
import Menu from "../../../components/Kitchen/menu_kitchen/Menu_kitchen";
import AddFoodCountForm from "../../../components/Kitchen/AddFoodCountForm";
import "./addCount.scss";

const AddCount = () => {
  return (
    <div className="addCount">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <Menu />
        <AddFoodCountForm />
      </div>
    </div>
  );
};

export default AddCount;
