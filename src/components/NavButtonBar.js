import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navigationbar.css";
import "./styles/ButtonNav.css";

const navButtonBar = props => (
  <div className="toolbarNavigationItems active" id="navigation">
    <label for="hamburger-icon">&#9776;</label>
    <input type="checkbox" id="hamburger-icon" />
    <ul>
      <li>
        <Link to="/NewBill">
          <button className="butMenu">Neue Rechnung</button>
        </Link>
      </li>
      <li>
        <Link to="/categories">
          <button className="butMenu">Kategorien</button>
        </Link>
      </li>
      <li>
        <Link to="/home">
          <button className="butMenu">Home</button>
        </Link>
      </li>
      <li>
        <Link to="/bills">
          <button className="butMenu">Rechnungen</button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <button className="butMenu">Logout</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default navButtonBar;
