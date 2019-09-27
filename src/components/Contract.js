import React from "react";
import axios from "axios";
import EditContract from "./EditContract";
import "./styles/Contracts.css";
import "./styles/BuildControls.css";
import "./styles/Navigationbar.css";

const ContractData = props => {
  let categories = props.categories;
  return (
    <React.Fragment>
      <p>
        <b>Vertrags-ID: </b> <br /> {props.id}
      </p>
      <p>
        <b>Name:</b>
        <br /> {props.name}{" "}
      </p>
      <p>
        <b>Ende:</b>
        <br />
        {props.endDate}
      </p>
      <p>
        <b>Preis pro Monat: </b>
        <br />
        {props.price}€
      </p>
      <p>
        <b>Beschreibung: </b>
        <br />
        {props.description}
      </p>
      <p>
        <b>Kategorien:</b>
        <br />
        {categories.map(category => {
          if (
            category.id === props.catId1 ||
            category.id === props.catId2 ||
            category.id === props.catId3
          ) {
            if (category.id !== 1)
              return (
                <React.Fragment>
                  {category.name}
                  <br />
                </React.Fragment>
              );
          }
          return null;
        })}
      </p>
    </React.Fragment>
  );
};

class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }
  handleDeleteContract = e => {
    e.preventDefault();
    let id = this.props.id;
    let url = `http://localhost:9000/contracts/deleteContract/${id}`;
    axios({
      method: "DELETE",
      url: url,
      data: {
        id: this.props.id
      }
    });
    alert(`Der Vertrag mit der ID ${id} wurde gelöscht.`);
    window.location.reload();
  };

  renderEditContract = () => {
    this.setState({
      content: (
        <EditContract id={this.props.id} categories={this.props.categories} />
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <div className="contractBox">
            <div>
              <ContractData
                name={this.props.name}
                id={this.props.id}
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                price={this.props.price}
                description={this.props.description}
                catId1={this.props.catId1}
                catId2={this.props.catId2}
                catId3={this.props.catId3}
                categories={this.props.categories}
              ></ContractData>
              <div className="contractControl">
                <div className="toolbarNavigationItems">
                  <ul>
                    <li>
                      <button
                        className="button1"
                        onClick={this.handleDeleteContract}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        className="button1"
                        onClick={this.renderEditContract}
                      >
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
        {this.state.content}
      </React.Fragment>
    );
  }
}

export default Contract;
