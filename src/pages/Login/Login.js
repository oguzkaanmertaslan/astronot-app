import React, { useEffect, useState } from "react";
import image from "../../img/homepage.png";
import { getUser } from "../../components/services/services";
import { useHistory } from "react-router-dom";
import "./style.css";
const Login = () => {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const history = useHistory();
  const handleRegister = () => {
    history.push("/register");
  }
  const getAdmin = async () => {
    const response = await getUser();
    setUser(response);
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const handleLogin = () => {
    if (login.username.length >= 3 && login.password.length >= 3) {
      const userLogin = user.filter(user => {
        return user.username === login.username && user.password === login.password;
      });
      if (userLogin.length > 0) {
        localStorage.setItem("user", JSON.stringify(userLogin));
        history.push("/userprofile");
      } else {
        setAlert(true);
        setError(false);
      }
    }
    else {
      setError(true)
    }
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-area">
      <h1 className="login-header">Login or Sign-In</h1>
      <div className="input-area">
        {error && <p className="error-message">Please fill all the fields</p>}
        {alert && <p className="error-message">Username or Password is incorrect</p>}
        <div className="username-area">
          <label className="input-label">User Name</label>
          <input className="input-field" type="text" name="username" value={login.username} onChange={handleChange} />
        </div>
        <div className="password-area">
          <label className="input-label">Password</label>
          <input className="input-field" type="password" name="password" value={login.password} onChange={handleChange} />
        </div>
      </div>
      <img className="login-img" src={image} alt="bg" />
      <div className="login-btn-area">
        <button className="btn" onClick={handleLogin}>Login</button>
        <button className="btn" onClick={handleRegister}>Sign-In</button>
      </div>
    </div>
  );
};

export default Login;
