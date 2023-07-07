import React, { useState } from "react";
import "./refundGen_payment.scss";

const RefundForm = () => {
  const [paymentID, setpaymentID] = useState("");
  const [cusName, setcusName] = useState("");
  const [cusEmail, setcusEmail] = useState("");
  const [paidAmount, setpaidAmount] = useState("");
  const [rAmount, setrAmount] = useState("");
  const [percentage, setPercentage] = useState("");

  const calculateRefundableAmount = () => {
    const refundAmount = paidAmount * (percentage / 100);
    setrAmount(refundAmount.toFixed(2));
  };

  return (
    <form className="createPY">
      <h3>Refund Generator</h3>
      <br />
      <label>Payment ID:</label>
      <input
        type="text"
        id={paymentID}
        onChange={(e) => setpaymentID(e.target.value)}
        value={paymentID}
        required
      />

      <label>Customer Name:</label>
      <input
        type="text"
        onChange={(e) => setcusName(e.target.value)}
        value={cusName}
      />

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setcusEmail(e.target.value)}
        value={cusEmail}
      />

      <label>Paid Amount (RS):</label>
      <input
        type="number"
        onChange={(e) => setpaidAmount(e.target.value)}
        value={paidAmount}
      />

      <label>Refund Rate:</label>
      <select
        onChange={(e) => setPercentage(Number(e.target.value))}
        value={percentage}
      >
        <option value="">--Please Choose an option--</option>
        <option value={25}>25%</option>
        <option value={50}>50%</option>
        <option value={75}>75%</option>
      </select>

      <label>Refundable Amount (RS):</label>
      <input
        type="number"
        onChange={(e) => setrAmount(e.target.value)}
        value={rAmount}
      />

      <button type="button" onClick={calculateRefundableAmount}>
        Generate
      </button>
    </form>
  );
};

export default RefundForm;
