import React from "react";
import { useState } from "react";
import "./AddDriverForm.scss";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddNewDriver = () => {
  const [DriverID, setdriverID] = useState("");
  const [DriverFirstName, setdriverFirstName] = useState("");
  const [DriverLastName, setdriverLastName] = useState("");
  const [DriverAge, setdriverAge] = useState("");
  const [ContactNumber, setcontactNumber] = useState("");
  const [DriverEmail, setDriverEmail] = useState("");
  const [VehicleManufacture, setvehicleManufacture] = useState("");
  const [VehicleModel, setvehicleModel] = useState("");
  const [VehicleNumber, setvehicleNumber] = useState("");
  const [TotalSeats, settotalSeats] = useState("");
  const [Category, setcategory] = useState("");
  const [GuestDriverNIC, setguestDriverNIC] = useState("");
  const [GuestDriverLicenceIssue, setguestDriverLicenceIssue] = useState("");
  const [GuestDriverLicenceExpire, setguestDriverLicenceExpire] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const prefix = "GDID_";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(5), 10) + 1;
    }
    const nextID = `${prefix}${nextCount.toString().padStart(4, "0")}`;
    localStorage.setItem("lastID", nextID);
    setdriverID(nextID);
  }, [setdriverID]);

  // localStorage.clear();

  const handleSubmit = async (e) => {
    console.log("asasas");
    e.preventDefault();

    const event = {
      DriverID,
      DriverFirstName,
      DriverLastName,
      DriverAge,
      ContactNumber,
      DriverEmail,
      VehicleManufacture,
      VehicleModel,
      VehicleNumber,
      TotalSeats,
      Category,
      GuestDriverNIC,
      GuestDriverLicenceIssue,
      GuestDriverLicenceExpire,
    };

    const response = await fetch("/driver", {
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
      setdriverID("");
      setdriverFirstName("");
      setdriverLastName("");
      setdriverAge("");
      setcontactNumber("");
      setDriverEmail("");
      setvehicleManufacture("");
      setvehicleModel("");
      setvehicleNumber("");
      settotalSeats("");
      setcategory("");
      setguestDriverNIC("");
      setguestDriverLicenceIssue("");
      setguestDriverLicenceExpire("");
      setError(null);
      console.log("New Driver Added", json);
    }
    Swal.fire("Done!", "Guest Driver Added Successfully!", "success");
  };
  return (
    <form className="CreateTP" onSubmit={handleSubmit}>
      <h3> ADD NEW GUEST DRIVER </h3>

      <label> Driver ID </label>
      <input
        type="text"
        unique="true"
        placeholder="Enter Driver ID (Ex: GDID_001) "
        required
        onChange={(e) => setdriverID(e.target.value)}
        value={DriverID}
      />

      <label> Driver First Name </label>
      <input
        type="text"
        placeholder="Enter First Name "
        required
        onChange={(e) => setdriverFirstName(e.target.value)}
        value={DriverFirstName}
      />
      <label> Driver Last Name </label>
      <input
        type="text"
        placeholder="Enter Last Name "
        required
        onChange={(e) => setdriverLastName(e.target.value)}
        value={DriverLastName}
      />
      <label> Driver Age </label>
      <input
        type="number"
        placeholder="Enter Age "
        required
        onChange={(e) => setdriverAge(e.target.value)}
        value={DriverAge}
      />

      <label> Contact Number </label>
      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) => setcontactNumber(e.target.value)}
        value={ContactNumber}
      />
      <label> Driver Email </label>
      <input
        type="email"
        placeholder="Enter a Valid Email Address"
        required
        onChange={(e) => setDriverEmail(e.target.value)}
        value={DriverEmail}
      />
      <label>Vehicle Manufacture </label>
      <input
        type="text"
        placeholder=" Enter Vehicle Manufacturer"
        required
        onChange={(e) => setvehicleManufacture(e.target.value)}
        value={VehicleManufacture}
      />

      <label> Vehicle Model </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Model"
        required
        onChange={(e) => setvehicleModel(e.target.value)}
        value={VehicleModel}
      />

      <label> Vehicle Number </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Number"
        required
        onChange={(e) => setvehicleNumber(e.target.value)}
        value={VehicleNumber}
      />

      <label> Total Seats </label>

      <input
        type="number"
        placeholder=" Enter Total Seats"
        required
        onChange={(e) => settotalSeats(e.target.value)}
        value={TotalSeats}
      />

      <label>Category </label>

      <select onChange={(e) => setcategory(e.target.value)} value={Category}>
        <option value="Basic-Transit">Basic-Transit</option>
        <option value="Comfort-Cruiser">Comfort-Cruiser</option>
        <option value="Luxury-Liner">Luxury-Liner</option>
      </select>

      <label> Driver Info (NIC) </label>
      <input
        type="text"
        maxLength={12}
        pattern="^[0-9]{10}$"
        placeholder="Enter NIC "
        required
        onChange={(e) => setguestDriverNIC(e.target.value)}
        value={GuestDriverNIC}
      />

      <label> Driver Info (Licence Issue Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Issue Date "
        required
        onChange={(e) => setguestDriverLicenceIssue(e.target.value)}
        value={GuestDriverLicenceIssue}
      />

      <label> Driver Info (Licence Expiry Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Expiry Date "
        required
        onChange={(e) => setguestDriverLicenceExpire(e.target.value)}
        value={GuestDriverLicenceExpire}
      />

      <button> ADD GUEST DRIVER </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddNewDriver;
