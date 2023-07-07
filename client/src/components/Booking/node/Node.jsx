import React from 'react';
import "./Node.scss";

const Notes = () => {
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/356808279.jpg?k=28d4685805058a78673144329a04abafeda332b906f23edfc44ffa46b5cd027b&o=&hp=1" alt="Luxury Room"/>
      </div>
      <div className="note-content">
        <h1><big>Luxury Rooms</big></h1>
        <p>Situated in the best rated area in Negombo, this hotel has an excellent location score of 8.9.</p>
        <ul>
          <li>A/C</li>
          <li>TV</li>
          <li>WIFI</li>
          <li>Kitchen</li>
          <li>Attach Bath Room</li>
          <li>Triple Bed</li>
          <li>Good for a Family</li>
        </ul>
        <br></br>

        <div className="room-info">
          <h2>Price : 15.000/= per Day</h2>
          <h2>Total Room Count : 5</h2>
          </div>
      </div>
    </div>
  );
}

export default Notes;