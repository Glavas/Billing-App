import React from "react";
import Form from "./Form";
import SearchBar from "./Searchbar";
const header = props => {
  return (
    <div>
      <div className="nav-container">
        <h1>{props.title}</h1>
        <SearchBar></SearchBar>
        <div></div>
        <Form className="forms" text={props.text} username={props.username}/>
      </div>
    </div>
  );
};

export default header