import React from "react";
import "./styles/AddForm.css";
import "./styles/BuildControls.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NewBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      catId1: 1,
      catId2: 1,
      catId3: 1
    };
  }

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleCategory1Change = e => {
    this.setState({ catId1: e.target.value });
  };

  handleCategory2Change = e => {
    this.setState({ catId2: e.target.value });
  };

  handleCategory3Change = e => {
    this.setState({ catId3: e.target.value });
  };

  handleAddSubmit = e => {
    e.preventDefault();
    let obj = {
      name: this.state.name,
      userId: 1,
      kosten: this.state.price,
      beschreibung: this.state.description,
      catId1: this.state.catId1,
      catId2: this.state.catId2,
      catId3: this.state.catId3
    };

    let url = "http://localhost:9000/bills/insertBill";
    axios
      .post(url, obj)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    alert("Eine Neue Rechnung wurde angelegt.");

  };

  render() {
    return (
      <div className="newContainer">
        <form className="newForm" onSubmit={this.handleAddSubmit}>
          <h3 className="newLabel">Erstellen Sie eine neue Rechnung</h3>
          <label>Name:</label>
          <input
            className="inputAdd"
            type="text"
            name="name"
            placeholder="..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          ></input>
          <label>Preis:</label>
          <input
            className="inputAdd"
            type="number"
            name="price"
            placeholder="..."
            min="0"
            value={this.state.price}
            onChange={this.handlePriceChange}
            required
          ></input>
          <label>Beschreibung:</label>
          <input
            className="inputAdd"
            type="text"
            name="description"
            placeholder="..."
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            required
          ></input>
          <label>Kategorie: </label>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category1"
            onChange={this.handleCategory1Change}
          >
            {this.props.categories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category2"
            onChange={this.handleCategory2Change}
          >
            {this.props.categories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category3"
            onChange={this.handleCategory3Change}
          >
            {this.props.categories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input className="button4" type="submit" value="Erstellen" />
          <Link to="/bills">
            <button className="button4">Abbrechen</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewBill;
