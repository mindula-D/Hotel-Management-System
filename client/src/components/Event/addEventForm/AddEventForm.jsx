import React from "react";
import { useState } from "react";
import "./addEventForm.scss";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const AddEventForm = () => {
  const [customer_name, setCustomer_name] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [total_count, setTotal_count] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [function_type, setFunction_type] = useState("");
  const [hall_type, setHall_type] = useState("");
  const [fee_based_Activities, setFee_based_Activities] = useState("");
  const [plate_type, setPlate_type] = useState("");
  const [additional_charges, setAdditional_charges] = useState(0);
  const [totalSalary, setTotalSalary] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //const[emptyField, setEmptyField] = useState([]);
  const calculateSalary = () => {
    const totalCountValue = parseInt(total_count);
    const plateTypeValue = parseFloat(plate_type);
    const feeBasedActivitiesValue = parseFloat(fee_based_Activities);
    const additionalChargesValue = parseFloat(additional_charges);

    const totalSalary =
      totalCountValue * plateTypeValue +
      feeBasedActivitiesValue +
      additionalChargesValue;
    setTotalSalary(totalSalary);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email)) {
      Swal.fire("Invalid!", "Please enter valid email", "error");
      return;
    }

    const event = {
      customer_name,
      date,
      timeSlot,
      total_count,
      email,
      address,
      phone_number,
      function_type,
      hall_type,
      fee_based_Activities,
      plate_type,
      additional_charges,
      totalSalary,
    };

    const response = await fetch("/event", {
      method: "POST",
      body: JSON.stringify(event),
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
      setAddress("");
      setPhone_number("");
      setFunction_type("");
      setHall_type("");
      setFee_based_Activities("");
      setPlate_type("");
      additional_charges("");
      setTotalSalary("");
      setError(null);
      console.log("New Event Added", json);
      Swal.fire("Done!", "Event Added Successfully!.", "success");
      navigate("/event/recordTable");
    }
  };
  return (
    <form className="event" onSubmit={handleSubmit}>
      <h3> ADD NEW EVENT </h3>

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
          Select a Time Slot
        </option>
        <option value="Morning">Morning</option>
        <option value="Night">Night</option>
      </select>

      <label>Total Count</label>
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
        unique="true"
        placeholder="Enter Email "
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label> Address </label>

      <input
        type="text"
        placeholder="Enter Address"
        required
        onChange={(e) => setAddress(e.target.value)}
        value={address}
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

      <label>Function Type </label>
      <select
        onChange={(e) => setFunction_type(e.target.value)}
        value={function_type}
      >
        <option value="" disabled>
          Select a Function Type
        </option>
        <option value="BirthDay">BirthDay</option>
        <option value="Get-togethe">Get-together</option>
        <option value="Wedding">Wedding</option>
        <option value="Other">Other</option>
      </select>

      <label> Hall Type </label>

      <select onChange={(e) => setHall_type(e.target.value)} value={hall_type}>
        {" "}
        <option value="" disabled>
          Select a Hall Type
        </option>
        <option value="Hall A">Hall A</option>
        <option value="Hall B">Hall B</option>
        <option value="Hall C">Hall C</option>
        <option value="OutDoor">OutDoor</option>
      </select>

      <label> Fee-Based Activities </label>

      <input
        type="Number"
        min={0}
        onChange={(e) => setFee_based_Activities(parseFloat(e.target.value))}
        value={fee_based_Activities}
      />

      <label>Plate Type</label>

      <select
        onChange={(e) => setPlate_type(parseFloat(e.target.value))}
        value={plate_type}
      >
        {" "}
        <option value="" disabled>
          Select a Plate Type
        </option>
        <option value="6000">PLATINUM: 6000.00</option>
        <option value="5500">GOLD: 5500.00</option>
        <option value="4000">SILVER: 4000.00</option>
        <option value="3000">BRONZE: 3000.00</option>
      </select>

      <label>Additional Charges</label>

      <select
        onChange={(e) => setAdditional_charges(parseFloat(e.target.value))}
        value={additional_charges}
      >
        {" "}
        <option value="" disabled>
          Select Relevent Hall Type
        </option>
        <option value="30000">Hall A:30000.00</option>
        <option value="25000">Hall B:25000.00</option>
        <option value="20000">Hall C:20000.00</option>
        <option value="10000">OutDoor:10000.00</option>
      </select>

      <label>Total Amount</label>
      <input
        type="number"
        onChange={(e) => setTotalSalary(parseFloat(e.target.value))}
        value={totalSalary}
      />

      <div>
        <button className="buttonAE" type="button" onClick={calculateSalary}>
          Calculate Total
        </button>

        <button className="buttonAE" type="button" onClick={handleSubmit}>
          Add
        </button>
      </div>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddEventForm;
