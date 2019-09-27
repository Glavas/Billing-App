import React from "react";
import "./styles/Item.css";

const item = props => (
  <div className="itemContainer">
    <h3 className="propsContent">{props.header}</h3>
    <p className="ptext">{props.content}</p>
    <div className="propsChildren">{props.children}</div>
  </div>
);

export default item;
