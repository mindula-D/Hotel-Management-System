import React from "react";
import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_addbooking";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import "./add_booking.scss";

const AddBookingContainer = () => {
  return (
    <div className="addbooking">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">BOOKING MANAGEMENT</h1>
        <Menu />
        <table>
          <tr>
            <td>
              <form>
                Room Types:
                <select>
                  <option>Luxary</option>
                  <option>Semi Luxary</option>
                  <option>Basis</option>
                </select>
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <br />
              <br />
              <video width="320" height="240" controls>
                <source src="/gallery/luxary.mkv" type="video/x-matroska" />
              </video>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddBookingContainer;
