import React from "react";
import "./path_transportation.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Transportation Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Assign Guest Trip</p>
    </div>
  );
};

export default Path;
