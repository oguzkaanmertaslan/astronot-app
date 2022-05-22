import React from "react";
import image from "../../img/homepage.png";
import { useHistory } from "react-router-dom";
import "./style.css";
const Login = () => {
  const history=useHistory();
  const handleRegister=()=>{
    history.push("/register");
  }
  return (
    <div className="login-area">
      <h1 className="login-header">Login or Register</h1>
      <div className="input-area">
        <div className="username-area">
          <label className="input-label">User Name</label>
          <input className="input-field" type="text" />
        </div>
        <div className="password-area">
          <label className="input-label">Password</label>
          <input className="input-field" type="password" />
        </div>
      </div>
      <img className="login-img" src={image} alt="bg" />
      <div className="login-btn-area">
        <button className="btn">Login</button>
        <button className="btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Login;
