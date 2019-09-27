import React from "react";
import "./styles/ContentContainer.css";
import "./styles/Forms.css";
import "./styles/GridLayout.css";
import "./styles/Profile.css";
import HomePage from "./Pages/HomePage";
import ContractPage from "./Pages/ContractPage";
import NewContract from "./NewContract";
import EditContract from "./EditContract";
import BillPage from "./Pages/BillPage";
import NewBill from "./NewBill";
import EditBill from "./EditBill";
import CategoryPage from "./Pages/CategoryPage";
import NewCategory from "./NewCategory";
import ImpressumPage from "./Pages/ImpressumPage";
import Auth from "./Auth/Auth";
import { Route, Switch } from "react-router-dom";

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      user: this.props.user,
      categories: []
    };
  }

  fetchCategories() {
    fetch("/categories")
      .then(res => res.json())
      .then(categories => this.setState({ categories: categories }))
      .then(err => err);
  }
  componentDidMount() {
    this.fetchCategories();
  }
  editUserData = this.props.editUserData;

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Auth}></Route>
          <Route
            path="/home"
            render={props => (
              <HomePage
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route
            path="/contracts"
            render={props => (
              <ContractPage
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route
            path="/newContract"
            render={props => <NewContract username={this.props.user.username} categories={this.state.categories} />}
          />
          <Route
            path="/EditContract"
            render={props => (
              <EditContract categories={this.state.categories} />
            )}
          />
          <Route
            path="/bills"
            render={props => (
              <BillPage
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route
            path="/newBill"
            render={props => (
              <NewBill
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route
            path="/EditBill"
            render={props => (
              <EditBill
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route path="/categories" component={CategoryPage} />
          <Route
            path="/newCategory"
            render={props => (
              <NewCategory
                categories={this.state.categories}
                username={this.props.user.username}
              />
            )}
          />
          <Route path="/impressum" component={ImpressumPage} />

              
            
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
