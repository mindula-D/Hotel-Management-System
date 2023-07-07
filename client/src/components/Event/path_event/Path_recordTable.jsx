import React from "react";
import "./path_event.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p> Event Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Record Table</p>
    </div>
  );
};

export default Path;
