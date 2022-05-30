import React, { useEffect, useState } from "react";
import image from "../../img/homepage.png";
import { getUser } from "../../components/services/services";
import { useHistory } from "react-router-dom";
import "./style.css";
const Login = () => {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
    const userLogin = user.filter(user => {
      return user.username === username && user.password === password;
    });
    if (userLogin.length > 0) {
      localStorage.setItem("user", JSON.stringify(userLogin));
      history.push("/userprofile");
    } else {
      alert("Username or password is incorrect");
    }

  };

  return (
    <div className="login-area">
      <h1 className="login-header">Login or Sign-In</h1>
      <div className="input-area">
        <div className="username-area">
          <label className="input-label">User Name</label>
          <input className="input-field" type="text" onChange={(e) => setUsername(e.target.value)
          } />
        </div>
        <div className="password-area">
          <label className="input-label">Password</label>
          <input className="input-field" type="password" onChange={(e) => setPassword(e.target.value)} />
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
