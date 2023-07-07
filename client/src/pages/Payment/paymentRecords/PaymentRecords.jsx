import React from "react";
import Sidebar from "../../../components/Payment/sidebar_payment/Sidebar_payment";
import Navbar from "../../../components/Payment/navbar_payment/Navbar_payment";
import Path from "../../../components/Payment/path_payment/Path_payment_paymentRecords";
import Menu from "../../../components/Payment/menu_payment/Menu_payment";
import PaymentDatatable from "../../../components/Payment/paymentDatatable/PaymentDatatable";
import "./paymentRecords.scss";

const PaymentRecords = () => {
  return (
    <div className="paymentRecords">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">PAYMENT MANAGEMENT</h1>
        <Menu />
        <PaymentDatatable />
      </div>
    </div>
  );
};

export default PaymentRecords;
