import React, { useState } from "react";
import axios from "axios";

import Nav from "../../Nav";
function Cancelpayment() {
  const [transactionId, setTransactionId] = useState("");
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `http://localhost:8082/transaction/cancelPayment/${transactionId}`
      );
      console.log("Payment Has Been Cancelled");
      alert("Payment has been Cancelled Successfully");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Nav />
      <div className="m-auto" id="cancelbill">
        <h6 className="mt-4 text-center">Cancel Bill</h6>
        <form onSubmit={handleDelete}>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter Transaction Id"
              name="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="form-control w-75"
            />
            <button
              type="submit"
              // onClick={handleDelete}
              className="btn btn-outline-primary ms-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cancelpayment;
