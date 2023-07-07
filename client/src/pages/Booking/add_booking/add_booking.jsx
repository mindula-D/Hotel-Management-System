import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_addbooking";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import AddBookingForm from "../../../components/Booking/booking_form/bookinform";

import "./add_booking.scss";

const AddBooking = () => {
  return (
    <div className="addbooking">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">BOOKING MANAGEMENT</h1>

        <Menu />

        <div class="card"></div>
        <AddBookingForm />
      </div>
    </div>
  );
};

export default AddBooking;
