import React from "react";
import "./styles/Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      user: {
        id: 1,
        username: "username",
        firstName: "firstname",
        name: "name",
        email: "email@email.de",
        password: "...",
        signUpDate: "2019-12-12"
      }
    };
  }

  fetchUsers() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users: users }))
      .catch(err => err);
  }
  componentDidMount() {
    this.fetchUsers();
  }

  // noch nicht fertig
  handleInput = event => {
    this.props.editUserData(event.key, event.target.value);
  };

  handleEdit = (type, placeholderText, key) => {
    return (
      <div>
        <label>
          <input
            onChange={this.handleInput(key)}
            type={type}
            placeholder={placeholderText}
          />
        </label>
      </div>
    );
  };
  //

  render() {
    return (
      <div className="profile">
        <section className="profileSection">
          <ul className="profileUl">
            <li>
              <div className="pDiv">
                <div>
                  <table>
                    <tbody>
                    <tr>
                      <th>User ID:</th>
                      <th>Username:</th>
                      <th>Name:</th>
                      <th>Vorname:</th>
                      <th>E-Mail:</th>
                      <th>angemeldet seit:</th>
                    </tr>
                    <tr>
                      <td>{this.state.user.id}</td>
                      <td>{this.state.user.username}</td>
                      <td>{this.state.user.name}</td>
                      <td>{this.state.user.firstName}</td>
                      <td>{this.state.user.email}</td>
                      <td>{this.state.user.signUpDate}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>
            <li>
              <button className="button3">Edit</button>
              <p></p>
            </li>
            <li>
              <button className="button3">Passwort ändern</button>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Profile;
