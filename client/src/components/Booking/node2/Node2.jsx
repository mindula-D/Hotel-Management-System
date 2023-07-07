import React from 'react';
import "./Node2.scss";

const Notes2 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/64394976.jpg?k=5a838cd8dc2845c9b59d0eb4ea65cdda150932328628c800c2d56b16a4fcb615&o=&hp=1" alt="Luxury Room"/>
      </div>
      <div className="note-content">
      <h1><big>Normal Rooms</big></h1>
        <p>Situated in the best rated area in Negombo, this hotel has an excellent location score of 8.9.</p>
        <ul>
          <li>A/C</li>
          <li>TV</li>
          <li>WIFI</li>
          <li>Attach Bath Room</li>
          <li>Cupboard</li>
          <li>Single Bed</li>
          <li>Good for a Single Person</li>
        </ul> 
        <br></br>
        <div className="room-info">
          <h2>Price : 10.000/= per Day</h2>
          <h2>Total Room Count : 5</h2>
          </div> 
      </div>
    </div>
  );
}

export default Notes2;