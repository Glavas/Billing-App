import React from "react";
import {Link} from "react-router-dom";

const sumContractsCosts = contracts => {
  let contractSum = 0;
  contracts.map(contract => {
    contractSum = contractSum + contract.kosten;
    return <div>{contractSum}</div>;
  });
  return contractSum;
};

const sumContracts = props => {
  let contracts = props.contracts;

const countContracts = contracts => {
  return contracts.length;
}
  return (
    <div className="sumObj">
      <Link to="/contracts"><div>
        <h3>Vertragsdaten</h3>
        <ul className="HomeList">
          <li>Gesamtkosten: {sumContractsCosts(contracts)}€</li>
          <li>Anzahl Verträge: {countContracts(contracts)}</li>
        </ul>
      </div></Link>
    </div>
  );
};

export default sumContracts;
