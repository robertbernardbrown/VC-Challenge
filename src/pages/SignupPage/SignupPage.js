import React from 'react';
import PropTypes from 'prop-types';
import Welcome from "../../components/Welcome";
import SignUpForm from '../../components/Signup';

class SignupPage extends React.Component {
  state = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: '',
    }
  }

  /**
   * Process the form.
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    event.preventDefault();
    const { name, email, password } = this.state.user;
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

  render() {
    return (
      <React.Fragment>
        <Welcome/>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </React.Fragment>
    );
  }

}

SignupPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignupPage;