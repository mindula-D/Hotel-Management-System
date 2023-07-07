import React from "react";
import "./path_payment.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const Path = () => {
  return (
    <div className="path">
      <DashboardOutlinedIcon />
      <p>Dashboard</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Payment Management</p>
      <KeyboardDoubleArrowRightOutlinedIcon />
      <p>Refund</p>
    </div>
  );
};

export default Path;
