import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import "./Login.css";
import { handleLogin } from "../../actions/LoginAction";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const userLogin = (e) => {
    e.preventDefault();
    try {

      dispatch(handleLogin(state.email, state.password, history));
    } catch (e) {
      console.log("Exception e", e.message);
    }
  };

  return (
    <div class="containers">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <input
                type="text"
                class="login__input"
                id="email"
                value={state.email}
                onChange={handleChange}
                placeholder=" Email"
              />
            </div>
            <div class="login__field">
              <input
                type="password"
                class="login__input"
                id="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <button
              class="button login__submit"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => userLogin(e)}
            >
              Log In Now
            </button>
          </form>
          <Link to="/register">
            <div class="social-login">
              <h3>Sign Up</h3>
            </div>
          </Link>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
