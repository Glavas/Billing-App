import React from "react";
import { Link } from "react-router-dom";

function sumAllCosts(bills, contracts) {
  let sum = 0;
  bills.map(bill => {
    return (sum = sum + bill.kosten);
  });
  contracts.map(contract => {
    return (sum = sum + contract.kosten);
  });
  return sum;
}

const sum = props => {
  let bills = props.bills;
  let contracts = props.contracts;

  return (
    <div className="sumObj">
      <Link to="/home">
        <div>
          <form>
            <h3>{props.title}</h3>
            <ul className="HomeList">
              <li>{sumAllCosts(bills, contracts)}€</li>
            </ul>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default sum;
