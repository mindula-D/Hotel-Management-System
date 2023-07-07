import React from "react";
import "./menu_payment.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/payment/checkout"
        style={{ textDecoration: "none" }}
        className="checkout"
      >
        CHECKOUT
      </NavLink>
      <NavLink
        to="/payment/paymentRecords"
        style={{ textDecoration: "none" }}
        className="paymentRecords"
      >
        PAYMENT RECORDS
      </NavLink>
      <NavLink
        to="/payment/refund"
        style={{ textDecoration: "none" }}
        className="refund"
      >
        REFUND 
      </NavLink>
      <NavLink
        to="/payment/paymentReport"
        style={{ textDecoration: "none" }}
        className="paymentReport"
      >
        PAYMENT REPORT      
      </NavLink>
    </div>
  );
};

export default Menu;
