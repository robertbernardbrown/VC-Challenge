import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";
import './App.css';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Welcome from "./components/Welcome";

class App extends Component {

  state = {

  }

  render() {
    return (
      <Router>
        <Switch>
          <LoginPage exact path="/"/>
          <SignupPage exact path="/signup"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
