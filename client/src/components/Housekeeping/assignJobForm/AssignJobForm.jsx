import React from "react";
import { useState } from "react";
import "./assignJobForm.scss";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const AssignJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [employeeId, setEmpId] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [workingShift, setWorkingShift] = useState("");
  const [jobDesc, setRemarks] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = [];
    if (!jobTitle) {
      emptyFields.push("jobTitle");
    }
    if (!employeeId) {
      emptyFields.push("employeeId");
    }
    if (!location) {
      emptyFields.push("location");
    }
    if (!date) {
      emptyFields.push("date");
    }
    if (!workingShift) {
      emptyFields.push("workingShift");
    }
    if (!jobDesc) {
      emptyFields.push("jobDesc");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      console.log(emptyFields);
      return;
    }

    const regExEID = /^HK/g;
    if (!regExEID.test(employeeId)) {
      Swal.fire("Invalid!", "Please enter valid Employee ID", "error");
      return;
    }

    const regExRID = /^(L|S|N)/g;
    if (!regExRID.test(location)) {
      Swal.fire("Invalid!", "Please enter valid Room ID", "error");
      return;
    }

    const job = { jobTitle, employeeId, location, date, workingShift, jobDesc };

    const response = await fetch("/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      if (response.status === 500) {
        Swal.fire("Error!", "This Employee ID is already exist!", "error");
      } else {
        setError(json.error);
      }
    }
    if (response.ok) {
      setJobTitle("");
      setEmpId("");
      setLocation("");
      setDate("");
      setWorkingShift("");
      setRemarks("");
      setError(null);
      console.log("new job added", json);
      Swal.fire("Done!", "Job Assigned Successfully!", "success");
      navigate("/housekeeping/viewDutyRoster");
    }
  };
  return (
    <form className="addJob" onSubmit={handleSubmit}>
      <label>Job Title :</label>
      <input
        type="text"
        onChange={(e) => setJobTitle(e.target.value)}
        value={jobTitle}
      />
      {emptyFields.includes("jobTitle") && (
        <div className="error">*Please enter Job Title</div>
      )}

      <label>Employee ID :</label>
      <input
        type="text"
        onChange={(e) => setEmpId(e.target.value)}
        value={employeeId}
      />
      {emptyFields.includes("employeeId") && (
        <div className="error">*Please enter Employee ID</div>
      )}
      {employeeId && !/^HK/.test(employeeId) && (
        <div className="error">*Employee ID should start with "HK"</div>
      )}

      <label>Room ID :</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      {emptyFields.includes("location") && (
        <div className="error">*Please enter Location</div>
      )}
      {location && !/^(L|S|N)/.test(location) && (
        <div className="error">*Room ID should start with "L, S or N"</div>
      )}

      <label>Date :</label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      {emptyFields.includes("date") && (
        <div className="error">*Please enter Date</div>
      )}

      <label>Working Shift :</label>
      <select
        onChange={(e) => setWorkingShift(e.target.value)}
        value={workingShift}
      >
        <option value="">--Please choose an option--</option>
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
      </select>
      {emptyFields.includes("workingShift") && (
        <div className="error">*Please enter Working Shift</div>
      )}

      <label>Remarks :</label>
      <input
        type="text"
        className="remark"
        onChange={(e) => {
          const value = e.target.value;
          if (value.length <= 40) {
            setRemarks(value);
          }
        }}
        value={jobDesc}
      />
      {emptyFields.includes("jobDesc") && (
        <div className="error">*Please enter Remark</div>
      )}

      <button>ASSIGN</button>
      <p>{error && <p className="error">{error}</p>}</p>
    </form>
  );
};

export default AssignJobForm;
