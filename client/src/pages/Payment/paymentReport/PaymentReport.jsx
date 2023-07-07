import React from "react";
import Sidebar from "../../../components/Payment/sidebar_payment/Sidebar_payment";
import Navbar from "../../../components/Payment/navbar_payment/Navbar_payment";
import Path from "../../../components/Payment/path_payment/Path_payment_paymentReport";
import Menu from "../../../components/Payment/menu_payment/Menu_payment";
import PaymentReportDatatable from "../../../components/Payment/report_payment/Report_payment";
import "./paymentReport.scss";

const PaymentReport = () => {
  return (
    <div className="paymentReport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">PAYMENT MANAGEMENT</h1>
        <Menu />

        <PaymentReportDatatable />
      </div>
    </div>
  );
};

export default PaymentReport;
