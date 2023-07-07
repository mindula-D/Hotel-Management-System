import { useState } from "react";
import React from "react";
import "./AddFoodCountForm.scss";

const AddFoodCountForm = () => {
  const [foodNameCount, setFoodNameCount] = useState("");
  const [typeCount, setTypeCount] = useState("");
  const [date, setDate] = useState("");
  const [availability, setAvailability] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!foodNameCount) {
      emptyFields.push("foodNameCount");
    }
    if (!typeCount) {
      emptyFields.push("typeCount");
    }
    if (!date) {
      emptyFields.push("date");
    }
    if (!availability) {
      emptyFields.push("availability");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      setError("Please fill in all fields");
      return;
    }

    const count = { foodNameCount, typeCount, date, availability };

    const response = await fetch("/foodCount", {
      method: "POST",
      body: JSON.stringify(count),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setFoodNameCount("");
      setTypeCount("");
      setDate("");
      setAvailability("");
      setError(null);
      setEmptyFields([]);
      console.log("New food added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Added or Consumed</h3>

      <label> Food : </label>
      {emptyFields.includes("foodNameCount") && (
        <div className="error">*Please enter a food name</div>
      )}
      <input
        type="text"
        placeholder="Enter the food name"
        onChange={(e) => setFoodNameCount(e.target.value)}
        value={foodNameCount}
      />

      <label> Type: </label>
      {emptyFields.includes("typeCount") && (
        <div className="error">*Please enter a type</div>
      )}
      <select onChange={(e) => setTypeCount(e.target.value)} value={typeCount}>
        <option value="">--Please choose an option--</option>
        <option value="added">Added</option>
        <option value="consumed">Consumed</option>
      </select>

      <label> Date: </label>
      {emptyFields.includes("date") && (
        <div className="error">*Please enter a quantity</div>
      )}
      <input
        type="date"
        max={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label> Availability: </label>
      {emptyFields.includes("availability") && (
        <div className="error">*Please enter a unit price</div>
      )}
      <input
        type="number"
        placeholder="Enter availability"
        onChange={(e) => setAvailability(e.target.value)}
        value={availability}
      />

      <button>Add Food</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddFoodCountForm;
