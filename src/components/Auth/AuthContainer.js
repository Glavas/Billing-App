import React from "react";
import "../styles/Auth.css";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import "../styles/GridLayout.css";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      email: "",
      password: "",
      user: {},
      content: null,
      userId: ""
    };
  }

  handleMailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleRegisterUserClick = () => {
    this.setState({ content: <RegisterForm></RegisterForm> });
  };

  loginUser = () => {
    let obj = {
      email: this.state.email,
      password: this.state.password
    };
    let url = "http://localhost:9000/user1/api/login";
    axios
      .post(url, obj)
      .then(res => () => this.props.handleLoginClick(res.data.login))
      .catch(e => console.log(e));

    console.log(this.state.result);
  };

  handleLogin = e => {
    e.preventDefault();
    let obj = {
      email: this.state.email,
      password: this.state.password
    };

    let url = "http://localhost:9000/user1/api/login";
    axios
      .post(url, obj)
      .then(res => this.setState({ user: res.data }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <React.Fragment>
        <div className="authHead">
          <h1>Willkommen bei fily - Rechnungsmanager </h1>
        </div>
        <div className="authContainer">
          <div className="auth">
            <div className="authFormDiv">
              <h2>Melden Sie sich an:</h2>
              <form className="authForm" onSubmit={this.loginUser}>
                <label>E-Mail: </label>
                <input
                  className="authInput"
                  type="email"
                  placeholder="E-Mail..."
                  onChange={this.handleMailChange}
                  required
                ></input>
                <label>Passwort: </label>
                <input
                  className="authInput"
                  type="password"
                  placeholder="Passwort..."
                  onChange={this.handlePasswordChange}
                  required
                ></input>
              </form>
              <div className="authButtonDiv">
                <input className="buttonA" type="submit" value="Login" />
                <button
                  className="buttonA"
                  onClick={this.handleRegisterUserClick}
                >
                  Registrieren
                </button>
              </div>
            </div>
          </div>
          {this.state.content}
        </div>
      </React.Fragment>
    );
  }
}

export default AuthContainer;
