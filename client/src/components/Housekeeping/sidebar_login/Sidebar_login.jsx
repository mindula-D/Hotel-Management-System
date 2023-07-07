import React from "react";
import "./sidebar_login.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import DiningIcon from "@mui/icons-material/Dining";
import EventIcon from "@mui/icons-material/Event";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SILVER SANDS</span>
        </NavLink>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span className="active">Dashboard</span>
            </li>
          </NavLink>

          <p className="title">LISTS</p>

          {/* Room Boking -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <a>
                <span>Room Booking Management</span>
              </a>
            </li>
          </NavLink>

          {/* Housekeeping Management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <a>
                <span>Housekeeping Management</span>
              </a>
            </li>
          </NavLink>

          {/* Employee management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <a>
                <span>Employee Management</span>
              </a>
            </li>
          </NavLink>

          {/* Event Management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <a>
                <span>Event Management</span>
              </a>
            </li>
          </NavLink>

          {/* Kitchen Management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <DiningIcon className="icon" />
              <a>
                <span>Kitchen Management</span>
              </a>
            </li>
          </NavLink>

          {/* Transport Management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <a>
                <span>Transport Management</span>
              </a>
            </li>
          </NavLink>

          {/* Payment Management -----------------------------------------------------------------------*/}
          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <PaidIcon className="icon" />
              <a>
                <span>Payment Management</span>
              </a>
            </li>
          </NavLink>

          <NavLink to="" style={{ textDecoration: "none" }}>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </NavLink>

          <NavLink to="" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
