import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup , login } from "../../config/firebase";

function Login() {
  const [curr, setCurr] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    if (curr === "Sign Up") {
      signup(username, email, password);
    } else {
     login(email,password)
    }
  };
  
  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt="App Logo" />
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{curr}</h2>
        {curr === "Sign Up" && (
          <input
            type="text"
            placeholder="Username"
            required
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {curr === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="login-term">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree">Agree to the terms and conditions</label>
        </div>
        <div className="login-forgot">
          {curr === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurr("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account?{" "}
              <span onClick={() => setCurr("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
