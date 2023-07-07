import React from "react";
import { useState } from "react";
import "./UpdateTripForm.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateTrip = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    TripID: "",
    RequesterID: "",
    RequesterName: "",
    RequesterContactNumber: "",
    NoOfPassengers: "",
    TripDate: "",
    PickUpTime: "",
    PickUpLocation: "",
    DropOffLocation: "",
    TripPackageType: "",
    TotalDistance: "",
    TripDriverID: "",
    TotalFee: "",
  });

  useEffect(() => {
    axios
      .get(`/trip/${id}`)
      .then((res) => {
        setValues({
          ...values,
          TripID: res.data.TripID,
          RequesterID: res.data.RequesterID,
          RequesterName: res.data.RequesterName,
          RequesterContactNumber: res.data.RequesterContactNumber,
          NoOfPassengers: res.data.NoOfPassengers,
          TripDate: res.data.TripDate,
          PickUpTime: res.data.PickUpTime,
          PickUpLocation: res.data.PickUpLocation,
          DropOffLocation: res.data.DropOffLocation,
          TripPackageType: res.data.TripPackageType,
          TotalDistance: res.data.TotalDistance,
          TripDriverID: res.data.TripDriverID,
          TotalFee: res.data.TotalFee,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/trip/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Trip Details Updated Successfully!", "success");
        navigate("/transportation/generateReport");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="createTP" onSubmit={handleUpdate}>
      <h3> UPDATE CURRENT TRIP </h3>

      <label> Trip ID </label>

      <input
        type="text"
        unique="true"
        placeholder="Enter Trip ID (Ex: TID_001) "
        required
        onChange={(e) => setValues({ ...values, TripID: e.target.value })}
        value={values.TripID}
      />

      <label> Requester ID </label>

      <input
        type="text"
        placeholder="Enter Requester ID (Ex: GID_001) "
        required
        onChange={(e) => setValues({ ...values, RequesterID: e.target.value })}
        value={values.RequesterID}
      />

      <label> Requester Name </label>

      <input
        type="text"
        placeholder="Enter Requester Name "
        required
        onChange={(e) =>
          setValues({ ...values, RequesterName: e.target.value })
        }
        value={values.RequesterName}
      />

      <label> Requester Contact Number </label>

      <input
        type="tel"
        minlength="10"
        maxlength="10"
        placeholder="Enter Requester Contact Number (Max/Min - 10 Digits) "
        required
        onChange={(e) =>
          setValues({ ...values, RequesterContactNumber: e.target.value })
        }
        value={values.RequesterContactNumber}
      />

      <label> Passenger Count </label>

      <input
        type="number"
        placeholder="Enter Passenger Count "
        required
        onChange={(e) =>
          setValues({ ...values, NoOfPassengers: e.target.value })
        }
        value={values.NoOfPassengers}
      />

      <label> Trip Date </label>

      <input
        type="date"
        placeholder="Select Trip Date"
        required
        onChange={(e) => setValues({ ...values, TripDate: e.target.value })}
        value={values.TripDate}
      />

      <label>Pick-Up Time </label>

      <input
        type="time"
        placeholder=" Enter Pick-Up Time"
        required
        onChange={(e) => setValues({ ...values, PickUpTime: e.target.value })}
        value={values.PickUpTime}
      />

      <label> Pick-Up Location </label>

      <input
        type="text"
        placeholder=" Enter Pick-Up Location"
        required
        onChange={(e) =>
          setValues({ ...values, PickUpLocation: e.target.value })
        }
        value={values.PickUpLocation}
      />

      <label> Drop-Off Location </label>

      <input
        type="text"
        placeholder=" Enter Drop-Off Location "
        required
        onChange={(e) =>
          setValues({ ...values, DropOffLocation: e.target.value })
        }
        value={values.DropOffLocation}
      />

      <label>Package Type </label>

      <select
        onChange={(e) =>
          setValues({ ...values, TripPackageType: e.target.value })
        }
        value={values.TripPackageType}
      >
        <option value="Basic-Transit">Basic-Transit </option>
        <option value="Comfort-Cruiser">Comfort-Cruiser</option>
        <option value="Luxury-Liner">Luxury-Liner</option>
      </select>

      <label> Total Distance In km </label>

      <input
        type="number"
        placeholder=" Enter Total Distance Only for One Way (In km) "
        required
        onChange={(e) =>
          setValues({ ...values, TotalDistance: e.target.value })
        }
        value={values.TotalDistance}
      />

      <label> Driver ID </label>

      <input
        type="text"
        placeholder=" Enter Driver ID"
        required
        onChange={(e) => setValues({ ...values, TripDriverID: e.target.value })}
        value={values.TripDriverID}
      />

      <label> Total Fee In Rs. </label>

      <input
        type="number"
        placeholder=" Enter Total Fee (In Rs.)     |   Fee Per 1km : BT - 80 / CC - 100 / LL - 150  "
        required
        onChange={(e) => setValues({ ...values, TotalFee: e.target.value })}
        value={values.TotalFee}
      />

      <button> UPDATE TRIP </button>
    </form>
  );
};

export default UpdateTrip;
