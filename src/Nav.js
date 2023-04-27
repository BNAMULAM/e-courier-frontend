import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Nav() {
  const userLoginStatus = localStorage.getItem("status");
  const userRole = localStorage.getItem("role");
  const username = localStorage.getItem("username");
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <img
        src="https://www.e-courier.com/wp-content/uploads/2019/12/e-Courier_logo-1.svg "
        className="logo"
      ></img>
      <nav>
        {!userLoginStatus && (
          <ul className="nav-links">
            <li>
              <Link style={navStyle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/login">
                Log in
              </Link>
            </li>
          </ul>
        )}
        {userRole === "CUSTOMER" ? (
          <ul className="customer">
            <li>
              <Link style={navStyle} to="/placeorder">
                Place Order
              </Link>
            </li>

            <li>
              <Link style={navStyle} to="/viewOrdersByUsername">
                View Order
              </Link>
            </li>

            <li>
              <Link style={navStyle} to="/trackingcourier">
                Track Courier
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/paybill">
                Pay Bill
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/viewbill">
                View Bill
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/cancelbill">
                Cancel Bill
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/logout">
                Log Out
              </Link>
            </li>
          </ul>
        ) : null}
        {userRole === "DELIVERY_AGENT" ? (
          <ul className="deliveryagent">
            <li>
              <Link style={navStyle} to="/vieworder">
                View Orders
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/addcourierdetails">
                Add CourierDetails
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/viewallcouriers">
                View Couriers
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/viewbill">
                View Bill
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/logout">
                Log Out
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
}

export default Nav;
