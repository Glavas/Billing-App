import React from "react";
import "./styles/AddForm.css";
import "./styles/BuildControls.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NewCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: ""
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleCategoryDeleteChange = e => {
    this.setState({ categoryId: e.target.value });
  };

  handleAddSubmit = e => {
    e.preventDefault();
    const obj = {
      name: this.state.name
    };
    let url = "http://localhost:9000/categories/insertCategory";
    axios
      .post(url, obj)
      .then(res => console.log(res.data))
      .then(
        this.setState({
          name: ""
        })
      );
    alert("Sie haben eine neue Kategorie angelegt.");
    window.location.reload();
  };

  handleDeleteCategory = e => {
    e.preventDefault();
    let id = this.state.id;
    let url = `http://localhost:9000/categories/deleteCategory/${id}`;
    axios({
      method: "DELETE",
      url: url,
      data: {
        id: id
      }
    });
    alert(`Die Kategorie wurde gelöscht.`);
 
  };

  render() {
    return (
      <div className="con">
        <div className="newContainer">
          <form className="newForm" onSubmit={this.handleAddSubmit}>
            <h3>Erstellen Sie eine neue Kategorie</h3>
            <label>Tragen Sie den Namen der Kategorie ein:</label>
            <input
              className="inputAdd"
              type="text"
              placeholder=""
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            ></input>
            <input className="button4" type="submit" value="Erstellen" />
            <Link to="/home">
              <button className="button4">Abbrechen</button>
            </Link>
          </form>
          <p></p>
        </div>
      </div>
    );
  }
}

export default NewCategory;
