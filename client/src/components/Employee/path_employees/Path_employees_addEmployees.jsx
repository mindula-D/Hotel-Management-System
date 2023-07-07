import React from "react";
import "./path_employees.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Employee Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Add Employees</p>
    </div>
  );
};
export default Path;