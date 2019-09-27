import React from "react";
import Header from "../Header";
import CategoryContainer from "../Categories/CategoryContainer";
import "../styles/Home.css";
import SumCategories from "../SumCategories";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      bills: [],
      contracts: []
    };
  }

  fetchCategories() {
    fetch("/categories")
      .then(res => res.json())
      .then(categories => this.setState({ categories: categories }))
      .then(err => err);
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
    this.fetchCategories();
    this.fetchBills();
    this.fetchContracts();
  }

  render() {
    return (
      <div className="content-container">
        <Header
          title="Kategorien"
          text="Hier sind die Kategorien, zu denen Ihre Dokumente zugewiesen werden.
         Sie können neue Kategorien hinzufügen oder löschen. Auf der Startseite ist eine Übersicht über all Ihre Kategorien."
          username={this.props.username}
        />
       
        <CategoryContainer categories={this.state.categories} username={this.props.username}/>

      </div>
    );
  }
}

export default CategoryPage;
