import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./update.scss";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    customer_name: "",
    date: "",
    timeSlot: "",
    total_count: "",
    email: "",
    address: "",
    phone_number: "",
    function_type: "",
    hall_type: "",
    fee_based_Activities: "",
    plate_type: "",
    additional_charges: "",
    totalSalary: "",
  });

  useEffect(() => {
    axios
      .get(`/event/${id}`)
      .then((res) => {
        setValues({
          ...values,
          customer_name: res.data.customer_name,
          date: res.data.date,
          timeSlot: res.data.timeSlot,
          total_count: res.data.total_count,
          email: res.data.email,
          address: res.data.address,
          phone_number: res.data.phone_number,
          function_type: res.data.function_type,
          hall_type: res.data.hall_type,
          fee_based_Activities: res.data.fee_based_Activities,
          plate_type: res.data.plate_type,
          additional_charges: res.data.additional_charges,
          totalSalary: res.data.totalSalary,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/event/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/event/recordTable");
      })
      .catch((err) => console.log(err));
  };
  const calculateSalary = () => {
    const totalSalary =
      values.total_count * values.plate_type +
      parseInt(values.fee_based_Activities) +
      parseInt(values.additional_charges);
    setValues({ ...values, totalSalary: totalSalary.toString() });
  };

  return (
    <form className="update" onSubmit={handleUpdate}>
      <h3>UPDATE NEW EVENT</h3>

      <label>Customer Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        required
        onChange={(e) =>
          setValues({ ...values, customer_name: e.target.value })
        }
        value={values.customer_name}
      />

      <label>Date</label>
      <input
        type="date"
        placeholder="Enter Date"
        required
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        value={values.date}
      />

      <label>Time Slot</label>
      <select
        onChange={(e) => setValues({ ...values, timeSlot: e.target.value })}
        value={values.timeSlot}
      >
        <option value="Morning">Morning</option>
        <option value="Night">Night</option>
      </select>

      <label>Total Count</label>
      <input
        type="number"
        placeholder="Enter Count"
        required
        onChange={(e) => setValues({ ...values, total_count: e.target.value })}
        value={values.total_count}
      />

      <label>Email</label>
      <input
        type="email"
        unique="true"
        placeholder="Enter Email"
        required
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />

      <label>Address</label>
      <input
        type="text"
        placeholder="Enter Address"
        required
        onChange={(e) => setValues({ ...values, address: e.target.value })}
        value={values.address}
      />

      <label>Contact Number</label>
      <input
        type="tel"
        minLength="10"
        maxlength="10"
        placeholder=" Enter Contact Number"
        required
        onChange={(e) => setValues({ ...values, phone_number: e.target.value })}
        value={values.phone_number}
      />

      <label>Function Type </label>
      <select
        onChange={(e) =>
          setValues({ ...values, function_type: e.target.value })
        }
        value={values.function_type}
      >
        <option>SELECT ONE</option>
        <option value="BirthDay">BirthDay</option>
        <option value="Get-togethe">Get-together</option>
        <option value="Wedding">Wedding</option>
        <option value="Other">Other</option>
      </select>

      <label> Hall Type </label>

      <select
        onChange={(e) => setValues({ ...values, hall_type: e.target.value })}
        value={values.hall_type}
      >
        <option value="Hall A">Hall A</option>
        <option value="Hall B">Hall B</option>
        <option value="Hall C">Hall C</option>
        <option value="OutDoor">OutDoor</option>
      </select>

      <label> Fee-Based Activities </label>

      <input
        type="Number"
        onChange={(e) =>
          setValues({ ...values, fee_based_Activities: e.target.value })
        }
        value={values.fee_based_Activities}
      />

      <label>Plate Type</label>

      <select
        onChange={(e) => setValues({ ...values, plate_type: e.target.value })}
        value={values.plate_type}
      >
        <option value="6000">PLATINUM: 6000.00</option>
        <option value="5500">GOLD: 5500.00</option>
        <option value="4000">SILVER: 4000.00</option>
        <option value="3000">BRONZE: 3000.00</option>
      </select>

      <label>Additional Charges</label>

      <select
        onChange={(e) =>
          setValues({ ...values, additional_charges: e.target.value })
        }
        value={values.additional_charges}
      >
        <option value="30000">Hall A:30000.00</option>
        <option value="25000">Hall B:25000.00</option>
        <option value="20000">Hall C:20000.00</option>
        <option value="10000">OutDoor:10000.00</option>
      </select>

      <label>Total Salary</label>
      <input
        type="number"
        onChange={(e) => setValues({ ...values, totalSalary: e.target.value })}
        value={values.totalSalary}
      />

      <div>
        {
          <button type="button" onClick={calculateSalary}>
            Calculate Total
          </button>
        }

        <button>Update</button>
      </div>
    </form>
  );
};

export default Update;
