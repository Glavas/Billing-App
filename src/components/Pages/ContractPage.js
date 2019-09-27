import React from "react";
import ContractContainer from "../ContractContainer";
import Header from "../Header";
import FilterSelect from "../FilterSelect";
import { Link } from "react-router-dom";
import "../styles/BuildControls.css";

class ContractPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: []
    };
  }

  fetchContracts() {
    fetch("/contracts")
      .then(res => res.json())
      .then(contracts => this.setState({ contracts: contracts }))
      .then(err => err);
  }
  componentDidMount() {
    this.fetchContracts();
  }
  sortByKey(array, key) {
    let tempArr = array;
    return tempArr.sort(function(a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  render() {
    return (
      <div className="content-container">
        <Header
          title="Verträge"
          text="Herzlich Willkommen, hier befinden sich all Ihre Verträge."
        />
        <div className="topBar">
          <FilterSelect />
          <Link to="/newContract">
            <button className="button4">Neuer Vertrag</button>
          </Link>
        </div>
        <ContractContainer contracts={this.state.contracts} categories={this.props.categories}/>
      </div>
    );
  }
}

export default ContractPage;