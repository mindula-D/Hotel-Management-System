import React from "react";
import Sidebar from "../../components/Housekeeping/sidebar_login/Sidebar_login";
import Navbar from "../../components/Housekeeping/navbar_login/Navbar_login";
import Login from "../../components/login/Login";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Login />
      </div>
    </div>
  );
};

export default Home;
