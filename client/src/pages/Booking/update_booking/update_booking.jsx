import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_addbooking";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import UppBookingForm from "../../../components/Booking/booking_update/booking_update";

import "./update_booking";

const UpdateBooking = () => {
  return (
    <div className="addbooking">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">BOOKING MANAGEMENT</h1>

        <Menu />

        <div class="card"></div>
        <div className="card">
          <UppBookingForm />{" "}
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
