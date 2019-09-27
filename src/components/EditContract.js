import React from "react";
import axios from "axios";

class EditContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: {}
    };
  }

  handleEditSubmit = () => {
    let url = `/contracts/updateContract`;
    axios
      .put(url, this.state.bills, {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data1 => console.log(data1))
      .catch(err => console.log(err));

    alert("Die Rechnung wurde aktualisiert.");
  };

  handlePriceChange = e => {
    this.setState({
      contracts: { ...this.state.contracts, kosten: e.target.value }
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      contracts: { ...this.state.contracts, beschreibung: e.target.value }
    });
  };

  handleNameChange = e => {
    this.setState({
      contracts: { ...this.state.contracts, name: e.target.value }
    });
  };

  handleDateChange = e => {
    this.setState({
      contracts: { ...this.state.contracts, laufzeitBis: e.target.value }
    });
  };

  handleCategory1Change = e => {
    this.setState({
      contracts: { ...this.state.contracts, catId1: e.target.value }
    });
  };

  handleCategory2Change = e => {
    this.setState({
      contracts: { ...this.state.contracts, catId2: e.target.value }
    });
  };

  handleCategory3Change = e => {
    this.setState({
      contracts: { ...this.state.contracts, catId3: e.target.value }
    });
  };
 
  fetchContracts() {
    fetch(`/contracts/${this.props.id}`)
      .then(res => res.json())
      .then(contracts => this.setState({ contracts: contracts }))
      .then(err => err);
  }

  componentWillMount() {
    this.fetchContracts();
  }

  render() {
    return (
      <div className="newContainer">
        <form className="newForm" onSubmit={this.handleEditSubmit}>
          <h3>
            Hier sind Ihre Vertragssdaten.<br></br> Sie können den Vertrag jetzt
            bearbeiten.
            <br></br>
            <br></br>
            Vertrags-ID: {this.state.contracts.id}
          </h3>
          <label>Name: </label>
          <input
            className="inputAdd"
            type="text"
            name="name"
            value={this.state.contracts.name}
            onChange={this.handleNameChange}
          ></input>
          <label>Ende: </label>
          <input
            className="inputAdd"
            type="text"
            name="laufzeitBis"
            value={this.state.contracts.laufzeitBis}
            onChange={this.handleDateChange}
          ></input>
          <label>Preis pro Monat:</label>
          <input
            className="inputAdd"
            type="number"
            name="price"
            value={this.state.contracts.kosten}
            onChange={this.handlePriceChange}
            required
          ></input>
          <label>Beschreibung:</label>
          <input
            className="inputAdd"
            type="text"
            name="description"
            value={this.state.contracts.beschreibung}
            onChange={this.handleDescriptionChange}
            required
          ></input>
          <label>Kategorie:</label>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category1"
            value={this.state.contracts.catId1}
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
            value={this.state.contracts.catId2}
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
            value={this.state.contracts.catId3}
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
          <input
            className="button4"
            type="submit"
            value="Bearbeitung bestätigen"
          />
        </form>
        <button className="button4" onClick={() => window.location.reload()}>
          Abbrechen
        </button>
      </div>
    );
  }
}

export default EditContract;
