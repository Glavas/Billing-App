import React from "react";
import "../styles/Contracts.css";
import "../styles/Home.css";

const CategoryData = props => {
  return (
    <React.Fragment>
      <p>
        <h2>{props.name}</h2>
      </p>
    </React.Fragment>
  );
};

const category = props => {
  return (
    <div className="sumObj">
      <CategoryData id={props.id} name={props.name}></CategoryData>
    </div>
  );
};

export default category;
