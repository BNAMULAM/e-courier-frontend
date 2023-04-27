import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css";
import Nav from "../../Nav";
function Login() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [loginErrorMessage, setLoginErrorMessage] = useState();
  const navigate = useNavigate();
  // const{userName,password}=user;
  const formDataChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post(
        "http://localhost:8082/users/login",
        {},
        {
          params: user,
        }
      )

      .then((response) => {
        if (response.data.message === "Login Successfull") {
          localStorage.setItem("status", "true");
          console.log(response.data.message);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("username", response.data.userName);
          console.log(response.data);
          navigate("/");
          alert("Login successful");
        } else {
          setLoginErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be greater than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must not be greater than 10 characters";
    }
    return errors;
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="card mx-auto mt-5" id="login">
          <div className="card-header text-center">
            <h3 className="card-title">SignIn</h3>
          </div>
          <div className="card-body">
            <p>{loginErrorMessage} </p>

            <form>
              <div className="registers">
                <div className="row mb-4">
                  <label className="col-3 col-form-label">UserName</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="userName"
                      value={user.userName}
                      onChange={formDataChangeHandler}
                      placeholder="Enter username"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <label className="col-3 col-form-label">Password</label>
                  <div className="col-8">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={formDataChangeHandler}
                      placeholder="Enter password"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    value="SignIn"
                    className="btn btn-sm btn-outline-primary mt-3"
                    onClick={handleFormSubmit}
                  >
                    Login
                  </button>
                </div>
                <p>
                  Not Yet Registered ?{" "}
                  <Link to={"/register"} className="login">
                    SignUp
                  </Link>{" "}
                  here{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
