import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Update.scss";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const [action, setAction] = useState("");
  const [actionQuantity, setActionQuantity] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    foodName: "",
    type: "",
    quantity: "",
    unitPrice: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get(`/food/${id}`)
      .then((res) => {
        setValues({
          ...values,
          foodName: res.data.foodName,
          type: res.data.type,
          quantity: res.data.quantity,
          unitPrice: res.data.unitPrice,
          date: res.data.date,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const calculateNewQuantity = () => {
    const quantity = Number(values.quantity);
    const actionQuantityNum = Number(actionQuantity);
    let newQty;

    if (action === "added") {
      newQty = quantity + actionQuantityNum;
      //alert("Food items added. Updated quantity is " + newQty);
      Swal.fire(
        "Done!",
        "Food items added. Updated quantity is " + newQty,
        "success"
      );
      setNewQuantity(newQty);
    } else if (action === "consumed") {
      if (actionQuantityNum > quantity) {
        //alert("Action quantity cannot be greater than current quantity");
        Swal.fire(
          "Error!",
          "Action quantity cannot be greater than current quantity",
          "error"
        );
        return;
      }
      newQty = quantity - actionQuantityNum;
      //alert("Food items removed. Updated quantity is " + newQty);
      Swal.fire(
        "Done!",
        "Food items removed. Updated quantity is " + newQty,
        "success"
      );
      setNewQuantity(newQty);
    } else {
      newQty = quantity;
      setNewQuantity(newQty);
    }
    console.log(newQty);
    console.log(actionQuantity);
    console.log(quantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/food/${id}`, values)
      .then((res) => {
        setValues({ ...values, quantity: newQuantity });
      })
      .catch((err) => console.log(err));
  };

  const confirmUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`/food/${id}`, values)
      .then((res) => {
        navigate("/kitchen/foodStockDetails");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form className="create" onSubmit={handleSubmit}>
          <h3>Update Food</h3>

          <label> Food : </label>
          <input
            type="text"
            placeholder="Enter the food name"
            onChange={(e) => setValues({ ...values, foodName: e.target.value })}
            value={values.foodName}
          />

          <label> Type: </label>
          <input
            type="text"
            placeholder="Enter the food type"
            onChange={(e) => setValues({ ...values, type: e.target.value })}
            value={values.type}
          />

          <label> Action: </label>

          <select onChange={(e) => setAction(e.target.value)} value={action}>
            <option value="">--Please choose an option--</option>
            <option value="added">Added</option>
            <option value="consumed">Consumed</option>
          </select>

          <label> Action Quantity: </label>
          <input
            type="number"
            placeholder="Enter quantity"
            onChange={(e) => setActionQuantity(e.target.value)}
            value={actionQuantity}
          />

          {/* <label> Quantity: </label>
          <input
            type="number"
            placeholder="Enter quantity"
            onChange={(e) => setValues({ ...values, quantity: e.target.value })}
            value={values.quantity}
          /> */}

          <label> unitPrice: </label>
          <input
            type="number"
            placeholder="Enter unit price"
            onChange={(e) =>
              setValues({ ...values, unitPrice: e.target.value })
            }
            value={values.unitPrice}
          />

          <label> Date: </label>
          <input
            type="date"
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
            value={values.date}
          />

          <button onClick={calculateNewQuantity}>Update Food</button>
          <button onClick={confirmUpdate}>Submit</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Update;
