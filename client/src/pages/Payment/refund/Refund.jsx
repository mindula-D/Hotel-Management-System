import React from "react";
import Sidebar from "../../../components/Payment/sidebar_payment/Sidebar_payment";
import Navbar from "../../../components/Payment/navbar_payment/Navbar_payment";
import Path from "../../../components/Payment/path_payment/Path_payment_refund";
import Menu from "../../../components/Payment/menu_payment/Menu_payment";
import RefundForm from "../../../components/Payment/refundGen_payment/RefundGen_payment";
import RefundAccForm from "../../../components/Payment/refundAcc_payment/RefundAcc_payment";
import "./refund.scss";

const Refund = () => {
  return (
    <div className="refund">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">PAYMENT MANAGEMENT</h1>
        <Menu />
        <table>
          <td>
            <RefundForm />
          </td>
          <td>
            <RefundAccForm />
          </td>
        </table>
      </div>
    </div>
  );
};

export default Refund;
