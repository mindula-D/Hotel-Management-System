import React from "react";
import { useState, useEffect } from "react";
import "./updateJobForm.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJobForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    jobTitle: "",
    employeeId: "",
    location: "",
    date: "",
    workingShift: "",
    jobDesc: "",
  });
  useEffect(() => {
    axios
      .get(`/jobs/${id}`)
      .then((res) => {
        setValues({
          ...values,
          jobTitle: res.data.jobTitle,
          employeeId: res.data.employeeId,
          location: res.data.location,
          date: res.data.date,
          workingShift: res.data.workingShift,
          jobDesc: res.data.jobDesc,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/jobs/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Job Updated Successfully!", "success");
        navigate("/housekeeping/viewDutyRoster");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>Job Title:</label>
      <input
        type="text"
        value={values.jobTitle}
        onChange={(e) => setValues({ ...values, jobTitle: e.target.value })}
        required
      />

      <label>Employee ID:</label>
      <input
        type="text"
        value={values.employeeId}
        onChange={(e) => setValues({ ...values, employeeId: e.target.value })}
        required
      />
      {values.employeeId && !/^HK/.test(values.employeeId) && (
        <div className="error">*Employee ID should start with "HK"</div>
      )}

      <label>Location:</label>
      <input
        type="text"
        value={values.location}
        onChange={(e) => setValues({ ...values, location: e.target.value })}
        required
      />
      {values.location && !/^(L|S|N)/.test(values.location) && (
        <div className="error">*Room ID should start with "L, S or N"</div>
      )}

      <label>Date:</label>
      <input
        type="date"
        value={values.date}
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        required
      />

      <label>Working Shift:</label>
      <select
        value={values.workingShift}
        onChange={(e) => setValues({ ...values, workingShift: e.target.value })}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
      </select>

      <label>Job Description:</label>
      <input
        type="text"
        value={values.jobDesc}
        onChange={(e) => setValues({ ...values, jobDesc: e.target.value })}
        required
      />

      <button type="submit">Update</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UpdateJobForm;
