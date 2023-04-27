import axios from "axios";
import { useState } from "react";
import "./AddCourierdetails.css";
import Nav from "../../Nav";
function UpdateCourier() {
  const [courierId, setCourierId] = useState("");
  const [status, setStatus] = useState(0);
  const [customerDto, setCustomerDto] = useState(null);
  const handleUpdateCourier = (e) => {
    e.preventDefault();

    //console.log(status);
    console.log(courierId);

    axios
      .put(
        "http://localhost:8082/courierdetails/update/" +
          courierId +
          "/" +
          status
      )
      .then((response) => {
        console.log(response.data);
        setCustomerDto(response.data);
        console.log(customerDto);
        alert("Update SuccessFul");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Nav />
      <div className="card mx-auto mt-5" id="updateCourier">
        <div className="card-header text-center">
          <h5 className="card-title">Update Courier</h5>
        </div>

        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label className="col-3 col-form-label">Courier ID:</label>
              <div className="col-9">
                <input
                  type="text"
                  value={courierId}
                  onChange={(e) => setCourierId(e.target.value)}
                  className="form-control"
                  placeholder="Enter courier Id"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-3 col-form-label"> Status:</label>
              <div className="col-9">
                <select
                  name="status"
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="">select</option>
                  <option value="0">ORDER PLACED</option>
                  <option value="1">IN TRANSIT</option>
                  <option value="2">OUT FOR DELIVERY</option>
                  <option value="3">DISPATCHED</option>
                  <option value="4">DELIVERED</option>
                  <option value="5">RETURNED</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={handleUpdateCourier}
                className="btn btn-sm btn-outline-primary mt-3"
              >
                Update Courier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UpdateCourier;
