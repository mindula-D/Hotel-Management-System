import React from 'react';
import "./nodeButton.scss";
import { Link } from "react-router-dom";

const Nodebut = () =>{
    return (
      
        <div >
            <div className="note">
                <Link to="/booking/AddBooking"
                      style={{ textDecoration: "none" }}
                >
                <h1>Add A Booking</h1>
                </Link>
            </div>
        </div>
     
    );
  }
  
  export default Nodebut;