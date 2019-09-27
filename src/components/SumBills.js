import React from "react";
import { Link } from "react-router-dom";

const sumBillCosts = bills => {
  let billSum = 0;
  bills.map(bill => {
    billSum = billSum + bill.kosten;
    return <div>{billSum}</div>;
  });
  return billSum;
};

const countBills = bills =>{
  return bills.length;
}

const sumBills = props => {
  let bills = props.bills;

  return (
    <div className="sumObj">
      <Link to="/bills">
        <div>
          <h3>Rechnungsdaten</h3>
          <ul className="HomeList">
            <li>Gesamtkosten: {sumBillCosts(bills)}€</li>
            <li>Anzahl Rechnungen: {countBills(bills)}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default sumBills;
