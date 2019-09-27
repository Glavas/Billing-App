import React from "react";
import "./styles/Image.css";
import Background from "../assets/images/background-contentContainer.jpg";

const image = props => (
  <React.Fragment>
    <img
      className="main-pic"
      src={Background}
      alt="broken"
      title="title-picture"
    ></img>
  </React.Fragment>
);

export default image;
