import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "./bookingform.scss";

const AddBookingForm = () => {
  const [bookingid, setBookingid] = useState("");
  const [nic, setNic] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [roomCount, setroomCount] = useState("");
  const [totRoom, settotRoom] = useState("");
  const [noadults, setNoadults] = useState("");
  const [nochildren, setNochildren] = useState("");
  // const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState(null);

  // const handleSubmitUP = (e) => {
  //   e.preventDefault();
  //   const updatedBooking = {
  //     nic,
  //     name,
  //     phone,
  //     address1,
  //     address2,
  //     city,
  //     state,
  //     zip,
  //     email,
  //     checkin,
  //     checkout,
  //     roomtype,
  //     roomCount,
  //     totRoom,
  //     noadults,
  //     nochildren
  //   };
  //----------------1st function for discount-----------

  function calculateTotal(roomtype, roomCount) {
    let rate;
    switch (roomtype) {
      case "Luxary_Rooms":
        rate = 15000;
        break;
      case "Semi_Luxary_Rooms":
        rate = 12000;
        break;
      case "Normal_Rooms":
        rate = 10000;
        break;
      default:
        rate = 0;
    }
    return rate * roomCount;
  }

  function handleRoomTypeChange(event) {
    setRoomtype(event.target.value);
    settotRoom(calculateTotal(event.target.value, roomCount));
  }

  function handleRoomCountChange(event) {
    setroomCount(event.target.value);
    settotRoom(calculateTotal(roomtype, event.target.value));
  }

  //----------------2nd function for discount-----------

  function calculateDicount(nochildren, totRoom) {
    let dis;
    if (nochildren > 5) {
      dis = nochildren * 0.2;
    } else {
      dis = totRoom;
    }

    return totRoom - dis;
  }

  //   function handleToT(event) {
  //     setNochildren(event.targe.valute);
  //     settotRoom(calculateDicount(event.target.value,totRoom));
  //   }

  function handleToT(event) {
    setNochildren(event.target.value);
    const discountedTotal = calculateDicount(event.target.value, totRoom);
    settotRoom(discountedTotal);
  }

  useEffect(() => {
    const prefix = "BID";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(5), 10) + 1;
    }
    const nextID = `${prefix}${nextCount.toString().padStart(4, "0")}`;
    localStorage.setItem("lastID", nextID);
    setBookingid(nextID);
  }, [setBookingid]);

  // localStorage.clear();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    const booking = {
      bookingid,
      nic,
      name,
      phone,
      address1,
      address2,
      city,
      state,
      zip,
      email,
      checkin,
      checkout,
      roomtype,
      roomCount,
      totRoom,
      noadults,
      nochildren,
    };

    const response = await fetch("/rmhotel/add", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setBookingid("");
      setNic("");
      setName("");
      setPhone("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setZip("");
      setEmail("");
      setCheckin("");
      setCheckout("");
      setRoomtype("");
      setroomCount("");
      settotRoom("");
      setNoadults("");
      setNochildren("");
      setError(null);

      console.log("New Booking Added", json);
    }
    Swal.fire("Done!", "Payment Successfull!", "success");
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h3> ADD NEW ROOM BOOKING </h3>

        <label> Booking ID </label>
        <input
          type="text"
          placeholder="Enter Booking ID "
          required
          readOnly
          onChange={(e) => setBookingid(e.target.value)}
          value={bookingid}
        />

        <label> Customer Name </label>
        <input
          type="text"
          placeholder="Enter Name "
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Customer NIC:</label>
        <input
          type="text"
          minLength="10"
          maxLength="12"
          pattern="^(?:\d{9}(?:V|\d)|\d{12})$"
          unique="true"
          placeholder="Enter NIC"
          required
          onChange={(e) => setNic(e.target.value)}
          value={nic}
        />

        <label> Contact Number:</label>
        <input
          type="tel"
          pattern="^[0-9]{10}$"
          placeholder="Enter Contact Number"
          required
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <label> Address1 </label>
        <input
          type="text"
          placeholder="Enter Address1 "
          required
          onChange={(e) => setAddress1(e.target.value)}
          value={address1}
        />

        <label> Address2 </label>
        <input
          type="text"
          placeholder="Enter Address2"
          required
          onChange={(e) => setAddress2(e.target.value)}
          value={address2}
        />

        <label>City </label>
        <input
          type="text"
          placeholder=" Enter City"
          required
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />

        <label>State </label>
        <input
          type="text"
          placeholder=" Enter State"
          required
          onChange={(e) => setState(e.target.value)}
          value={state}
        />

        <label> Zip Code</label>
        <input
          type="number"
          placeholder="Enter Zip Code"
          required
          // onChange={(e) => setZip(e.target.value)}
          onChange={(e) => {
            const zipValue = e.target.value;
            if (/^\d{0,5}$/.test(zipValue)) {
              setZip(zipValue);
            }
          }}
          value={zip}
        />

        <label> Email </label>
        <input
          type="email"
          unique="true"
          placeholder=" Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label> Check In Date </label>
        <input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setCheckin(e.target.value)}
          value={checkin}
        />

        <label> Check Out Date </label>
        <input
          type="date"
          placeholder=" Check Out Date"
          required
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setCheckout(e.target.value)}
          value={checkout}
        />

        {/* 
                  onChange={(e) => {
                    setCheckin(e.target.value);
                    setCheckout(""); // reset checkout date
                  }}
             
                  min={checkin ? checkin : new Date().toISOString().slice(0, 10)}
                  max={new Date().toISOString().slice(0, 10)}
              
                /> */}

        <label>Room Type</label>
        <select value={roomtype} onChange={handleRoomTypeChange}>
          <option value="Luxary_Rooms">Luxary Rooms</option>
          <option value="Semi_Luxary_Rooms">Semi Luxary Rooms</option>
          <option value="Normal_Rooms">Normal Rooms</option>
        </select>

        <label>Enter No Of Rooms</label>

        <input
          type="number"
          placeholder="Number Between 1 - 5"
          min="1"
          max="5"
          required
          value={roomCount}
          onChange={handleRoomCountChange} // event handler to handle room count target values in here
        />

        <label>Total value of the rooms</label>
        <input
          type="number"
          placeholder="Value"
          required
          readOnly
          onChange={(e) => settotRoom(e.target.value)}
          value={totRoom}
        />

        <label> No Of Adults</label>
        <input
          type="number"
          placeholder=" Enter No Of Adults"
          min="1"
          max="5"
          required
          onChange={(e) => setNoadults(e.target.value)}
          value={noadults}
        />

        <label> No Of Children</label>
        <input
          type="number"
          placeholder=" Enter No Of Children"
          min="1"
          max="10"
          required
          value={nochildren}
          onChange={handleToT} // event handler to handle discount target values in here
        />
        {/* <button type="submit">Submit</button> <br/> <br/>    
        

        <button onClick={() => window.location.reload()}> CANCEL </button>  */}

        {/* <div style={{ display: 'flex' }}>
  <button type="submit">Submit</button>
  <button onClick={() => window.location.reload()}>CANCEL</button>
</div> */}

        <div>
          <button type="submit">Submit</button>
          <button onClick={() => window.location.reload()}>CANCEL</button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default AddBookingForm;
