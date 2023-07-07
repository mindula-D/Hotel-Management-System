import React from 'react';
import "./Node1.scss";

const Notes1 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/335149867.jpg?k=9d4be17d1013b2c77c0c0e93772fd95ea80db472e70a1ed1f0c5909c7aa7b1a2&o=&hp=1" alt="Luxury Room"/>
      </div>
      <div className="note-content">
      <h1><big>Semi Luxury Rooms</big></h1>
        <p>Situated in the best rated area in Negombo, this hotel has an excellent location score of 8.9.</p>
        <ul>
          <li>A/C</li>
          <li>TV</li>
          <li>WIFI</li>
          <li>Attach Bath Room</li>
          <li>pantry Cupboard</li>
          <li>Double Bed</li>
          <li>Good for a Couple</li>
        </ul>  
        <br></br>

        <div className="room-info">
          <h2>Price : 12.000/= per Day</h2>
          <h2>Total Room Count : 5</h2>
          </div>       
      </div>
    </div>
  );
}

export default Notes1;