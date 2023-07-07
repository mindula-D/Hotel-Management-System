import React from "react";
import "./path_kitchen.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Kitchen Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Add a food</p>
    </div>
  );
};

export default Path;
