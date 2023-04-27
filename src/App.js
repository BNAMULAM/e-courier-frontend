import "./App.css";
import Home from "./component/Home";
import UpdateCourier from "./component/DeliveryAgent/UpdateCourier";
import Login from "./component/signupandsignin/Login";
import Register from "./component/signupandsignin/Register";
import Logout from "./component/signupandsignin/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PlaceOrder from "./component/Order/PlaceOrder";
import Paybill from "./component/Transaction/Paybill";
import Viewbill from "./component/Transaction/Viewbill";
import ViewOrder from "./component/Order/ViewOrder";
import UpdateOrder from "./component/Order/UpdateOrder";
import CancelOrder from "./component/Order/CancelOrder";
import AddCourierdetails from "./component/DeliveryAgent/AddCourierdetails";
import ViewAllDetails from "./component/DeliveryAgent/ViewAllDetails";
import Cancelpayment from "./component/Transaction/Cancelpayment";
import CheckCourierDetailsById from "./component/DeliveryAgent/CheckCourierDetailsById";
import ViewOrdersByUserName from "./component/Order/ViewOrdersByUserName";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updatecourier" element={<UpdateCourier />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/paybill" element={<Paybill />} />
          <Route path="/viewbill" element={<Viewbill />} />
          <Route path="/vieworder" element={<ViewOrder />} />
          <Route path="/updateorder" element={<UpdateOrder />} />
          <Route path="/cancelorder" element={<CancelOrder />} />
          <Route path="/addcourierdetails" element={<AddCourierdetails />} />
          <Route path="/viewallcouriers" element={<ViewAllDetails />} />
          <Route path="/cancelbill" element={<Cancelpayment />} />
          <Route
            path="/trackingcourier"
            element={<CheckCourierDetailsById />}
          />
          <Route path="*" element={<Navigate to="/addcourierdetails" />} />
          <Route path="*" element={<Navigate to="/register" />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/placeorder" />} />
          <Route
            path="/viewOrdersByUsername"
            element={<ViewOrdersByUserName />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
