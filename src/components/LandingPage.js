import React from "react";
import img1 from "./images/sacroLabs.jpg";
import "./LandingPage.css";

const LandingPage = ({ text, heading, buttonText }) => {
  return (
    <div className="container">
      <div className="flex-1">
        <h1>{heading}</h1>
        <p id="landingText">{text}</p>
      </div>
      <div className="flex-2">
        <img
          style={{ borderRadius: "20px" }}
          src={img1}
          height="250px"
          width="300px"
          alt=""
        />
        <br />
        <button
          style={{ margin: "18px", width: "160px", borderRadius: "40px" }}
          type="button"
          class="btn btn-primary"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
