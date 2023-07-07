import React from "react";
import { useState } from "react";
import "./refundAcc_payment.scss";

const RefundAccForm = () => {
  const [bank, setbank] = useState("");
  const [BeneficiaryName, setBeneficiaryName] = useState("");
  const [rAmount, setrAmount] = useState("");
  const [remarks, setremarks] = useState("");

  return (
    <form className="createPY">
      <h3>Customer Account Details</h3>
      <br />
      <label>Bank:</label>
      <select onChange={(e) => setbank(Number(e.target.value))} value={bank}>
        <option value="">--Please Choose an option--</option>
        <option value="Bank of Ceylon">Bank of Ceylon</option>
        <option value="Commercial Bank of Ceylon PLC">
          Commercial Bank of Ceylon PLC
        </option>
        <option value="People's Bank">People's Bank</option>
        <option value="Sampath Bank PLC">Sampath Bank PLC</option>
        <option value="	Nations Trust Bank PLC">Nations Trust Bank PLC</option>
      </select>

      <label>Beneficiary Name:</label>
      <input
        type="text"
        onChange={(e) => setBeneficiaryName(e.target.value)}
        value={BeneficiaryName}
      />

      <label>Refundable Amount (RS):</label>
      <input
        type="number"
        onChange={(e) => setrAmount(e.target.value)}
        value={rAmount}
      />

      <label>Remarks:</label>
      <input
        type="textarea"
        className="rmrk"
        onChange={(e) => setremarks(e.target.value)}
        value={remarks}
        style={{ height: "100px", width: "100%" }}
      />

      <button type="button">Pay</button>
    </form>
  );
};

export default RefundAccForm;
