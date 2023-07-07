import React, { useState } from "react";
import axios from "axios";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    console.log("amo amo");
    const credentials = {
      userName,
      password,
    };

    await axios
      .post("/login", credentials)
      .then((response) => {
        if (response.data.userName === "housekeeping") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Welcome back! Mindula",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/housekeeping/assignJob");
        } else if (response.data.userName === "kitchen") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Welcome back! Dilshika",
                showConfirmButton: false,
                timer: 2000,
              });
          navigate("/kitchen/addFood");
        }
      })
      .catch((error) => {
        Swal.fire("Error!", "Incorrect Username or Password!", "error");
      });
  };

  return (
    <form className="login-form">
      <h1>HOTEL SILVER SANDS</h1>
      <h2>LOGIN</h2>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={onLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;