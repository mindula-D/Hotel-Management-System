import { useState } from "react";
import React from "react";
import "./AddFoodForm.scss";
import Swal from "sweetalert2";

const AddFoodForm = () => {
  const [foodName, setFoodName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  //REGEND
  const nameRegex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
  const typeRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  const quantityRegex = /^\d+$/;
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  const dataRegex = /^\d{4}-\d{2}-\d{2}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!foodName) {
      emptyFields.push("foodName");
    }
    if (!type) {
      emptyFields.push("type");
    }
    if (!quantity) {
      emptyFields.push("quantity");
    }
    if (!unitPrice) {
      emptyFields.push("unitPrice");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      setError("Please fill in all fields");
      return;
    }

    //REGEND
    // Check for valid inputs
    if (!foodName.match(nameRegex)) {
      setEmptyFields(["foodName"]);
      setError("Invalid food name format. Only letters, spaces are allowed.");
      return;
    }
    if (!type.match(typeRegex)) {
      setEmptyFields(["type"]);
      setError("Invalid type format. Only letters and spaces are allowed.");
      return;
    }
    if (!quantity.match(quantityRegex)) {
      setEmptyFields(["quantity"]);
      setError("Invalid quantity format.");
      return;
    }
    if (!unitPrice.match(priceRegex)) {
      setEmptyFields(["unitPrice"]);
      setError(
        "Invalid unit price format. Only positive decimal numbers with up to 2 decimal places are allowed."
      );
      return;
    }

    if (!date.match(dataRegex)) {
      setEmptyFields(["date"]);
      setError("Please fill the date field");
      return;
    }
    //

    const stock = { foodName, type, quantity, unitPrice, date };

    const response = await fetch("/food", {
      method: "POST",
      body: JSON.stringify(stock),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // if (!response.ok) {
    //   setError(json.error);
    // }

    if (!response.ok) {
      if (response.status === 500) {
        setError("Food name is already exist");
      } else {
        setError(json.error);
      }
    } else {
      setFoodName("");
      setType("");
      setQuantity("");
      setUnitPrice("");
      setDate("");
      setError(null);
      setEmptyFields([]);
      console.log("New food added", json);
      Swal.fire("Done!", "Food item added successfully!.", "success");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new food</h3>

      <label> Food : </label>
      {emptyFields.includes("foodName") && (
        <div className="error">*Please enter a food name</div>
      )}
      <input
        type="text"
        minLength="1"
        maxLength="15"
        placeholder="Enter the food name"
        onChange={(e) => setFoodName(e.target.value)}
        value={foodName}
        //REGEND
        pattern="[A-Za-z\s]+"
        required
        //
      />

      <label> Type: </label>
      {emptyFields.includes("type") && (
        <div className="error">*Please enter a type</div>
      )}
      <input
        type="text"
        minLength="1"
        maxLength="15"
        placeholder="Enter the food type"
        onChange={(e) => setType(e.target.value)}
        value={type}
        //REGEND
        pattern="[A-Za-z\s]+"
        required
        //
      />

      <label> Quantity: </label>
      {emptyFields.includes("quantity") && (
        <div className="error">*Please enter a quantity</div>
      )}

      <input
        type="number"
        minLength="1"
        maxLength="3"
        //pattern="[0-3]{3}"
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        //REGEND
        min="1"
        step="1"
        required
        //
      />
      {/* <input
        type="tel"
        minLength="1"
        maxLength="3"
        //pattern="[0-3]{3}"
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}

        //REGEND
        
        step="1"
        required
        //
      /> */}

      <label> unitPrice: </label>
      {emptyFields.includes("unitPrice") && (
        <div className="error">*Please enter a unit price</div>
      )}
      <input
        type="number"
        minLength="1"
        maxLength="4"
        placeholder="Enter unit price"
        onChange={(e) => setUnitPrice(e.target.value)}
        value={unitPrice}
        //tolimit  //if i put tel i can add letters and numbers and maxlength works but if i
        //add number max length doesnt work but can add letters. in text can add numbers and letters and maxlength works
        //REGEND
        min="1"
        step="1"
        required
      />

      <label> Date: </label>
      {emptyFields.includes("date") && (
        <div className="error">*Please enter a valid date</div>
      )}
      <input
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button>Add Food</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddFoodForm;
