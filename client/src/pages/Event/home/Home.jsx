import React from "react";
import Sidebar from "../../../components/Event/siebar_event/Sidebar_event";
import Navbar from "../../../components/Event/navbar_event/Navbar_event";
import Path from "../../../components/Event/path_event/Path_addEvent";
import Menu from "../../../components/Event/menu_event/Menu_event";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Path />
        <h1 className="title">EVENT MANAGEMENT</h1>
        <Menu />
        home container
      </div>
    </div>
  );
};

export default Home;
