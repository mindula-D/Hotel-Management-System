import React, { useState } from "react";
import "./cash_payment.scss";
import Swal from "sweetalert2";
import { useEffect } from "react";

const CheckoutForm2 = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [receivedAmount, setReceivedAmount] = useState("");
  const [change, setChange] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state variable based on the input field name
    switch (name) {
      case "totalAmount":
        setTotalAmount(parseFloat(value));
        break;
      case "receivedAmount":
        setReceivedAmount(parseFloat(value));
        break;
      case "change":
        setChange(parseFloat(value));
        break;
      default:
        break;
    }
  };

  // Calculate the total amount whenever any input value changes
  useEffect(() => {
    const chg = receivedAmount - totalAmount; // Use unary plus operator to convert values to numbers
    setChange(chg);
  }, [totalAmount, receivedAmount, change]);

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire("Done!", "Payment Successful!", "success");
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <h3>Cash Payment</h3>
        <br />
        <label htmlFor="totalAmount">Total Amount (RS)</label>
        <input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={totalAmount}
          onChange2={handleInputChange}
          onChange={(e) => setTotalAmount(e.target.value)}
          required
        />

        <label htmlFor="receivedAmount">Recieved Amount (RS)</label>
        <input
          type="number"
          id="receivedAmount"
          name="receivedAmount"
          value={receivedAmount}
          onChange2={handleInputChange}
          onChange={(e) => setReceivedAmount(e.target.value)}
          required
        />

        <label htmlFor="change">Change (RS)</label>
        <input
          type="number"
          id="change"
          name="change"
          value={change}
          onChange2={handleInputChange}
          onChange={(e) => setChange(e.target.value)}
          required
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm2;
