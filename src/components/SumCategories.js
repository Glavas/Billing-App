import React from "react";
import { Link } from "react-router-dom";

class sumCategories extends React.Component {
  
  counter = 0;
  render() {
    return (
      <div className="sumObj">
        <Link to="/categories">
          <div>
            <h3>Kategorien</h3>
            <ul className="HomeList">
              {this.props.categories.map(category => {
                let countBills = 0;
                if (category.id === 1) {
                  return null;
                } else {
                  return (
                    <li key={category.id}>
                      {category.name}
                      {this.props.bills.map(bill => {
                        if (
                          bill.catId1 === category.id ||
                          bill.catId2 === category.id ||
                          bill.catId3 === category.id
                        ) {
                          countBills += 1;
                        }
                      })}
                      {" (" + countBills+")"}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </Link>
      </div>
    );
  }
}

export default sumCategories;
