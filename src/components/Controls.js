import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navigationbar.css";

const controls = props => (
  <div className="toolbarNavigationItems">
    <ul>
      <li>
        <Link to="/NewBill">
          <button className="butMenu">Neue Rechnung</button>
        </Link>
      </li>
      {/*} <li>
        <Link to="/NewContract">
          <button className="butMenu">Neuer Vertrag</button>
</Link>
</li>*/}
      <li>
        <Link to="/categories">
          <button className="butMenu">Kategorien</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default controls;
