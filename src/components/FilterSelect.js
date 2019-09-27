import React from "react";
import "./styles/GridLayout.css";
import "./styles/FilterSelect.css";
import "./styles/Navigationbar.css";
import FilterMinMax from "./FilterMinMax";
import BillContainer from "./BillContainer";

class FilterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      chosenCat: 1,
      minAmount: null,
      maxAmount: null,
      renderedMinMax: <FilterMinMax type="number" />,
      newBillContainer: null
    };
  }

  filterSelectHandler = e => {
    console.log("Categorie " + e.target.value);
    this.setState({ chosenCat: e.target.value });
  };

  filterMinHandler = e => {
    console.log("MIN " + e.target.value);
    if (e.target.value != "") {
      this.setState({ minAmount: e.target.value });
    } else {
      this.setState({ minAmount: null });
    }
  };

  filterMaxHandler = e => {
    console.log("MAX " + e.target.value);
    if (e.target.value != "") {
      this.setState({ maxAmount: e.target.value });
    } else {
      this.setState({ maxAmount: null });
    }
  };

  filterBills = () => {
    let allBills = this.props.bills;
    let filteredBillsCat = new Array();
    let filteredBillsMin = new Array();
    let filteredBillsMax = new Array();
    let catSet = false;
    let minSet = false;
    let maxSet = false;

    if (this.state.chosenCat != 1) {
      catSet = true;
      console.log("Categorie " + this.state.chosenCat);
    } else {
      catSet = false;
    }
    if (this.state.minAmount != null) {
      console.log("MIN " + this.state.minAmount);
    } else {
      minSet = false;
    }
    if (this.state.maxAmount != null) {
      console.log("MAX " + this.state.maxAmount);
    } else {
      maxSet = false;
    }

    if (this.state.chosenCat != 1) {
      allBills.map(bill => {
        if (
          bill.catId1 == this.state.chosenCat ||
          bill.catId2 == this.state.chosenCat ||
          bill.catId3 == this.state.chosenCat
        ) {
          filteredBillsCat.push(bill);
        }
      });
    } else if (this.state.chosenCat == 1) {
      console.log("Cat nicht gesetzt");
      filteredBillsCat = allBills;
    }

    if (this.state.minAmount != null) {
      filteredBillsCat.map(bill => {
        if (bill.kosten > this.state.minAmount) {
          filteredBillsMin.push(bill);
        }
      });
    } else {
      console.log("Min nicht gesetzt");
      filteredBillsMin = filteredBillsCat;
    }

    if (this.state.maxAmount != null) {
      filteredBillsMin.map(bill => {
        if (bill.kosten < this.state.maxAmount) {
          filteredBillsMax.push(bill);
        }
      });
    } else {
      console.log("Max nicht gesetzt");
      filteredBillsMax = filteredBillsMin;
    }
    console.log(filteredBillsMax);
    this.setState({ bills: filteredBillsMax });
    this.setState({
      newBillContainer: (
        <BillContainer
          bills={filteredBillsMax}
          categories={this.props.categories}
        />
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="flexDiv">
          <div className="topBar2">
            <div className="topBar">
              <label> Filtern nach: </label>
              <select
                className="filterInput"
                onChange={this.filterSelectHandler}
                name="Sortieren nach"
              >
                {this.props.categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button onClick={this.filterBills} className="button4">
                Go
              </button>
            </div>
            <div className="maxMin">
              <input
                className="filterInput"
                type="number"
                label="Filter"
                placeholder="Min €"
                onChange={this.filterMinHandler}
              />
              <label>-</label>
              <input
                className="filterInput"
                type="number"
                label="Filter"
                placeholder="Max €"
                onChange={this.filterMaxHandler}
              />
            </div>
          </div>
          <div className="sortedBillsDiv">
            <div className="sortedBillsDiv">{this.state.newBillContainer}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterSelect;
