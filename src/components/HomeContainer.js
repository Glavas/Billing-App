import React from "react";
import SumBills from "./SumBills";
import SumCategories from "./SumCategories";

const homeContainer = props => {
  return (
    <div className="HomeContainer">
      <SumBills title="Gesamtkosten Rechnungen:" bills={props.bills} />
      <SumCategories
        categories={props.categories}
        bills={props.bills}
        contracts={props.contracts}
      />
    </div>
  );
};

export default homeContainer;
