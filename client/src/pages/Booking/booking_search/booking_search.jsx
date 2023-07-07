import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_search";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import Notes from "../../../components/Booking/node/Node";
import Notes1 from "../../../components/Booking/node1/Node1";
import Notes2 from "../../../components/Booking/node2/Node2";
import Nodebut from "../../../components/Booking/nodeButton/nodeButton";

import "./booking_search.scss";

const BookingSearch = () => {
  return (
    <div className="bookingSearch">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">BOOKING MANAGEMENT</h1>
        <Menu />

        <table>
          <tr>
            <td>
              <Notes />
            </td>

            <td>
              <Notes1 />
            </td>

            <td>
              <Notes2 />
            </td>
          </tr>

          <tr>
            <td>
              <Nodebut />
            </td>

            <td>
              <Nodebut />
            </td>

            <td>
              <Nodebut />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BookingSearch;
