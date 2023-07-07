import React, { useState } from "react";
import axios from "axios";
import "./addEmployeeForm.scss";

export default function AddEmployeesForm() {
  const [employeeID, setEmployeeID] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [salary, setSalary] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!employeeID) {
      errors.employeeID = "Employee ID is required";
    }
    if (!employeeName) {
      errors.employeeName = "Employee Name is required";
    }
    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!employeeTitle) {
      errors.employeeTitle = "Employee Title is required";
    }
    if (!salary) {
      errors.salary = "Salary is required";
    } else if (isNaN(salary)) {
      errors.salary = "Salary should be a number";
    }
    return errors;
  };

  function sendData(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }
    const newEmployee = {
      employeeID,
      employeeName,
      dateOfBirth,
      gender,
      phoneNumber,
      address,
      employeeTitle,
      salary,
    };
    axios
      .post("/employee/add", newEmployee)
      .then(() => {
        alert("Employee Added");
        setEmployeeID("");
        setEmployeeName("");
        setDateOfBirth("");
        setGender("");
        setPhoneNumber("");
        setAddress("");
        setEmployeeTitle("");
        setSalary("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form className="createEM" onSubmit={sendData}>
      <label>Employee ID</label>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setEmployeeID(e.target.value);
          }}
          value={employeeID}
        />
        {errors.employeeID && (
          <span className="error">{errors.employeeID}</span>
        )}
      </div>

      <label>Employee Name</label>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setEmployeeName(e.target.value);
          }}
          value={employeeName}
        />
        {errors.employeeName && (
          <span className="error">{errors.employeeName}</span>
        )}
      </div>

      <label>Date of Birth</label>

      <div>
        <input
          type="date"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
          value={dateOfBirth}
        />
        {errors.dateOfBirth && (
          <span className="error">{errors.dateOfBirth}</span>
        )}
      </div>

      <label>Gender</label>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          value={gender}
        />
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <label>Phone Number</label>

      <div>
        <input
          type="number"
          maxLength="10"
          minLength="10"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          value={phoneNumber}
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>

      <label>Address</label>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>

      <label>Employee Title</label>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setEmployeeTitle(e.target.value);
          }}
          value={employeeTitle}
        />
        {errors.employeeTitle && (
          <span className="error">{errors.employeeTitle}</span>
        )}
      </div>

      <label>Salary</label>

      <div>
        <input
          type="number"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          value={salary}
        />
        {errors.salary && <span className="error">{errors.salary}</span>}
      </div>

      <div>
        <button>Add Employee</button>
      </div>
    </form>
  );
}
