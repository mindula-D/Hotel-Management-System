import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_bookingrecord";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import Datatable_booking from "../../../components/Booking/datatable_booking/Datatable_booking";
import "./booking_record.scss";

const BookingRecord = () => {
  return (
    <div className="bookingRecord">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">BOOKING MANAGEMENT</h1>
        <Menu />
        <Datatable_booking />
      </div>
    </div>
  );
};

export default BookingRecord;
