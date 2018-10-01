import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Signin = ({onSubmit,onChange,errors,successMessage,user,toggleAuthenticateStatus,setUser,authenticated}) => (
  <div className="inner-display-div">
    <h2 className="login-heading">Login</h2>
    <form action="/" onSubmit={onSubmit}>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
            placeholder={errors.email ? errors.email.toString() : "Email"}
            name="email"
            className={errors.email ? "has-error" : ""}
            onChange={onChange}
            value={user.email}
        />
      </div>

      <div className="field-line">
        <input
            placeholder={errors.password ? errors.password.toString() : "Password"}
            type="password"
            name="password"
            onChange={onChange}
            className={errors.password ? "has-error" : ""}
            value={user.password}
        />
      </div>

      <div className="button-line">
        <button className="btn btn-primary btn-block" type="submit">Log-In</button>
      </div>

      <p>Don't have an account? <Link to={'/signup'} id="sign">Create&nbsp;one</Link>.</p>
    </form>
  </div>
);

Signin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  toggleAuthenticateStatus: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Signin;