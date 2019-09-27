import React from "react";
import axios from "axios";
import "./styles/GridLayout.css";
import "./styles/ContentContainer.css";
import "./styles/BuildControls.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      message: ""
    };
  }

  handleNameChange = e => {
    this.setState({ username: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleAddContact = e => {
    e.preventDefault();
    let obj = {
      username: this.state.username,
      email: this.state.email,
      message: this.state.message
    };

    let url = "http://localhost:9000/contact/insertMessage";
    axios
      .post(url, obj)
      .then(res => console.log(res))
      .catch(e => console.log(e));

    alert("Ihre Nachricht wurde versendet.");
  };

  render() {
    return (
      <div className="col-4">
        <form className="contactForm ImpressumContent">
          <h3>Kontakt:</h3>
          <label>Ihr Username:</label>
          <input
            type="text"
            name="userName"
            onChange={this.handleNameChange}
            required
          ></input>
          <label>Ihre E-Mail:</label>
          <input
            type="text"
            name="userMail"
            onChange={this.handleEmailChange}
            required
          ></input>
          <label>Ihre Nachricht: </label>
          <textarea
            className="messageInput"
            type="text"
            name="userMessage"
            placeholder="Schreiben Sie etwas..."
            onChange={this.handleMessageChange}
            required
          ></textarea>
          <button className="button4" onClick={this.handleAddContact}>
            Senden
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
