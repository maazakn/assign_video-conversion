import { axiosInstance } from "../helper/useFetch";


export const handleLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.clear();
    history.push("/");
    return dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };
};

export const handleLogin = (email, password, history) => {
  return (dispatch) => {
    return axiosInstance
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          localStorage.setItem("email", JSON.stringify(res.data.data.email));
          setTimeout(() => {
            history.push("/city");
          }, 2000);
          return dispatch({
            type: "LOGIN",
            payload: res.data.data,
          });
        }
      })
      .catch((error) => {
        alert("Invalid Credentials");
      });
  };
  return false;
};

export const handleSignup = (name, email, password, history) => {
  return (dispatch) => {
    return axiosInstance
      .post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.data.status == "success") {
          setTimeout(() => {
            history.push("/");
          }, 2000);
          return dispatch({
            type: "SIGNUP",
            payload: res.data,
          });
        } else {
          alert("Email already exists");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };
  return false;
};
