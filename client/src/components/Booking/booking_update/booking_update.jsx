import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./booking_update.scss";

const UppBookingForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    bookingid: "",
    nic: "",
    name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    checkin: "",
    checkout: "",
    roomtype: "",
    roomCount: "",
    totRoom: "",
    noadults: "",
    nochildren: "",
  });

  useEffect(() => {
    //Fetiching data
    axios
      .get(`/rmhotel/get/${id}`)
      .then((res) => {
        setValues({
          ...values,
          bookingid: res.data.bookingid,
          nic: res.data.nic,
          name: res.data.name,
          phone: res.data.phone,
          address1: res.data.address1,
          address2: res.data.address2,
          city: res.data.city,
          state: res.data.state,
          zip: res.data.zip,
          email: res.data.email,
          checkin: res.data.checkin,
          checkout: res.data.checkout,
          roomtype: res.data.roomtype,
          roomCount: res.data.roomCount,
          totRoom: res.data.totRoom,
          noadults: res.data.noadults,
          nochildren: res.data.nochildren,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/rmhotel/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Booking Updated Successfully!", "success");
        navigate("/booking/BookingRecord"); //Where to navigate after updating
      })
      .catch((err) => console.log(err));
  };

  //----------------1st function for discount-----------

  // function calculateTotal(roomtype, roomCount) {
  //     let rate;
  //     switch(roomtype) {
  //       case 'Luxary_Rooms':
  //         rate = 15000;
  //         break;
  //       case 'Semi_Luxary_Rooms':
  //         rate = 12000;
  //         break;
  //       case 'Normal_Rooms':
  //         rate = 10000;
  //         break;
  //       default:
  //         rate = 0;
  //     }
  //     return rate * roomCount;
  //   }

  //   function handleRoomTypeChange(event) {
  //     setRoomtype(event.target.value);
  //     settotRoom(calculateTotal(event.target.value, roomCount));
  //   }

  //   function handleRoomCountChange(event) {
  //     setroomCount(event.target.value);
  //     settotRoom(calculateTotal(roomtype, event.target.value));
  //   }

  //   //----------------2nd function for discount-----------

  //   function calculateDicount(nochildren, totRoom) {
  //     let dis;
  //     if (nochildren > 5) {
  //         dis = nochildren* 0.2;

  //     }else{
  //         dis = totRoom;
  //     }

  //     return totRoom - dis;
  //   }

  // //   function handleToT(event) {
  // //     setNochildren(event.targe.valute);
  // //     settotRoom(calculateDicount(event.target.value,totRoom));
  // //   }

  //   function handleToT(event) {
  //     setNochildren(event.target.value);
  //     const discountedTotal = calculateDicount(event.target.value, totRoom);
  //     settotRoom(discountedTotal);
  //   }

  //   useEffect(() => {
  //     const prefix = 'BID';
  //     let lastID = localStorage.getItem('lastID');
  //     let nextCount = 0;
  //     if (lastID) {
  //       nextCount = parseInt(lastID.substring(3), 10) + 1;
  //     }
  //     const nextID = `${prefix}${(nextCount).toString().padStart(4, '0')}`;
  //     localStorage.setItem('lastID', nextID);
  //     setBookingid(nextID);
  //   }, [setBookingid]);

  //localStorage.clear();

  return (
    <div>
      <form className="updateB" onSubmit={handleUpdate}>
        <h3> UPDATE ROOM BOOKING </h3>

        <label> Booking ID </label>
        <input
          type="text"
          placeholder="Enter Booking ID "
          required
          readOnly
          onChange={(e) => setValues({ ...values, bookingid: e.target.value })}
          value={values.bookingid}
        />

        <label> Customer Name </label>
        <input
          type="text"
          placeholder="Enter Name "
          required
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
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
          onChange={(e) => setValues({ ...values, nic: e.target.value })}
          value={values.nic}
        />

        <label> Contact Number:</label>
        <input
          type="tel"
          pattern="^[0-9]{10}$"
          placeholder="Enter Contact Number"
          required
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          value={values.phone}
        />

        <label> Address1 </label>
        <input
          type="text"
          placeholder="Enter Address1 "
          required
          onChange={(e) => setValues({ ...values, address1: e.target.value })}
          value={values.address1}
        />

        <label> Address2 </label>
        <input
          type="text"
          placeholder="Enter Address2"
          required
          onChange={(e) => setValues({ ...values, address2: e.target.value })}
          value={values.address2}
        />

        <label> City </label>
        <input
          type="text"
          placeholder=" Enter City"
          required
          onChange={(e) => setValues({ ...values, city: e.target.value })}
          value={values.city}
        />

        <label>State </label>
        <input
          type="text"
          placeholder=" Enter State"
          required
          onChange={(e) => setValues({ ...values, state: e.target.value })}
          value={values.state}
        />

        <label>Zip Code</label>
        <input
          type="text"
          pattern="^[0-9]{5}$"
          placeholder="Enter Zip Code"
          required
          onChange={(e) => setValues({ ...values, zip: e.target.value })}
          value={values.zip}
        />

        <label> Email </label>
        <input
          type="email"
          unique="true"
          placeholder=" Enter Email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
        />
        {/* 
              <label> Check In Date </label>
              <input
                type="date"
                placeholder=" Check IN Date"
                required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setValues({ ...values, checkin: e.target.value })}
                value={values.checkin}
              />

              <label> Check Out Date </label>
              <input
                type="date"
                placeholder=" Check Out Date"
                required
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setValues({ ...values, checkout: e.target.value })}
                value={values.checkout}
              /> */}

        <label> Check In Date </label>
        <input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          required
          onChange={(e) => setValues({ ...values, checkin: e.target.value })}
          value={values.checkin}
        />

        <label> Check Out Date </label>
        <input
          type="date"
          // placeholder=' Check Out Date'
          required
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setValues({ ...values, checkout: e.target.value })}
          value={values.checkout}
        />

        <label>Room Type</label>
        <select
          value={values.roomtype}
          onChange={(e) => setValues({ ...values, roomtype: e.target.value })}
        >
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
          value={values.roomCount}
          //onChange={handleRoomCountChange}  event handler to handle room count target values in here
          onChange={(e) => setValues({ ...values, roomCount: e.target.value })}
        />

        <label>Total value of the rooms</label>
        <input
          type="number"
          placeholder="Value"
          required
          readOnly
          onChange={(e) => setValues({ ...values, totRoom: e.target.value })}
          value={values.totRoom}
        />

        <label> No Of Adults</label>
        <input
          type="number"
          placeholder=" Enter No Of Adults"
          min="1"
          max="5"
          required
          value={values.noadults}
          onChange={(e) => setValues({ ...values, noadults: e.target.value })}
        />

        <label> No Of Children</label>
        <input
          type="number"
          placeholder=" Enter No Of Children"
          min="1"
          max="10"
          required
          value={values.nochildren}
          //onChange={handleToT}  event handler to handle discount target values in here
          // onChange={(e) => setValues({ ...values, noadults: e.target.value })}
          onChange={(e) => setValues({ ...values, nochildren: e.target.value })}
        />

        {/* <button type="submit">Update</button>

              <button onClick={() => window.location.reload()}> CANCEL </button> */}
        <div className="btn">
          <button type="submit">Submit</button>
          <button onClick={() => window.location.reload()}>CANCEL</button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default UppBookingForm;
