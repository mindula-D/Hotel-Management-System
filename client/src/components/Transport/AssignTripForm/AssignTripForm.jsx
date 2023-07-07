import React from "react";
import { useState } from "react";
import "./AssignTripForm.scss";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddNewTrip = () => {
  const [TripID, settripID] = useState("");
  const [RequesterID, setrequesterID] = useState("");
  const [RequesterName, setrequesterName] = useState("");
  const [RequesterContactNumber, setrequesterContactNumber] = useState("");
  const [NoOfPassengers, setnoOfPassengers] = useState("");
  const [TripDate, settripDate] = useState("");
  const [PickUpTime, setpickUpTime] = useState("");
  const [PickUpLocation, setpickUpLocation] = useState("");
  const [DropOffLocation, setdropOffLocation] = useState("");
  //const [TripType, settripType] = useState('');
  const [TripPackageType, settripPackageType] = useState("");
  const [TotalDistance, settotalDistance] = useState("");
  const [TripDriverID, settripDriverID] = useState("");
  const [emptyFields, setemptyFields] = useState([]);
  const [TotalFee, setTotalFee] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const prefix = "TID_";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(4), 10);
    }
    const nextID = `${prefix}${(nextCount + 1).toString().padStart(3, "0")}`;
    localStorage.setItem("lastID", nextID);
    settripID(nextID);
  }, [settripID]);

  //localStorage.clear();

  const calcTotalFee = (e) => {
    e.preventDefault();
    const packageType = parseInt(TripPackageType);
    const totalDistance = parseInt(TotalDistance);

    const totalFee = packageType * totalDistance;
    setTotalFee(totalFee);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("amo");

    const event = {
      TripID,
      RequesterID,
      RequesterName,
      RequesterContactNumber,
      NoOfPassengers,
      TripDate,
      PickUpTime,
      PickUpLocation,
      DropOffLocation,
      // TripType,
      TripPackageType,
      TotalDistance,
      TripDriverID,
      TotalFee,
    };

    const response = await fetch("/trip", {
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
      settripID("");
      setrequesterID("");
      setrequesterName("");
      setrequesterContactNumber("");
      setnoOfPassengers("");
      settripDate("");
      setpickUpTime("");
      setpickUpLocation("");
      setdropOffLocation("");
      // settripType('');
      settripPackageType("");
      settotalDistance("");
      settripDriverID("");
      setTotalFee("");
      setError(null);
      console.log("New Trip Assigned", json);
    }
    Swal.fire("Done!", "New Trip Assigned Successfully!", "success");
  };
  return (
    <form className="CreateTP">
      <h3> ASSIGN NEW TRIP </h3>

      <label> Trip ID </label>

      <input
        type="text"
        unique="true"
        placeholder="Enter Trip ID (Ex: TID_001) "
        required
        onChange={(e) => settripID(e.target.value)}
        value={TripID}
      />

      <label> Requester ID </label>

      <input
        type="text"
        placeholder="Enter Requester ID (Ex: GID_001) "
        required
        onChange={(e) => setrequesterID(e.target.value)}
        value={RequesterID}
      />

      <label> Requester Name </label>

      <input
        type="text"
        placeholder="Enter Requester Name "
        required
        onChange={(e) => setrequesterName(e.target.value)}
        value={RequesterName}
      />

      <label> Requester Contact Number </label>

      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Requester Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) => setrequesterContactNumber(e.target.value)}
        value={RequesterContactNumber}
      />

      <label> Passenger Count </label>

      <input
        type="number"
        placeholder="Enter Passenger Count "
        required
        onChange={(e) => setnoOfPassengers(e.target.value)}
        value={NoOfPassengers}
      />

      <label> Trip Date </label>

      <input
        type="date"
        placeholder="Select Trip Date"
        required
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => settripDate(e.target.value)}
        value={TripDate}
      />

      <label>Pick-Up Time </label>

      <input
        type="time"
        placeholder=" Enter Pick-Up Time"
        required
        onChange={(e) => setpickUpTime(e.target.value)}
        value={PickUpTime}
      />

      <label> Pick-Up Location </label>

      <input
        type="text"
        placeholder=" Enter Pick-Up Location"
        required
        onChange={(e) => setpickUpLocation(e.target.value)}
        value={PickUpLocation}
      />

      <label> Drop-Off Location </label>

      <input
        type="text"
        placeholder=" Enter Drop-Off Location "
        required
        onChange={(e) => setdropOffLocation(e.target.value)}
        value={DropOffLocation}
      />

      {/* <label>Trip Type  </label>
        {emptyFields.includes("TripType") && (
              <div className="error">*Please Select a Trip Type*</div>
        )}
         
         <select
             onChange={(e)=> settripType(e.target.value)}
             value={TripType}
             
         >
          <option value="One-Way" >One-Way</option>
          <option value="Both-Ways" >Both-Ways</option>
         </select> */}

      <label>Package Type </label>

      <select
        onChange={(e) => settripPackageType(e.target.value)}
        value={TripPackageType}
      >
        <option value="80">Basic-Transit </option>
        <option value="100">Comfort-Cruiser</option>
        <option value="150">Luxury-Liner</option>
      </select>

      <label> Total Distance In km </label>

      <input
        type="number"
        placeholder=" Enter Total Distance Only for One Way (In km) "
        required
        onChange={(e) => settotalDistance(e.target.value)}
        value={TotalDistance}
      />

      <label> Driver ID </label>

      <input
        type="text"
        placeholder=" Enter Guest Driver ID (Ex: GDID_001) "
        required
        onChange={(e) => settripDriverID(e.target.value)}
        value={TripDriverID}
      />

      <label> Total Fee In Rs. </label>

      <input
        type="number"
        placeholder=" Enter Total Fee (In Rs.)     |   Fee Per 1km : BT - 80 / CC - 100 / LL - 150  "
        required
        onChange={(e) => setTotalFee(e.target.value)}
        value={TotalFee + ".00"}
      />
      <button onClick={calcTotalFee}> CALCULATE TOTAL FEE </button>
      <button onClick={handleSubmit}> ASSIGN NEW TRIP </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddNewTrip;
