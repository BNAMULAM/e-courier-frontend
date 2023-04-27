import React, { useState } from "react";
import "./AddCourierdetails.css";
import axios from "axios";
import Nav from "../../Nav";
function CheckCourierDetailsById() {
  const [courierId, setCourierId] = useState("");
  const [userData, setUserData] = useState({
    courierId: 0,
    customerId: 0,
    trackingNumber: 0,
    recievedAt: "",
    status: 0,
  });
  const [showForm, setShowForm] = useState(false);
  const handleCheckCourier = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8082/courierdetails/check/" + courierId)
      .then((res) => {
        console.log(res);
        if (res.data == null) {
          alert("No data found");
        }

        setUserData({
          courierId: res.data.courierId,
          customerId: res.data.customerId,
          trackingNumber: res.data.trackingNumber,
          recievedAt: res.data.recievedAt,
          status: res.data.status,
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
      <div className="m-auto" id="trackCourier">
        <h6 className="mt-4 text-center">Track-Courier</h6>

        {
          <form className="mb-4">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Enter Courier ID"
                value={courierId}
                onChange={(e) => setCourierId(e.target.value)}
                className="form-control w-75"
              />
              <button
                type="submit"
                onClick={handleCheckCourier}
                className="btn btn-outline-primary ms-3"
              >
                Submit
              </button>
            </div>
                 
          </form>
        }
        {showForm && (
          <div className="card">
            <div className="card-header">
              <div className="card-title text-center"> Courier Details</div>
            </div>
            <div className="card-body">
              <div className="mb-2 row">
                <div className="col">CourierId</div>
                <div className="col">{userData.courierId}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">CustomerId</div>
                <div className="col">{userData.customerId}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">Tracking Number</div>
                <div className="col">{userData.trackingNumber}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">Received At</div>
                <div className="col">{userData.recievedAt}</div>
              </div>
              <div className="mb-2 row">
                <div className="col">status</div>
                <div className="col">{userData.status}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CheckCourierDetailsById;
