import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login(username, password) {
    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    }

    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => {
        data.map(item => {
          if (item.username == username && item.password == password) {
            console.log("Worked");
            item.isActive = true;
            navigate("/");
          }
        });
      });
    setPassword("");
    setUsername("");
  }

  return (
    <div className="register">
      <h2>Log In</h2>

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

      <Button variant="contained" onClick={() => login(username, password)}>
        Log In
      </Button>
      <br />

      <a href="#" onClick={() => alert("лол вспоминай")}>
        Забыл пароль?
      </a>
    </div>
  );
};

export default LoginPage;
