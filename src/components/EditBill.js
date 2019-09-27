import React from "react";
import axios from "axios";
class EditBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: {}
    };
  }

  handlePriceChange = e => {
    this.setState({ bills: { ...this.state.bills, kosten: e.target.value } });
  };

  handleDescriptionChange = e => {
    this.setState({
      bills: { ...this.state.bills, beschreibung: e.target.value }
    });
  };

  handleNameChange = e => {
    this.setState({ bills: { ...this.state.bills, name: e.target.value } });
  };

  handleCategory1Change = e => {
    this.setState({ bills: { ...this.state.bills, catId1: e.target.value } });
  };

  handleCategory2Change = e => {
    this.setState({ bills: { ...this.state.bills, catId2: e.target.value } });
  };

  handleCategory3Change = e => {
    this.setState({ bills: { ...this.state.bills, catId3: e.target.value } });
  };

  fetchBills() {
    fetch(`/bills/${this.props.id}`)
      .then(res => res.json())
      .then(bill => this.setState({ bills: bill }))
      .then(err => err);
  }

  componentWillMount() {
    this.fetchBills();
  }
  handleEditSubmit = () => {
    let url = `/bills/updateBill`;
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

  render() {
    return (
      <div className="newContainer">
        <form className="newForm" onSubmit={this.handleEditSubmit}>
          <h3>
            Hier sind Ihre Rechnungsdaten.<br></br> Sie können die Rechnung
            jetzt bearbeiten.
            <br></br>
            <br></br>
            Rechnungs-ID: {this.state.bills.id}
          </h3>
          <label>Name: </label>
          <input
            className="inputAdd"
            type="text"
            name="name"
            value={this.state.bills.name}
            onChange={this.handleNameChange}
          ></input>
          <label>Preis:</label>
          <input
            className="inputAdd"
            type="number"
            name="price"
            value={this.state.bills.kosten}
            onChange={this.handlePriceChange}
            required
          ></input>
          <label>Beschreibung:</label>
          <input
            className="inputAdd"
            type="text"
            name="description"
            value={this.state.bills.beschreibung}
            onChange={this.handleDescriptionChange}
            required
          ></input>
          <label>Kategorie: </label>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category1"
            value={this.state.bills.catId1}
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
            value={this.state.bills.catId2}
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
            value={this.state.bills.catId3}
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
        <button onClick={() => window.location.reload()} className="button4">
          Abbrechen
        </button>
      </div>
    );
  }
}

export default EditBill;
