import React from "react";
import Image from "../../img/HomepageBackgroundImage.svg";
import "./style.css";

const Homepage = () => {
  return (
    <div className="page-area">
      <h1 className="homepage-header">ASTRONOT APP</h1>
      <button className="homepage-button">SPACE SIMULATOR</button>
      <img src={Image} alt="bg" />
    </div>
  );
};

export default Homepage;
