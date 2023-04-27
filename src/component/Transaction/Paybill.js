import axios from "axios";
import React, { useState } from "react";
import Nav from "../../Nav";
import "./transaction.css";

function Paybill() {
  const [customerId, setCustomerId] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const addPayment = async (e) => {
    e.preventDefault();

    if (!customerId || !trackingNumber || !amount || !method) {
      setErrorMessage("please Enter all fields");
      return;
    }

    const pay = { customerId, trackingNumber, amount, method };
    axios
      .post("http://localhost:8082/transaction/addPayment", pay)
      .then((response) => {
        console.log(response.data);
        alert(
          "Payment successful for the Transaction Id: " +
            response.data.transactionId
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Error occured");
      });
  };
  return (
    <div>
      <Nav />
      <div className="card mx-auto mt-5" id="payBillCard">
        <div className="card-header text-center">
          <h4 className="card-title">Payment</h4>
        </div>

        <div className="card-body">
          <form>
            <div className="row mb-4">
              <label className="col-3 col-form-label ">Customer ID:</label>
              <div className="col-8">
                <input
                  type="number"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  className="form-control"
                  placeholder="Enter Customer Id"
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label ">trackingNumber:</label>
              <div className="col-8">
                <input
                  type="number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="form-control"
                  placeholder="Enter Tracking Number"
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label ">Amount:</label>
              <div className="col-8">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                  placeholder="Enter Amount "
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label ">Method:</label>
              <div className="col-8">
                <select
                  type="text"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="CARD">CARD</option>
                  <option value="CASH">CASH</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={addPayment}
                className="btn btn-sm btn-outline-primary mt-3"
              >
                Submit
              </button>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Paybill;
