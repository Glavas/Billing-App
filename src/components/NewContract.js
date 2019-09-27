import React from "react";
import "./styles/AddForm.css";
import "./styles/BuildControls.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NewContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      endDate: "",
      price: "",
      description: "",
      catId1: 1,
      catId2: 1,
      catId3: 1
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEndDateChange = e => {
    this.setState({ endDate: e.target.value });
  };
  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
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
    const obj = {
      userId: 1,
      name: this.state.name,
      kosten: this.state.price,
      laufzeitBis: this.state.endDate,
      beschreibung: this.state.description,
      catId1: this.state.catId1,
      catId2: this.state.catId2,
      catId3: this.state.catId3
    };
    let url = "http://localhost:9000/contracts/insertContract";
    axios
      .post(url, obj)
      .then(res => console.log(res.data))
      .then(
        this.setState({
          name: "",
          price: "",
          description: "",
          catId1: 1,
          catId2: 1,
          catId3: 1
        })
      );
    alert("Sie haben einen neuen Vertrag angelegt.");
    window.location.reload();
  };

  render() {
    return (
      <div className="newContainer">
        <form className="newForm" onSubmit={this.handleAddSubmit}>
          <h3>Erstellen Sie einen neuen Vertrag</h3>
          <label>Name:</label>
          <input
            className="inputAdd"
            type="text"
            placeholder="..."
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          ></input>
          <label>Ende:</label>
          <input
            className="inputAdd"
            type="date"
            placeholder="..."
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleEndDateChange}
            required
          ></input>
          <label>Preis pro Monat:</label>
          <input
            className="inputAdd"
            type="number"
            placeholder="..."
            name="price"
            value={this.state.price}
            onChange={this.handlePriceChange}
            required
          ></input>
          <label>Beschreibung:</label>
          <input
            className="inputAdd"
            type="text"
            placeholder="..."
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            required
          ></input>
          <label>Kategorie:</label>
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
          <Link to="/contracts">
            <button className="button4">Abbrechen</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewContract;
