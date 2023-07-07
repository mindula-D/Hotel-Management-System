import React from "react";
import { useState } from "react";
import "./getFeedbackForm.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FeedbackEmail from "./mail-template.js";

const GetFeedbackForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [feedbackBody, setFeedback] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //console.log(e);
    e.preventDefault();

    const emptyFields = [];
    if (!customerName) {
      emptyFields.push("customerName");
    }
    if (!customerEmail) {
      emptyFields.push("customerEmail");
    }
    if (!roomId) {
      emptyFields.push("roomId");
    }
    if (!feedbackBody) {
      emptyFields.push("feedbackBody");
    }

    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    const regExEmail =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regExEmail.test(customerEmail)) {
      Swal.fire("Invalid!", "Please enter valid email", "error");
      return;
    }

    const regExRID = /^(L|S|N)/g;
    if (!regExRID.test(roomId)) {
      Swal.fire("Invalid!", "Please enter valid Room ID", "error");
      return;
    }

    const feedback = { customerName, customerEmail, roomId, feedbackBody };

    const response = await fetch("/feedbacks", {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setCustomerName("");
      setCustomerEmail("");
      setRoomId("");
      setFeedback("");
      setError(null);
      console.log("new feedback added", json);
      Swal.fire("Done!", "Feedback Added Successfully!", "success");
      navigate("/housekeeping/viewFeedback");
    }

    window.Email.send({
      Username: "silversandsfeedback@gmail.com",
      Password: "9F57267C781CA22E82F59CD64B83BF9B7740",
      Host: "smtp.elasticemail.com",
      Port: 2525,
      To: customerEmail,
      From: "silversandsfeedback@gmail.com",
      Subject: "Feedback has been Submitted",
      Body: `${FeedbackEmail(customerName)}`,
    });
  };

  return (
    <form className="addFeedback" onSubmit={handleSubmit}>
      <label>Customer Name :</label>
      <input
        type="text"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
      />
      {emptyFields.includes("customerName") && (
        <div className="error">*Please enter your name</div>
      )}

      <label>Customer Email :</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setCustomerEmail(e.target.value)}
        value={customerEmail}
      />
      {emptyFields.includes("customerEmail") && (
        <div className="error">*Please enter your email</div>
      )}
      {customerEmail &&
        !/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/.test(
          customerEmail
        ) && <div className="error">*Please enter valid email</div>}

      <label>Room ID :</label>
      <input
        type="text"
        onChange={(e) => setRoomId(e.target.value)}
        value={roomId}
      />
      {emptyFields.includes("roomId") && (
        <div className="error">*Please enter your Room ID</div>
      )}
      {roomId && !/^(L|S|N)/.test(roomId) && (
        <div className="error">*Room ID should start with "L, S or N"</div>
      )}

      <label>Feedback :</label>

      <input
        type="text"
        className="feedback"
        onChange={(e) => setFeedback(e.target.value)}
        value={feedbackBody}
      />
      {emptyFields.includes("feedbackBody") && (
        <div className="error">*Please enter feedback</div>
      )}

      <button>SUBMIT</button>
      <p>{error && <p className="error">{error}</p>}</p>
    </form>
  );
};

export default GetFeedbackForm;
