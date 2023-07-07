import React from "react";
import { useState } from "react";
import "./UpdateStaffDriverForm.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateStaffDriver = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    StaffDriverID: "",
    StaffDriverFirstName: "",
    StaffDriverLastName: "",
    TelephoneNumber: "",
    StartingPoint: "",
    StartingTime: "",
    ArrivalTime: "",
    DepartureTime: "",
    Vehicle: "",
    StaffVehicleNumber: "",
    StaffTotalSeats: "",
    StaffDriverNIC: "",
    StaffDriverLicenceIssue: "",
    StaffDriverLicenceExpire: "",
  });

  useEffect(() => {
    axios
      .get(`/staff/${id}`)
      .then((res) => {
        setValues({
          ...values,
          StaffDriverID: res.data.StaffDriverID,
          StaffDriverFirstName: res.data.StaffDriverFirstName,
          StaffDriverLastName: res.data.StaffDriverLastName,
          TelephoneNumber: res.data.TelephoneNumber,
          StartingPoint: res.data.StartingPoint,
          StartingTime: res.data.StartingTime,
          ArrivalTime: res.data.ArrivalTime,
          DepartureTime: res.data.DepartureTime,
          Vehicle: res.data.Vehicle,
          StaffVehicleNumber: res.data.StaffVehicleNumber,
          StaffTotalSeats: res.data.StaffTotalSeats,
          StaffDriverNIC: res.data.StaffDriverNIC,
          StaffDriverLicenceIssue: res.data.StaffDriverLicenceIssue,
          StaffDriverLicenceExpire: res.data.StaffDriverLicenceExpire,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/staff/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Driver Details Updated Successfully!", "success");
        navigate("/transportation/driverProfilesStaff");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="createTP" onSubmit={handleUpdate}>
      <h3> UPDATE CURRENT DRIVER </h3>

      <label> Driver ID </label>
      <input
        type="text"
        unique="true"
        placeholder="Enter Driver ID (Ex: SDID_001) "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverID: e.target.value })
        }
        value={values.StaffDriverID}
      />

      <label> Driver First Name </label>
      <input
        type="text"
        placeholder="Enter First Name "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverFirstName: e.target.value })
        }
        value={values.StaffDriverFirstName}
      />
      <label> Driver Last Name </label>
      <input
        type="text"
        placeholder="Enter Last Name "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverLastName: e.target.value })
        }
        value={values.StaffDriverLastName}
      />
      <label> Contact Number </label>
      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) =>
          setValues({ ...values, TelephoneNumber: e.target.value })
        }
        value={values.TelephoneNumber}
      />

      <label> Starting Point </label>
      <input
        type="text"
        placeholder="Enter Starting Point "
        required
        onChange={(e) =>
          setValues({ ...values, StartingPoint: e.target.value })
        }
        value={values.StartingPoint}
      />
      <label> Starting Time </label>
      <input
        type="time"
        placeholder="Enter Starting Time"
        required
        onChange={(e) => setValues({ ...values, StartingTime: e.target.value })}
        value={values.StartingTime}
      />
      <label>Arrival Time </label>
      <input
        type="time"
        placeholder=" Enter Arrival Time"
        required
        onChange={(e) => setValues({ ...values, ArrivalTime: e.target.value })}
        value={values.ArrivalTime}
      />

      <label> Departure Time </label>

      <input
        type="time"
        placeholder=" Enter Departure Time"
        required
        onChange={(e) =>
          setValues({ ...values, DepartureTime: e.target.value })
        }
        value={values.DepartureTime}
      />

      <label> Vehicle </label>

      <input
        type="text"
        placeholder=" Enter Vehicle "
        required
        onChange={(e) => setValues({ ...values, Vehicle: e.target.value })}
        value={values.Vehicle}
      />

      <label> Vehicle Number </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Number "
        required
        onChange={(e) =>
          setValues({ ...values, StaffVehicleNumber: e.target.value })
        }
        value={values.StaffVehicleNumber}
      />

      <label> Total Seats </label>

      <input
        type="number"
        placeholder=" Enter Total Seats"
        required
        onChange={(e) =>
          setValues({ ...values, StaffTotalSeats: e.target.value })
        }
        value={values.StaffTotalSeats}
      />

      <label> Driver Info (NIC) </label>
      <input
        type="text"
        placeholder="Enter NIC "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverNIC: e.target.value })
        }
        value={values.StaffDriverNIC}
      />

      <label> Driver Info (Licence Issue Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Issue Date "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverLicenceIssue: e.target.value })
        }
        value={values.StaffDriverLicenceIssue}
      />

      <label> Driver Info (Licence Expiry Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Expiry Date "
        required
        onChange={(e) =>
          setValues({ ...values, StaffDriverLicenceExpire: e.target.value })
        }
        value={values.StaffDriverLicenceExpire}
      />

      <button> UPDATE DRIVER </button>
    </form>
  );
};

export default UpdateStaffDriver;
