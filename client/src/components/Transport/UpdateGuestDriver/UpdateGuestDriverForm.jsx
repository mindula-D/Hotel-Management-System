import React from "react";
import { useState } from "react";
import "./UpdateGuestDriverForm.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateGuestDriver = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    DriverID: "",
    DriverFirstName: "",
    DriverLastName: "",
    DriverAge: "",
    ContactNumber: "",
    DriverEmail: "",
    VehicleManufacture: "",
    VehicleModel: "",
    VehicleNumber: "",
    TotalSeats: "",
    Category: "",
    GuestDriverNIC: "",
    GuestDriverLicenceIssue: "",
    GuestDriverLicenceExpire: "",
  });

  useEffect(() => {
    axios
      .get(`/driver/${id}`)
      .then((res) => {
        setValues({
          ...values,
          DriverID: res.data.DriverID,
          DriverFirstName: res.data.DriverFirstName,
          DriverLastName: res.data.DriverLastName,
          DriverAge: res.data.DriverAge,
          ContactNumber: res.data.ContactNumber,
          DriverEmail: res.data.DriverEmail,
          VehicleManufacture: res.data.VehicleManufacture,
          VehicleModel: res.data.VehicleModel,
          VehicleNumber: res.data.VehicleNumber,
          TotalSeats: res.data.TotalSeats,
          Category: res.data.Category,
          GuestDriverNIC: res.data.GuestDriverNIC,
          GuestDriverLicenceIssue: res.data.GuestDriverLicenceIssue,
          GuestDriverLicenceExpire: res.data.GuestDriverLicenceExpire,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/driver/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Driver Details Updated Successfully!", "success");
        navigate("/transportation/driverProfiles");
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
        placeholder="Enter Driver ID (Ex: GDID_001) "
        required
        onChange={(e) => setValues({ ...values, DriverID: e.target.value })}
        value={values.DriverID}
      />

      <label> Driver First Name </label>
      <input
        type="text"
        placeholder="Enter First Name "
        required
        onChange={(e) =>
          setValues({ ...values, DriverFirstName: e.target.value })
        }
        value={values.DriverFirstName}
      />
      <label> Driver Last Name </label>
      <input
        type="text"
        placeholder="Enter Last Name "
        required
        onChange={(e) =>
          setValues({ ...values, DriverLastName: e.target.value })
        }
        value={values.DriverLastName}
      />
      <label> Driver Age </label>
      <input
        type="number"
        placeholder="Enter Age "
        required
        onChange={(e) => setValues({ ...values, DriverAge: e.target.value })}
        value={values.DriverAge}
      />

      <label> Contact Number </label>
      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) =>
          setValues({ ...values, ContactNumber: e.target.value })
        }
        value={values.ContactNumber}
      />
      <label> Driver Email </label>
      <input
        type="email"
        placeholder="Enter a Valid Email Address"
        required
        onChange={(e) => setValues({ ...values, DriverEmail: e.target.value })}
        value={values.DriverEmail}
      />
      <label>Vehicle Manufacture </label>
      <input
        type="text"
        placeholder=" Enter Vehicle Manufacturer"
        required
        onChange={(e) =>
          setValues({ ...values, VehicleManufacture: e.target.value })
        }
        value={values.VehicleManufacture}
      />

      <label> Vehicle Model </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Model"
        required
        onChange={(e) => setValues({ ...values, VehicleModel: e.target.value })}
        value={values.VehicleModel}
      />

      <label> Vehicle Number </label>

      <input
        type="text"
        placeholder=" Enter Vehicle Number"
        required
        onChange={(e) =>
          setValues({ ...values, VehicleNumber: e.target.value })
        }
        value={values.VehicleNumber}
      />

      <label> Total Seats </label>

      <input
        type="number"
        placeholder=" Enter Total Seats"
        required
        onChange={(e) => setValues({ ...values, TotalSeats: e.target.value })}
        value={values.TotalSeats}
      />

      <label>Category </label>

      <select
        onChange={(e) => setValues({ ...values, Category: e.target.value })}
        value={values.Category}
      >
        <option value="Basic-Transit">Basic-Transit</option>
        <option value="Comfort-Cruiser">Comfort-Cruiser</option>
        <option value="Luxury-Liner">Luxury-Liner</option>
      </select>

      <label> Driver Info (NIC) </label>
      <input
        type="text"
        placeholder="Enter NIC "
        required
        onChange={(e) =>
          setValues({ ...values, GuestDriverNIC: e.target.value })
        }
        value={values.GuestDriverNIC}
      />

      <label> Driver Info (Licence Issue Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Issue Date "
        required
        onChange={(e) =>
          setValues({ ...values, GuestDriverLicenceIssue: e.target.value })
        }
        value={values.GuestDriverLicenceIssue}
      />

      <label> Driver Info (Licence Expiry Date) </label>
      <input
        type="date"
        placeholder="Enter Driving Licence Expiry Date "
        required
        onChange={(e) =>
          setValues({ ...values, GuestDriverLicenceExpire: e.target.value })
        }
        value={values.GuestDriverLicenceExpire}
      />

      <button> UPDATE DRIVER </button>
    </form>
  );
};

export default UpdateGuestDriver;
