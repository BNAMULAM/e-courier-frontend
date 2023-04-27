import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Nav";
import "./AddCourierdetails.css";
const AddCourierdetails = () => {
  const [courierId, setCourierId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [recievedAt, setRecievedAt] = useState("");
  const [status, setStatus] = useState("");

  
  const dateRegex =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  const couRegex = /^[0-9]$/;
  const trackRegex = /^[0-9]{6}$/;
  
  const [errors, setErrors] = useState({});

  const handleAddCourier = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!courierId) {
      validationErrors.courierId = "Courier Id should not be empty";
    } else if (!couRegex.test(courierId)) {
      validationErrors.courierId = "Courier Id should contain only digits";
    }
    if (!customerId) {
      validationErrors.customerId = "Customer Id should not be empty";
    } else if (!couRegex.test(customerId)) {
      validationErrors.customerId = "Customer Id should contain only digits";
    }
    if (!trackingNumber) {
      validationErrors.trackingNumber = "Tracking Number should not be empty";
    } else if (!trackRegex.test(trackingNumber)) {
      validationErrors.trackingNumber =
        "Tracking Number should contain 6 digits";
    }
    if (!recievedAt) {
      validationErrors.recievedAt = "Received At should not be empty";
    } else if (!dateRegex.test(recievedAt)) {
      validationErrors.recievedAt = "Received At should be in Date format";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const courier = {
        courierId,
        customerId,
        trackingNumber,
        recievedAt,
        status,
      };

      axios
        .post("http://localhost:8082/courierdetails/add", courier)
        .then((response) => {
          console.log(response.data);

          alert("Courier added successfully!");
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred while adding the courier");
        });
    }
  };
  return (
    <div>
      <Nav />
      <div className="card mx-auto mt-3" id="addcourier">
        <div className="card-header text-center">
          <h6 className="card-title">Add Courier Details</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleAddCourier}>
            <div className="row mb-4">
              <label className="col-3 col-form-label">CourierId:</label>
              <div className="col-8">
                <input
                  type="number"
                  name="courierId"
                  value={courierId}
                  onChange={(e) => setCourierId(e.target.value)}
                  className="form-control"
                  placeholder="Enter CourierId"
                />
                {errors.courierId && (
                  <p className="text-danger">{errors.courierId}</p>
                )}
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label">CustomerId:</label>
              <div className="col-8">
                <input
                  type="number"
                  name="customerId"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  className="form-control"
                  placeholder="Enter CustomerId"
                />
                {errors.customerId && (
                  <p className="text-danger">{errors.customerId}</p>
                )}
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label"> TrackingNumber:</label>
              <div className="col-8">
                <input
                  type="number"
                  name="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="form-control"
                  placeholder="Enter TrackingNumber"
                />
                {errors.trackingNumber && (
                  <p className="text-danger">{errors.trackingNumber}</p>
                )}
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label"> Recieved At:</label>
              <div className="col-8">
                <input
                  type="text"
                  name="recievedAt"
                  value={recievedAt}
                  onChange={(e) => setRecievedAt(e.target.value)}
                  className="form-control"
                  placeholder="Enter Received At"
                />
                {errors.recievedAt && (
                  <p className="text-danger">{errors.recievedAt}</p>
                )}
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label">Status:</label>
              <div className="col-8">
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="0">ORDER_PLACED</option>
                  <option value="1">IN_TRANSIT</option>
                  <option value="2">OUT_FOR_DELIVERY</option>
                  <option value="3">DISPATCHED</option>
                  <option value="4">DELIVERED</option>
                  <option value="5">RETURNED</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary my-3" type="submit">
              Add Courier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddCourierdetails;
