import React from "react";
import "./styles/Navigationbar.css";
import Searchbar from "./Searchbar.js";
import { Link } from "react-router-dom";

const navigationBar = props => (
  <div className="navigationBar">
    <header>
      <nav className="navigation">
        <div className="toolbarLogo">
          <Link to="/home">
            <img
              className="brandIcon"
              src="https://img.icons8.com/nolan/144/000000/cloud-storage.png"
            />
            <span className="brandTitle">fily</span>
          </Link>
        </div>
        <div></div>
        
        

        <div className="toolbarNavigationItems active" id="navigation">
          <label for="hamburger-icon">&#9776;</label>
          <input type="checkbox" id="hamburger-icon" />
          <ul>
          <li>
              <Link to="/home">
                <button className="butMenu">Home</button>
              </Link>
            </li>
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
      </nav>
    </header>
  </div>
);

export default navigationBar;
