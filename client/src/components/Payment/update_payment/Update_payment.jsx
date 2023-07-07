import React from "react";
import { useState } from "react";
import "./update_payment.scss";
import Swal from "sweetalert2";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatepaymentForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    // paymentID: "",
    customerName: "",
    email: "",
    contactNumber: "",
    paymentDate: "",
    transactionType1: "",
    amount1: "",
    transactionType2: "",
    amount2: "",
    transactionType3: "",
    amount3: "",
    totalAmount: "",
    paymentMethod: "",
  });

  useEffect(() => {
    axios
      .get(`/payment/get/${id}`)
      .then((res) => {
        setValues({
          ...values,
          //paymentID: res.data.paymentID,
          customerName: res.data.customerName,
          email: res.data.email,
          contactNumber: res.data.contactNumber,
          paymentDate: res.data.paymentDate,
          transactionType1: res.data.transactionType1,
          amount1: res.data.amount1,
          transactionType2: res.data.transactionType2,
          amount2: res.data.amount2,
          transactionType3: res.data.transactionType3,
          amount3: res.data.amount3,
          totalAmount: res.data.totalAmount,
          paymentMethod: res.data.paymentMethod,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/payment/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Payment Updated Successfully!", "success");
        navigate("/payment/paymentRecords");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="updatePY" onSubmit={handleUpdate}>
      <h3>Customer Details</h3>
      {/* 
            <label>Payment ID:</label>
            <input
              type="text"
              id={paymentID}
              value={values.paymentID} 
              onChange={(e) => setValues({ ...values, paymentID: e.target.value })} 
              required
            /> */}

      <label>Customer Name:</label>
      <input
        type="text"
        value={values.customerName}
        onChange={(e) => setValues({ ...values, customerName: e.target.value })}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        required
      />

      <label>Contact No:</label>
      <input
        type="text"
        pattern="^[0-9]{10}$"
        value={values.contactNumber}
        onChange={(e) =>
          setValues({ ...values, contactNumber: e.target.value })
        }
        required
      />

      <label>Date:</label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        value={values.paymentDate}
        onChange={(e) => setValues({ ...values, paymentDate: e.target.value })}
        required
      />

      <label>Transaction Type 01:</label>
      <select
        value={values.transactionType1}
        onChange={(e) =>
          setValues({ ...values, transactionType1: e.target.value })
        }
        required
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount:</label>
      <input
        type="number"
        name="amount1"
        value={values.amount1}
        onChange={(e) => setValues({ ...values, amount1: e.target.value })}
        required
      />

      <label>Transaction Type 02:</label>
      <select
        value={values.transactionType2}
        onChange={(e) =>
          setValues({ ...values, transactionType2: e.target.value })
        }
        required
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount:</label>
      <input
        type="number"
        name="amount2"
        value={values.amount2}
        onChange={(e) => setValues({ ...values, amount2: e.target.value })}
        required
      />

      <label>Transaction Type 03:</label>
      <select
        value={values.transactionType3}
        onChange={(e) =>
          setValues({ ...values, transactionType3: e.target.value })
        }
        required
      >
        <option value="">--Please Choose an option--</option>
        <option value="roomReservation">Room Reservation</option>
        <option value="trasportationServises">Transportation Services</option>
        <option value="eventBooking&paidSevices">
          Event Booking & Paid Sevices
        </option>
      </select>

      <label>Amount:</label>
      <input
        type="number"
        name="amount3"
        value={values.amount3}
        onChange={(e) => setValues({ ...values, amount3: e.target.value })}
        required
      />

      <label>Total Amount:</label>
      <input
        type="number"
        value={values.totalAmount}
        onChange={(e) => setValues({ ...values, totalAmount: e.target.value })}
        required
      />

      <label>Payment Method:</label>
      <select
        value={values.paymentMethod}
        onChange={(e) =>
          setValues({ ...values, paymentMethod: e.target.value })
        }
        required
      >
        <option value="">--Please Choose an option--</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
      </select>

      <button>Save</button>
    </form>
  );
};

export default UpdatepaymentForm;
