import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./updateEmployees.scss";
import Swal from "sweetalert2";

const UpdateEmployees = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    employeeID: '',
    employeeName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    address: '',
    employeeTitle: '',
    salary: ''   
  });
   useEffect(() => {
    axios
      .get(`/employee/get/${id}`)
      .then((res) => {
        setValues({
          ...values,
          employeeID: res.data.employeeID,
          employeeName: res.data.employeeName,
          dateOfBirth: res.data.dateOfBirth,
          gender: res.data.gender,
          phoneNumber: res.data.phoneNumber,
          address: res.data.address,
          employeeTitle: res.data.employeeTitle,
          salary: res.data.salary,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);
  const navigate = useNavigate();
  const handleUpdate = (e) =>{
    e.preventDefault();
    axios
      .put(`/employee/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Employee Updated Successfully!", "success");
        navigate("/employees/viewEmployees");
      })
      .catch((err) => console.log(err));
  };
 
  return (
    <form className="create" onSubmit={handleUpdate}>
      <h3>UPDATE NEW EMPLOYEE</h3>

      <label>Employee ID</label>
      <input
        type="text"
        placeholder="Enter ID"
        required
        onChange={(e) => setValues({ ...values, employeeID: e.target.value })}
        value={values.employeeID}
      />

      <label>Employee Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        required
        onChange={(e) => setValues({ ...values, employeeName: e.target.value })}
        value={values.employeeName}
      />
       <label>Date of Birth</label>
      <input
        type="date"
        placeholder="Enter Date"
        required
        onChange={(e) => setValues({ ...values, dateOfBirth: e.target.value })}
        value={values.dateOfBirth}
      />

      <label>Gender</label>
      <input
        type="text"
        placeholder="Enter Gender"
        required
        onChange={(e) => setValues({ ...values, gender: e.target.value })}
        value={values.gender}
      />

  <label>Phone Number</label>
      <input
        type="phone"
        minLength="10"
        maxlength="10"
        placeholder=' Enter Phone Number' required
        onChange={(e) => setValues({ ...values,phoneNumber: e.target.value })}
        value={values.phoneNumber}
     />

    <label>Address</label>
      <input
        type="text"
        placeholder="Enter Address"
        required
        onChange={(e) => setValues({ ...values,  address: e.target.value })}
        value={values.address}
      />
     <label>Employee Title</label>
      <input
        type="text"
        placeholder="Enter Employee Title"
        required
        onChange={(e) => setValues({ ...values, employeeTitle: e.target.value })}
        value={values.employeeTitle}
      />

    <label>Salary</label>
      <input
        type="text"
        placeholder="Enter Salary"
        required
        onChange={(e) => setValues({ ...values, salary: e.target.value })}
        value={values.salary}
      />

    
    <button type="submit">Update</button>
    {error && <p className="error">{error}</p>}
    
    </form>
    
    
     )
    
 }

 export default UpdateEmployees;