import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_addEvent";
import Menu from "../../../components/Event/menu_event/Menu_event";
import AddEventForm from "../../../components/Event/addEventForm/AddEventForm";

import "./addEvent.scss";
const AddEvent = () => {
  return (
    <div className="addEvent">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EVENT MANAGEMENT</h1>
        <Menu />
        <div className="form">
          <AddEventForm />{" "}
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
