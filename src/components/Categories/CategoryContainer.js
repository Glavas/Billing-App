import React from "react";
import DeleteCategory from "../DeleteCategory";
import NewCategory from "../NewCategory";
import "../styles/Contracts.css";
import "../styles/GridLayout.css";

const categoryContainer = props => {
  return (
    <div className="">
      <NewCategory categories={props.categories}></NewCategory>
      <div></div>
      <DeleteCategory categories={props.categories}></DeleteCategory>
    </div>
  );
};

export default categoryContainer;
