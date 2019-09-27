import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class DeleteCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  handleCategoryDeleteChange = e => {
    this.setState({ id: e.target.value });
  };

  handleDeleteCategory = e => {
    e.preventDefault();
    let id = this.state.id;
    let url = `http://localhost:9000/categories/deleteCategory/${id}`;
    axios({
      method: "DELETE",
      url: url,
      data: {
        id: this.state.id
      }
    });
    alert(`Die Kategorie ${this.state.id} wurde gelöscht.`);

  };
 
  render() {
    return (
      <div className="newContainer">
        <form className="newForm" onSubmit={this.handleDeleteCategory}>
          <h3>Löschen Sie eine Kategorie.</h3>
          <label>Wählen Sie die Kategorie die gelöscht werden soll: </label>
          <select
            className="inputAdd"
            type="text"
            placeholder="..."
            name="category3"
            onChange={this.handleCategoryDeleteChange}
          >
            {this.props.categories.map(category => {
              if (category.id !== 1)
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
            })}
          </select>
          <input className="button4" type="submit" value="Löschen" />
          <Link to="/home">
            <button className="button4">Abbrechen</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default DeleteCategory;
