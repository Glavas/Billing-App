import React from "react";
import BillContainer from "../BillContainer";
import Header from "../Header";
import FilterSelect from "../FilterSelect";
import "../styles/BuildControls.css";
import axios from "axios";

class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
  }

  fetchBills() {
    fetch("/bills")
      .then(res => res.json())
      .then(bills => this.setState({ bills: bills }))
      .then(err => err);
  }
 /* fetchBills() {
    axios
      .post("http://localhost:9000/bills/")
      .then(res => res.json())
      .then(bills => this.setState({ bills: bills }))
      .then(err => err);
  }*/

  componentWillMount() {
    this.fetchBills();
  }

  filterBills = (catID, newBill) => {
    this.setState({ bills: newBill });
  };

  render() {
    return (
      <div className="content-container">
        <Header
          title="Rechnungen"
          text="Hier befinden sich all Ihre Rechnungen."
          username={this.props.username}
        />
        <h1>Gefilterte Rechnungen:</h1>
        <div className="topBar">
          <FilterSelect
            bills={this.state.bills}
            categories={this.props.categories}
          />
        </div>
        <h1>Alle Rechnungen:</h1>
        <BillContainer
          bills={this.state.bills}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

export default BillPage;
