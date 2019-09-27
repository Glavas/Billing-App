import React from "react";
import Header from "../Header";
import HomeContainer from "../HomeContainer";
import "../styles/Home.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
      bills: []
    };
  }

  fetchBills() {
    fetch("/bills")
      .then(res => res.json())
      .then(bills => this.setState({ bills: bills }))
      .then(err => err);
  }

  fetchContracts() {
    fetch("/contracts")
      .then(res => res.json())
      .then(contracts => this.setState({ contracts: contracts }))
      .then(err => err);
  }

  componentDidMount() {
    this.fetchContracts();
    this.fetchBills();
  }

  render() {
    return (
      <div className="content-container">
        <Header
          title="Home"
          text="Sie befinden sich auf der Startseite wo Sie eine Übersicht über Ihre aktuellen Dokumente haben."
          username={this.props.username}
        />
        <HomeContainer
          contracts={this.state.contracts}
          bills={this.state.bills}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

export default HomePage;
