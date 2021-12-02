import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setAlert } from "../../actions/alert";
import { signup } from "../../actions/auth";
import PropTypes from "prop-types";

export const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert("Passwords are not matching", "danger");
    } else {
      signup({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/create-profile"/>;
  }
  return (
    <Fragment>
      <section className="signup-section">
        <div className="container">
          <form onSubmit={(e) => onSubmit(e)}>
            <h1 id="h1-registration">Sign Up</h1>

            <div className="right-col">
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    Display Name<span className="req"></span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                    required
                    autocomplete="off"
                  />
                </div>
              </div>

              <div className="field-wrap">
                <label>
                  Email Address<span className="req"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                  autocomplete="off"
                />
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req"></span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                  autocomplete="off"
                  minLength="8"
                />
              </div>

              <div className="field-wrap">
                <label>
                  Confirm Password<span className="req"></span>
                </label>
                <input
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => onChange(e)}
                  required
                  autocomplete="off"
                  minLength="8"
                />
              </div>

              <small>
                By signing up, you agree to our terms of service and privacy
                policy.
              </small>
              <br/>
              <button id="registration-button" className="signup-btn" type="submit">
                Sign Up &#8594;
              </button>

              <h4 className="have-account">
                Do you have an account?
                <Link id="linkAuth" to="/login">
                  {" "}
                  Login
                </Link>
              </h4>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);
