import React, {useState} from 'react';

import { useHistory,Link} from 'react-router-dom';
import "./Login.css";

import { useDispatch, useSelector } from "react-redux";
import { handleSignup } from "../../actions/LoginAction";


const SignUp=()=> {

  const history = useHistory()
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name:"",
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

  const userSignup = (e) => {
    e.preventDefault();
    try {
      dispatch(handleSignup(state.name,state.email, state.password,history));
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
                id="name"
                value={state.name}
                onChange={handleChange}
                placeholder=" Name"
               
              />
            </div>
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
              onClick={(e) => userSignup(e)}
            >
             Register Now
            </button>
          </form>
          <Link to="/">
            <div class="social-login">
              <h3>Log In</h3>
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
  );}
  export default SignUp