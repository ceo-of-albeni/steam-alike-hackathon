import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/RegistrationPage.css";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const API = "http://localhost:8000/users";

  const addUser = async newUser => {
    await axios.post(API, newUser);
  };

  function checkUniq() {}

  function createUser() {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    }

    let newUser = {
      username,
      password,
      isActive: false,
    };

    addUser(newUser);

    setUsername("");
    setPassword("");

    navigate("/login");
  }

  return (
    <div className="register">
      <h2>Registration</h2>
      <TextField
        id="filled-basic"
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        variant="filled"
      />
      <br />
      <TextField
        id="filled-basic"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        variant="filled"
      />
      <br />

      <Button variant="contained" onClick={createUser}>
        Sign In
      </Button>
    </div>
  );
};

export default RegistrationPage;
