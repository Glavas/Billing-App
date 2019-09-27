import React from "react";
import ImpressumPage from "./components/Pages/ImpressumPage";
import NavigationBar from "./components/NavigationBar";
import ContentContainer from "./components/ContentContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthContainer from "./components/Auth/AuthContainer";
import axios from "axios";
import RegisterForm from "./components/Auth/RegisterForm";

class ContractManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //content: [
      //  <AuthContainer />,
      //  <ContentContainer
      //    editUserData={this.editUserData}
      //    loggedIn={this.state.loggedIn}
      //    userId={this.state.userId}
      //    user={this.state.user}
      //  />
      //],
      content: <div></div>,
      isLoggedIn: false,
      users: [],
      user: {
        id: 1,
        username: "TestUsername",
        firstName: "firstname",
        name: "name",
        email: "email@email.de",
        password: "...",
        signUpDate: "2019-12-12"
      }
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  callTestAPI() {
    fetch("/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  editUserData(key, newValue) {
    this.setState({ key: newValue });
  }



  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
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
      .then(res => this.setState({ isLoggedIn: res.data.login }))
      .catch(e => console.log(e));
  };

  render() {
    if (this.state.isLoggedIn == true) {
      return (
        <BrowserRouter>
          <div className="App">
            <header>
              <NavigationBar pageChanged={this.handlePageChange} />
            </header>
            <section></section>
            <main>
              <ContentContainer
                editUserData={this.editUserData}
                loggedIn={this.state.isLoggedIn}
                userId={this.state.userId}
                user={this.state.user}
              />
            </main>
            <button className="buttonA" onClick={this.handleLogoutClick}>
              Logout
            </button>
            <footer>
              <ImpressumPage />
            </footer>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <header>
              <NavigationBar pageChanged={this.handlePageChange} />
            </header>
            <section></section>
            <main>
              <React.Fragment>
                <div className="authHead">
                  <h1>Willkommen bei fily - Rechnungsmanager </h1>
                </div>
                <div className="authContainer">
                  <div className="auth">
                    <div className="authFormDiv">
                      <h2>Melden Sie sich an:</h2>
                      <form className="authForm">
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
                        <button
                          className="buttonA"
                          onClick={this.loginUser}
                        >
                          Login
                        </button>
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
            </main>
            <footer>
              <ImpressumPage />
            </footer>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default ContractManager;
