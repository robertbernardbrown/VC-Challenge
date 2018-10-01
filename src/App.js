import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";
import './App.css';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';
import Welcome from "./components/Welcome";

class App extends Component {

  state = {
    authenticated: false,
  }

  toggleAuthenticateStatus(){
    this.setState({
      authenticated: !this.state.authenticated
    })
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
        </Switch>
      </Router>
    );
  }
}

export default App;
