import React from "react";
import { useState } from "react";
import axios from "axios";
import "./transaction.css";
import Nav from "../../Nav";
import { Link } from "react-router-dom";

function Viewbill() {
  const [transactionId, setTransactionId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [userData, setuserData] = useState({
    customerId: 0,
    trackingNumber: 0,
    amount: 0,

    method: 0,
  });

  const viewbill = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8082/transaction/transactionById/${transactionId}`,
        {
          params: {
            id: transactionId,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setuserData({
          customerId: res.data.customerId,
          trackingNumber: res.data.trackingNumber,
          amount: res.data.amount,

          method: res.data.method,
        });
        setShowForm(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Nav />
      <div className="m-auto" id="viewbill">
        <h6 className="mt-4 text-center">View Bill</h6>
        {/* { */}
        <form className="mb-4">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter Transaction Id"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="form-control w-75"
            />
            <button
              type="submit"
              onClick={viewbill}
              className="btn btn-outline-primary ms-3"
            >
              View
            </button>
          </div>
        </form>

        {showForm && (
          <div className="card">
            <div className="card-header">
              <div className="card-title text-center">Bill Details</div>
            </div>
            <div className="card-body">
              <div className="mb-2 row">
                <div className="col">Customer Id</div>
                <div className="col">{userData.customerId}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">Tracking Number</div>
                <div className="col">{userData.trackingNumber}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">Amount</div>
                <div className="col">{userData.amount}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">Transaction Method</div>
                <div className="col">{userData.method}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Viewbill;
