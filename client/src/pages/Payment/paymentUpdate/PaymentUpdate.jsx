import React from "react";
import Sidebar from "../../../components/Payment/sidebar_payment/Sidebar_payment";
import Navbar from "../../../components/Payment/navbar_payment/Navbar_payment";
import Path from "../../../components/Payment/path_payment/Path_payment_checkout";
import Menu from "../../../components/Payment/menu_payment/Menu_payment";
import UpdatepaymentForm from "../../../components/Payment/update_payment/Update_payment";
import "./paymentUpdate.scss";

const PaymentUpdate = () => {
  return (
    <div className="paymentRecords">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">PAYMENT MANAGEMENT</h1>
        <Menu />

        <UpdatepaymentForm />
      </div>
    </div>
  );
};

export default PaymentUpdate;
