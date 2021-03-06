import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Signin from '../../components/Signin';
import Welcome from "../../components/Welcome";

class LoginPage extends Component {
  state = {
    errors: {},
    successMessage: '',
    user: {
      email: '',
      password: ''
    }
  }
  
  componentDidMount(){
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.setState({ successMessage });
  }
  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    event.preventDefault();
    const { email, password } = this.state.user;
    this.props.toggleAuthenticateStatus(true);
  }

  /**
   * Change the user object.
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  setUser = user => {
    this.setState({
      user
    })
  }

  render() {
    return (
        <React.Fragment>
            <Welcome/>
            <Signin
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            user={this.state.user}
            setUser={this.setUser}
            authenticated={this.props.authenticated} 
            toggleAuthenticateStatus={this.props.toggleAuthenticateStatus}
            />
        </React.Fragment>
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired,
  toggleAuthenticateStatus: PropTypes.func,
  authenticated: PropTypes.bool
};

export default LoginPage;