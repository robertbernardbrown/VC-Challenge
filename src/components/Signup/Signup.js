import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({onSubmit,onChange,errors,user}) => (
  <div className="container">
    <div className="inner-display-div">
      <h2 className="card-heading">Sign Up</h2>
      <form action="/" onSubmit={onSubmit}>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <input
              placeholder={errors.name ? errors.name.toString() : "Name"}
              name="name"
              className={errors.name ? "has-error" : ""}
              onChange={onChange}
              value={user.name}
          />
        </div>

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

        <div className="field-line">
          <input
              placeholder={errors.credit ? errors.credit.toString() : "Credit Card Number"}
              type="credit-number"
              name="credit-number"
              onChange={onChange}
              className={errors.credit ? "has-error" : "card-secure"}
              value={user.credit}
          />
        </div>

        <div className="field-line">
          <input
              placeholder={errors.security ? errors.security.toString() : "Credit Security Number"}
              type="security-number"
              name="security-number"
              onChange={onChange}
              className={errors.security ? "has-error" : "card-secure"}
              value={user.security}
          />
        </div>

        <div className="field-line">
          <input
              placeholder={errors.creditExpiration ? errors.creditExpiration.toString() : "Credit Card Expiration"}
              type="creditExpiration"
              name="creditExpiration"
              onChange={onChange}
              className={errors.creditExpiration ? "has-error" : "card-secure"}
              value={user.creditExpiration}
          />
        </div>

        <div className="button-line">
          <button className="btn btn-primary btn-block" type="submit">Sign-Up</button>
        </div>

        <p>Already have an account? <br/><Link to={'/'} id="sign">Log in</Link></p>
      </form>
    </div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;