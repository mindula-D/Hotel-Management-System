import React, { useState } from "react";
import "./card_payment.scss";
import Swal from "sweetalert2";

const CheckoutForm1 = () => {
  const [totalAmount, settotalAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire("Done!", "Payment Successful!", "success");
  };

  const handleCardNumberChange = (event) => {
    const regex = /^[0-9]{0,16}$/;
    if (regex.test(event.target.value)) {
      setCardNumber(event.target.value);
    }
  };

  const handleExpiryDateChange = (event) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (regex.test(event.target.value)) {
      setExpiryDate(event.target.value);
    }
  };

  const handleCvvChange = (event) => {
    const regex = /^[0-9]{0,3}$/;
    if (regex.test(event.target.value)) {
      setCvv(event.target.value);
    }
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <h3>Card Payment</h3>
        <br />
        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount (RS)</label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={totalAmount}
            onChange={(e) => settotalAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            required
          />
        </div>
        <div>
          <label htmlFor="cardHolder">Card Holder Name</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>
        <div className=".form-group">
          <label htmlFor="expiryDate" className=".form-group">
            Expiry Date
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            onChange={handleExpiryDateChange}
            required
          />
        </div>
        <div className=".form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            className=".form-group"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleCvvChange}
            required
          />
        </div>
        <button type="submit">Pay</button>
        <br></br>
        <hr></hr>
        <br></br>
      </form>
    </div>
  );
};

export default CheckoutForm1;
