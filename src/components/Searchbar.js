import React from "react";
import axios from "axios";
import Bill from "./Bill";
import "./styles/Navigationbar.css";
import "./styles/FilterSelect.css";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: "",
      bills: [],
      categories: []
    };
  }

  fetchSearchResults = e => {
    e.preventDefault();
    let obj = {
      name: this.state.searchContent
    };

    let url = "http://localhost:9000/bills/search";
    axios
      .post(url, obj)
      .then(res => this.setState({ bills: res.data }))
      .catch(e => console.log(e));
  };

  fetchCategories() {
    fetch("/categories")
      .then(res => res.json())
      .then(category => this.setState({ categories: category }))
      .then(err => err);
  }

  handleOnChange = e => {
    this.setState({ searchContent: e.target.value });
  };


  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <form className="searchbar" onSubmit={this.fetchSearchResults}>
            <input
              className="input1"
              id="search"
              label="Suche"
              type="text"
              value={this.state.searchContent}
              onChange={this.handleOnChange}
              placeholder="Was suchen Sie?"
            ></input>
            <input className="button2" type="submit" value="Go" />
          </form>
        </React.Fragment>
      <div className="sortedBillsDiv">
          {this.state.bills.map(bill => {
          return (
            <Bill
              name={bill.name}
              id={bill.id}
              price={bill.kosten}
              description={bill.beschreibung}
              catId1={bill.catId1}
              catId2={bill.catId2}
              catId3={bill.catId3}
              categories={this.state.categories}
            />
          );
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default Searchbar;
