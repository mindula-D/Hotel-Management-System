import React from "react";
import "./path_housekeeping.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Housekeeping Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Assign a Job</p>
    </div>
  );
};

export default Path;
