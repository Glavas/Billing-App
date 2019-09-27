import React from "react";
import "../styles/Auth.css";
import "../styles/GridLayout.css";
import axios from "axios";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      firstName: "",
      email: "",
      password: ""
    };
  }
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ namee: e.target.value });
  };

  handleVornameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleMailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleAddSubmit = e => {
    e.preventDefault();
    let obj = {
      username: this.state.username,
      firstName: this.state.firstName,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    let url = "http://localhost:9000/user/insertUser";
    axios
      .post(url, obj)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    alert("Ihr Account wurde angelegt.");
    window.location.reload();
  };

  render() {
    return (
      <div className="authFormDiv">
        <h2>Registrieren Sie sich:</h2>
        <form className="authForm" onSubmit={this.handleAddSubmit}>
          <label>Username: </label>
          <input
            className="authInput"
            type="text"
            onChange={this.handleUsernameChange}
            required
          ></input>
          <label>Name: </label>
          <input
            className="authInput"
            type="text"
            onChange={this.handleNameChange}
            required
          ></input>
          <label>Vorname: </label>
          <input
            className="authInput"
            type="text"
            onChange={this.handleVornameChange}
            required
          ></input>
          <label>E-Mail: </label>
          <input
            className="authInput"
            type="text"
            onChange={this.handleMailChange}
            required
          ></input>
          <label>Passwort: </label>
          <input
            className="authInput"
            type="password"
            onChange={this.handlePasswordChange}
            required
          ></input>
        </form>
        <div className="authButtonDiv">
          <button className="buttonA" onClick={this.handleAddSubmit}>
            Registrieren
          </button>
          <button className="buttonA" onClick={() => window.location.reload()}>
            Abbrechen
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
