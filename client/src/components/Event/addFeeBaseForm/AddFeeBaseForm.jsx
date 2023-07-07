import React, { useState } from "react";
import "./AddFeeBaseForm.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
//import FeeBase from '../../../../BACKEND/models/FeeBaseModel';

const AddFeeBaseForm = () => {
  const [customer_name, setCustomer_name] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [total_count, setTotal_count] = useState("0");
  const [email, setEmail] = useState("");

  const [phone_number, setPhone_number] = useState("");
  const [pool, setPool] = useState("0");
  const [boatRide, setBoatRide] = useState("0");
  const [photoShoot, setPhotoShoot] = useState("0");
  const [totalAmount, setTotalAmount] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  //const[emptyField, setEmptyField] = useState([]);

  const calculateTotal = () => {
    const totalCountValue = parseInt(total_count);
    const poolValue = parseFloat(pool);
    const boatRideValue = parseFloat(boatRide);
    const photoShootValue = parseFloat(photoShoot);

    const totalAmount =
      totalCountValue * poolValue + boatRideValue + photoShootValue;
    setTotalAmount(totalAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feeBase = {
      customer_name,
      date,
      timeSlot,
      total_count,
      email,
      phone_number,
      pool,
      boatRide,
      photoShoot,
      totalAmount,
    };

    const response = await fetch("/feeBase", {
      method: "POST",
      body: JSON.stringify(feeBase),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setCustomer_name("");
      setDate("");
      setTimeSlot("");
      setTotal_count("");
      setEmail("");
      setPhone_number("");
      setPool("");
      setBoatRide("");
      setPhotoShoot("");
      setTotalAmount("");

      setError(null);
      console.log("New Activity Added", json);
      Swal.fire("Done!", "Add Activity Successfully!", "success");
      navigate("/event/feeBaseActivities/clientPage");
    }
  };
  return (
    <form className="feebase" onSubmit={handleSubmit}>
      <Link
        to="/event/feeBaseActivities/clientPage"
        style={{ textDecoration: "none" }}
      >
        <div className="viewButton"> Activitiy Table</div>
      </Link>

      <h3> ADD NEW ACTIVITY </h3>

      <label> Customer Name </label>

      <input
        type="text"
        placeholder="Enter Name"
        required
        onChange={(e) => {
          const enteredValue = e.target.value;
          const nameRegex = /^[A-Za-z\s]+$/; // Regular expression to match only letters (A-Z, a-z) and spaces
          if (nameRegex.test(enteredValue) || enteredValue === "") {
            setCustomer_name(enteredValue);
          }
        }}
        value={customer_name}
      />
      <label> Date: </label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <label> Time Slot </label>
      <select onChange={(e) => setTimeSlot(e.target.value)} value={timeSlot}>
        <option value="" disabled>
          Select Time
        </option>
        <option value="Morning">Morning</option>
        <option value="Evening">Evening</option>
      </select>

      <label> Total Count </label>
      <input
        type="number"
        min={0}
        placeholder="Enter Count"
        required
        onChange={(e) => {
          const count = parseInt(e.target.value);
          if (count >= 0) {
            setTotal_count(count);
          }
        }}
        value={total_count}
      />

      <label> Email </label>

      <input
        type="email"
        // unique = "true"
        placeholder="Enter Email "
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Contact Number </label>

      <input
        type="tel"
        inputMode="numeric"
        minLength="10"
        maxLength="10"
        placeholder="Enter Contact Number"
        required
        pattern="[0-9]{10}"
        onChange={(e) => {
          const input = e.target.value;
          const numbersOnly = input.replace(/\D/g, ""); // Remove non-digit characters
          setPhone_number(numbersOnly);
        }}
        value={phone_number}
      />

      <label> Pool </label>
      <select
        onChange={(e) => setPool(parseFloat(e.target.value))}
        value={pool}
      >
        {" "}
        <option value="" disabled>
          Select Pool Type
        </option>
        <option value="400">2hr=400.00</option>
        <option value="500">3hr=500.00</option>
        <option value="0">Without</option>
      </select>

      <label> Boat Ride </label>

      <select
        onChange={(e) => setBoatRide(parseFloat(e.target.value))}
        value={boatRide}
      >
        <option value="" disabled>
          Select Ride Type
        </option>
        <option value="10000"> 1hr</option>
        <option value="15000">2hr</option>
        <option value="0">without</option>
      </select>

      <label>Photo Shoot</label>

      <select
        onChange={(e) => setPhotoShoot(parseFloat(e.target.value))}
        value={photoShoot}
      >
        {" "}
        <option value="" disabled>
          Select Photo Shoot Type
        </option>
        <option value="6000">WEDDING: 6000.00</option>
        <option value="5000">PER SHOOT: 5000.00</option>
        <option value="4000">BIRTHDAY: 4000.00</option>
        <option value="3000">OTHER: 3000.00</option>
        <option value="0">NO</option>
      </select>

      <label>Total Amount</label>
      <input
        type="number"
        onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
        value={totalAmount}
      />

      <div>
        <button type="button" onClick={calculateTotal}>
          Calculate Total
        </button>

        <div>
          <button>Add</button>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default AddFeeBaseForm;
