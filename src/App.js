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
import LogoutFunction from "./components/LogoutFunction";

class App extends Component {

  state = {
    authenticated: false,
    bikes: [
      {
        ID: "7EED89",
        origin: "here",
        startTime: "7AM",
        endTime: "8PM"
      },
      {
        ID: "11GHI7",
        origin: "here",
        startTime: "11AM",
        endTime: "11PM"
      }
    ]
  }

  toggleAuthenticateStatus = () => {
    this.setState({authenticated: !this.state.authenticated});
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
                                        bikes={this.state.bikes} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <PrivateRoute exact path="/lend" component={Lend} 
                                        authenticated={this.state.authenticated}
                                        toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
