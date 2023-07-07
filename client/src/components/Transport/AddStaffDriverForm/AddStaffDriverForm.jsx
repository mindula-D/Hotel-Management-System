import React from "react";
import { useState } from "react";
import "./AddStaffDriverForm.scss";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddNewStaffDriver = () => {
  const [StaffDriverID, setstaffDriverID] = useState("");
  const [StaffDriverFirstName, setstaffDriverFirstName] = useState("");
  const [StaffDriverLastName, setstaffDriverLastName] = useState("");
  const [TelephoneNumber, settelephoneNumber] = useState("");
  const [StartingPoint, setstartingPoint] = useState("");
  const [StartingTime, setstartingTime] = useState("");
  const [ArrivalTime, setarrivalTime] = useState("");
  const [DepartureTime, setdepartureTime] = useState("");
  const [Vehicle, setvehicle] = useState("");
  const [StaffVehicleNumber, setstaffVehicleNumber] = useState("");
  const [StaffTotalSeats, setstaffTotalSeats] = useState("");
  const [StaffDriverNIC, setstaffDriverNIC] = useState("");
  const [StaffDriverLicenceIssue, setstaffDriverLicenceIssue] = useState("");
  const [StaffDriverLicenceExpire, setstaffDriverLicenceExpire] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const prefix = "SDID_";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(5), 10);
    }
    const nextID = `${prefix}${(nextCount + 1).toString().padStart(3, "0")}`;
    localStorage.setItem("lastID", nextID);
    setstaffDriverID(nextID);
  }, [setstaffDriverID]);

  //localStorage.clear();

  const handleSubmit = async (e) => {
    console.log("asasas");
    e.preventDefault();

    const event = {
      StaffDriverID,
      StaffDriverFirstName,
      StaffDriverLastName,
      TelephoneNumber,
      StartingPoint,
      StartingTime,
      ArrivalTime,
      DepartureTime,
      Vehicle,
      StaffVehicleNumber,
      StaffTotalSeats,
      StaffDriverNIC,
      StaffDriverLicenceIssue,
      StaffDriverLicenceExpire,
    };

    const response = await fetch("/staff", {
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
      setstaffDriverID("");
      setstaffDriverFirstName("");
      setstaffDriverLastName("");
      settelephoneNumber("");
      setstartingPoint("");
      setstartingTime("");
      setarrivalTime("");
      setdepartureTime("");
      setvehicle("");
      setstaffVehicleNumber("");
      setstaffTotalSeats("");
      setstaffDriverNIC("");
      setstaffDriverLicenceIssue("");
      setstaffDriverLicenceExpire("");
      setError(null);
      console.log("New Driver Added", json);
    }
    Swal.fire("Done!", "Staff Driver Added Successfully!", "success");
  };
  return (
    <form className="CreateTP" onSubmit={handleSubmit}>
      <h3> ADD NEW STAFF DRIVER </h3>

      <label> Driver ID </label>
      <input
        type="text"
        unique="true"
        placeholder="Enter Driver ID (Ex: SDID_001) "
        required
        onChange={(e) => setstaffDriverID(e.target.value)}
        value={StaffDriverID}
      />

      <label> Driver First Name </label>
      <input
        type="text"
        placeholder="Enter First Name "
        required
        onChange={(e) => setstaffDriverFirstName(e.target.value)}
        value={StaffDriverFirstName}
      />
      <label> Driver Last Name </label>
      <input
        type="text"
        placeholder="Enter Last Name "
        required
        onChange={(e) => setstaffDriverLastName(e.target.value)}
        value={StaffDriverLastName}
      />
      <label> Contact Number </label>
      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) => settelephoneNumber(e.target.value)}
        value={TelephoneNumber}
      />

      <label> Starting Point </label>
      <input
        type="text"
        placeholder="Enter Starting Point "
        required
        onChange={(e) => setstartingPoint(e.target.value)}
        value={StartingPoint}
      />
      <label> Starting Time </label>
      <input
        type="time"
        placeholder="Enter Starting Time"
        required
        onChange={(e) => setstartingTime(e.target.value)}
        value={StartingTime}
      />
      <label>Arrival Time </label>
      <input
        type="time"
        placeholder=" Enter Arrival Time"
        required
        onChange={(e) => setarrivalTime(e.target.value)}
        value={ArrivalTime}
      />

      <label> Departure Time </label>

      <input
        type="time"
        placeholder=" Enter Departure Time"
        required
        onChange={(e) => setdepartureTime(e.target.value)}
        value={DepartureTime}
      />

      <label> Vehicle </label>

      <input
        type="text"
        placeholder=" Enter Vehicle "
        required
        onChange={(e) => setvehicle(e.target.value)}
        value={Vehicle}
      />

      <label> Vehicle Number </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Number "
        required
        onChange={(e) => setstaffVehicleNumber(e.target.value)}
        value={StaffVehicleNumber}
      />

      <label> Total Seats </label>

      <input
        type="number"
        placeholder=" Enter Total Seats"
        required
        onChange={(e) => setstaffTotalSeats(e.target.value)}
        value={StaffTotalSeats}
      />

      <label> Driver Info (NIC) </label>
      <input
        type="text"
        maxLength={12}
        pattern="^[0-9]{10}$"
        placeholder="Enter NIC "
        required
        onChange={(e) => setstaffDriverNIC(e.target.value)}
        value={StaffDriverNIC}
      />

      <label> Driver Info (Licence Issue Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Issue Date "
        required
        onChange={(e) => setstaffDriverLicenceIssue(e.target.value)}
        value={StaffDriverLicenceIssue}
      />

      <label> Driver Info (Licence Expiry Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Expiry Date "
        required
        onChange={(e) => setstaffDriverLicenceExpire(e.target.value)}
        value={StaffDriverLicenceExpire}
      />

      <button> ADD STAFF DRIVER </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddNewStaffDriver;
