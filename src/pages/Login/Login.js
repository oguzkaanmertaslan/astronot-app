import React from "react";
import image from "../../img/homepage.png";
import "./style.css";
const Login = () => {
  return (
    <div className="login-area">
      <div className="input-area">
        <label className="input-label">User Name</label>
        <input></input>
        <label className="input-label">Password</label>
        <input></input>
      </div>
      <img className="login-img" src={image} alt="bg" />
    </div>
  );
};

export default Login;
