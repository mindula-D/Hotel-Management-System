import React from "react";
import Sidebar from "../../../components/Payment/sidebar_payment/Sidebar_payment";
import Navbar from "../../../components/Payment/navbar_payment/Navbar_payment";
import Path from "../../../components/Payment/path_payment/Path_payment_checkout";
import Menu from "../../../components/Payment/menu_payment/Menu_payment";
import PaymentForm from "../../../components/Payment/form_payment/Form_payment";
import CheckoutForm1 from "../../../components/Payment/card_payment/Card_payment";
import CheckoutForm2 from "../../../components/Payment/cash_payment/Cash_payment";
import "./checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">PAYMENT MANAGEMENT</h1>
        <Menu />
        <div className="form">
          <PaymentForm />
          <table>
            <td>
              <tr>
                <CheckoutForm1 />
              </tr>
              <tr>
                <CheckoutForm2 />
              </tr>
            </td>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
