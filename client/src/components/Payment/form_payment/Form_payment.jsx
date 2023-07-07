import React from "react";
import { useState } from "react";
import "./form_payment.scss";
import Swal from "sweetalert2";
import { useEffect } from "react";

const PaymentForm = () => {
  const [paymentID, setpaymentID] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [paymentDate, setpaymentDate] = useState("");
  const [transactionType1, settransactionType1] = useState("");
  const [amount1, setamount1] = useState("");
  const [transactionType2, settransactionType2] = useState("");
  const [amount2, setamount2] = useState("");
  const [transactionType3, settransactionType3] = useState("");
  const [amount3, setamount3] = useState("");
  const [totalAmount, settotalAmount] = useState("");
  const [paymentMethod, setpaymentMethod] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state variable based on the input field name
    switch (name) {
      case "amount1":
        setamount1(parseFloat(value));
        break;
      case "amount2":
        setamount2(parseFloat(value));
        break;
      case "amount3":
        setamount3(parseFloat(value));
        break;
      default:
        break;
    }
  };

  // Calculate the total amount whenever any input value changes
  useEffect(() => {
    const total = +amount1 + +amount2 + +amount3; // Use unary plus operator to convert values to numbers
    settotalAmount(total);
  }, [amount1, amount2, amount3]);

  //Generate PID
  useEffect(() => {
    const prefix = "PID";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 1;
    if (lastID) {
      nextCount = parseInt(lastID.substring(3), 10) + 1;
    }
    const nextID = `${prefix}${nextCount.toString().padStart(4, "0")}`;
    localStorage.setItem("lastID", nextID);
    setpaymentID(nextID);
  }, [setpaymentID]);

  //localStorage.clear();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    const emptyFields = []; //array to store the empty fields
    if (!paymentID) {
      emptyFields.push("paymentID"); //it pushes the relevant field to the array
    }
    if (!customerName) {
      emptyFields.push("customerName");
    }
    if (!email) {
      emptyFields.push("email");
    }
    if (!contactNumber) {
      emptyFields.push("contactNumber");
    }
    if (!paymentDate) {
      emptyFields.push("paymentDate");
    }
    if (!transactionType1) {
      emptyFields.push("transactionType1");
    }
    if (!amount1) {
      emptyFields.push("amount1");
    }
    if (!transactionType2) {
      emptyFields.push("transactionType2");
    }
    if (!amount2) {
      emptyFields.push("amount2");
    }
    if (!transactionType3) {
      emptyFields.push("transactionType3");
    }
    if (!amount3) {
      emptyFields.push("amount3");
    }
    if (!totalAmount) {
      emptyFields.push("totalAmount");
    }
    if (!paymentMethod) {
      emptyFields.push("paymentMethod");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    const payment = {
      paymentID,
      customerName,
      email,
      contactNumber,
      paymentDate,
      transactionType1,
      amount1,
      transactionType2,
      amount2,
      transactionType3,
      amount3,
      totalAmount,
      paymentMethod,
    };

    const response = await fetch("/payment", {
      method: "POST",
      body: JSON.stringify(payment),
      headers: {
        "content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setpaymentID("");
      setcustomerName("");
      setemail("");
      setcontactNumber("");
      setpaymentDate("");
      settransactionType1("");
      setamount1("");
      settransactionType2("");
      setamount1("");
      settransactionType3("");
      setamount1("");
      settotalAmount("");
      setpaymentMethod("");
      setError(null);
      console.log("new payment added", json);
    }
    Swal.fire("Done!", "Saved!", "success");
  };

  return (
    <form className="createPY" onSubmit={handleSubmit}>
      <h3>Customer Details</h3>
      <br />
      <label>Payment ID:</label>
      <input
        type="text"
        id={paymentID}
        onChange={(e) => setpaymentID(e.target.value)}
        value={paymentID}
        required
      />
      {emptyFields.includes("paymentID") && (
        <div className="error">*Please enter Payment ID*</div>
      )}

      <label>Customer Name:</label>
      <input
        type="text"
        onChange={(e) => setcustomerName(e.target.value)}
        value={customerName}
        placeholder="Enter Name"
      />
      {emptyFields.includes("customerName") && (
        <div className="error">*Please enter customer name*</div>
      )}

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      {emptyFields.includes("email") && (
        <div className="error">*Please enter email*</div>
      )}

      <label>Contact No:</label>
      <input
        type="text"
        maxLength={10}
        pattern="^[0-9]{10}$"
        onChange={(e) => setcontactNumber(e.target.value)}
        value={contactNumber}
        placeholder="Enter Contact Number"
      />
      {emptyFields.includes("contactNumber") && (
        <div className="error">*Please enter contact number</div>
      )}

      <label>Date:</label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setpaymentDate(e.target.value)}
        value={paymentDate}
      />
      {emptyFields.includes("paymentDate") && (
        <div className="error">*Please enter payment date</div>
      )}

      <label>Transaction Type 01:</label>
      <select
        onChange={(e) => settransactionType1(e.target.value)}
        value={transactionType1}
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount (Rs):</label>
      <input
        type="number"
        name="amount2"
        onChange={(e) => setamount1(e.target.value)}
        value={amount1}
        onChange2={handleInputChange}
        placeholder="Enter Amount"
      />

      <label>Transaction Type 02:</label>
      <select
        onChange={(e) => settransactionType2(e.target.value)}
        value={transactionType2}
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount (Rs):</label>
      <input
        type="number"
        name="amount2"
        onChange={(e) => setamount2(e.target.value)}
        value={amount2}
        onChange2={handleInputChange}
        placeholder="Enter Amount"
      />

      <label>Transaction Type 03:</label>
      <select
        onChange={(e) => settransactionType3(e.target.value)}
        value={transactionType3}
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount (Rs):</label>
      <input
        type="number"
        name="amount3"
        onChange={(e) => setamount3(e.target.value)}
        value={amount3}
        onChange2={handleInputChange}
        placeholder="Enter Amount"
      />

      <label>Total Amount (Rs):</label>
      <input
        type="number"
        onChange={(e) => settotalAmount(e.target.value)}
        value={totalAmount}
      />
      {emptyFields.includes("totalAmount") && (
        <div className="error">*Please enter total amount*</div>
      )}

      <label>Payment Method:</label>
      <select
        onChange={(e) => setpaymentMethod(e.target.value)}
        value={paymentMethod}
      >
        <option value="">--Please Choose an option--</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
      </select>
      {emptyFields.includes("paymentMethod") && (
        <div className="error">*Please enter payment method*</div>
      )}

      <button>Save</button>
    </form>
  );
};

export default PaymentForm;
