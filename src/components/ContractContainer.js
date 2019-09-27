import React from "react";
import Contract from "./Contract";
import "./styles/Contracts.css";
import "./styles/GridLayout.css";

const contractContainer = props => {
  return (
    <div className="contractContainer">
      {props.contracts.map(contract => {
        return (
          <Contract
            key={contract.id}
            className="col-4"
            id={contract.id}
            name={contract.name}
            endDate={contract.laufzeitBis}
            price={contract.kosten}
            description={contract.beschreibung}
            catId1={contract.catId1}
            catId2={contract.catId2}
            catId3={contract.catId3}
            categories={props.categories}
          />
        );
      })}
    </div>
  );
};

export default contractContainer;
