import React, { useState } from "react";
import "./salaryForm.scss";
import axios from "axios";

export default function SalaryForm() {
  const [employeeid, setEmpId] = useState("");
  const [basicSalary, setBasicsalary] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const [overtime, setOt] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  const calculateSalary = () => {
    const totalSalary =
      allowance +
      basicSalary +
      overtime * 0.1 * basicSalary -
      (basicSalary / 30) * (30 - attendance);
    //(overtime * 1.5 * basicSalary / 30 * attendance);
    setTotalSalary(totalSalary);
  };

  function sendData(e) {
    e.preventDefault();

    const newSalary = {
      employeeid,
      basicSalary,
      allowance,
      overtime,
      attendance,
      totalSalary,
    };
    axios
      .post("/salary/added", newSalary)
      .then(() => {
        alert("Salary Added");
        setEmpId("");
        setBasicsalary(0);
        setAllowance(0);
        setOt(0);
        setAttendance(0);
        setTotalSalary(0);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form className="createEM" onSubmit={sendData}>
      <label>Employee ID</label>
      <input
        type="text"
        onChange={(e) => setEmpId(e.target.value)}
        value={employeeid}
      />
      <label>Basic Salary</label>
      <input
        type="number"
        onChange={(e) => setBasicsalary(parseFloat(e.target.value))}
        value={basicSalary}
      />
      <label>Allowance</label>
      <input
        type="number"
        onChange={(e) => setAllowance(parseFloat(e.target.value))}
        value={allowance}
      />
      <label>OT</label>
      <input
        type="number"
        onChange={(e) => setOt(parseFloat(e.target.value))}
        value={overtime}
      />
      <label>Attendance</label>
      <input
        type="number"
        onChange={(e) => setAttendance(parseFloat(e.target.value))}
        value={attendance}
      />
      <label>Total Salary</label>
      <input
        type="number"
        onChange={(e) => setTotalSalary(parseFloat(e.target.value))}
        value={totalSalary}
      />
      <div>
        <button type="button" onClick={calculateSalary}>
          Calculate Salary
        </button>
        <div>
          <div>
            <button className="addbutton">Add</button>
          </div>
        </div>
      </div>

      <div></div>
    </form>
  );
}
