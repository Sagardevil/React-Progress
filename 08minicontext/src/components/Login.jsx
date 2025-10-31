import React, { useState, useContext, useTransition } from "react";
import UserContext from "../context/Usercontext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="uesrname"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"     "}
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login </button>
    </div>
  );
}

export default Login;
