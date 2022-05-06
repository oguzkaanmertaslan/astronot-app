import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../../img/HomepageBackgroundImage.svg";
import "./style.css";

const Homepage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <div className="page-area">
      <h1 className="homepage-header">ASTRONOT APP</h1>
      <button className="homepage-button" onClick={handleClick}>
        SPACE SIMULATOR
      </button>
      <img src={Image} alt="space" />
    </div>
  );
};

export default Homepage;
