import React from "react";
import Bill from "./Bill";
import "./styles/Contracts.css";
import "./styles/GridLayout.css";

const billContainer = props => {
  return (
    <div className="contractContainer">
      {props.bills.map(bill => {
        return (
          <Bill
            key={bill.id}
            className="col-5"
            name={bill.name}
            id={bill.id}
            price={bill.kosten}
            description={bill.beschreibung}
            catId1={bill.catId1}
            catId2={bill.catId2}
            catId3={bill.catId3}
            categories={props.categories}
          />
        );
      })}
    </div>
  );
};

export default billContainer;
