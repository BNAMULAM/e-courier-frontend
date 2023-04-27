import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sign.css";
import axios from "axios";
import Nav from "../../Nav";
function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNmber] = useState("");
  const [role, setRole] = useState(0);

  const [errors, setErrors] = useState({});
  const nameRegex = /^[a-zA-Z]+$/;

  const mobileRegex = /^[0-9]{10}$/;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    // Validate userName
    if (!userName) {
      validationErrors.userName = "Username cannot be empty";
    } else if (!nameRegex.test(userName)) {
      validationErrors.userName = "Username can only contain alphabets";
    }
    // Validate password
    if (!password) {
      validationErrors.password = "Password cannot be empty";
    }
    if (!mobileNumber) {
      validationErrors.mobileNumber = "Mobile number cannot be empty";
    } else if (!mobileRegex.test(mobileNumber)) {
      validationErrors.mobileNumber =
        "Mobile number can only contain 10 digits";
    }
    // Set the validation errors state
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const user = { userName, password, mobileNumber, role };
      axios
        .post("http://localhost:8082/users/register", user)
        .then((response) => {
          console.log(response.data);
          alert("your registration successful");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <div>
      <Nav />

      <div className="card mx-auto mt-5" id="register">
        <div className="card-header text-center">
          <h3 className="card-title">SignUp</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="registers">
              <div className="row mb-4">
                <label className="col-3 col-form-label">UserName</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter username"
                    className="form-control"
                  />
                  {errors.userName && (
                    <p className="text-danger">{errors.userName}</p>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <label className="col-3 col-form-label">Password</label>
                <div className="col-8">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <label className="col-3 col-form-label">MobileNumber</label>
                <div className="col-8">
                  <input
                    type="number"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNmber(e.target.value)}
                    placeholder="Enter MobileNumber"
                    className="form-control"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <label className="col-3 col-form-label">Role</label>
                <div className="col-8">
                  <select
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option>Role</option>
                    <option value={0}>DELIVERY_AGENT</option>
                    <option value={1}>CUSTOMER</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="btn btn-sm btn-outline-primary mt-3"
                >
                  Register
                </button>
              </div>
              <p>
                Already Registered ?{" "}
                <Link to={"/login"} className="login">
                  Login
                </Link>{" "}
                here{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
