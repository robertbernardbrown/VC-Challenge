import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";
import './App.css';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';
import Welcome from "./components/Welcome";
import Auth from "./utils/Auth";
import Rent from "./pages/Rent";
import Lend from "./pages/Lend";

class App extends Component {

  state = {
    authenticated: false,
  }

  toggleAuthenticateStatus = () => {
    this.setState({authenticated: Auth.authenticateUser()});
  }

  render() {
    return (
      <Router>
        <Switch>
          <LoggedOutRoute exact path="/" component={this.state.authenticated ? Main : LoginPage} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <LoggedOutRoute exact path="/signup" component={this.state.authenticated ? Main : SignupPage} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <PrivateRoute exact path="/rent" component={Rent} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <PrivateRoute exact path="/lend" component={Lend} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
