import React from "react";
import "./styles/Navigationbar.css";

const handleInput = event => {
  alert("Clicked");
};

const filter = props => (
  <div className="maxMin">
    <input
      className="filterInput"
      type={props.type}
      label="Filter"
      placeholder="Min"
    />
    <label> -</label>
    <input
      className="filterInput"
      type={props.type}
      label="Filter"
      placeholder="Max"
    />
    <button onClick={handleInput} className="button2">
      Go
    </button>
  </div>
);

export default filter;
