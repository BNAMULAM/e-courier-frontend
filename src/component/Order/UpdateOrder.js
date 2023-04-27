import React,{useState} from 'react'
import axios from 'axios';
import Nav from '../../Nav';
// import { Link } from "react-router-dom";


function UpdateOrder() {

        const [trackingNumber,setTrackingNumber]=useState("")
        const [name, setName] = useState("");
        const [address, setAddress] = useState("");
        const [mobileNo, setMobileNumber] = useState("");
        const [fromLocation, setFromLocation] = useState("");
        const [fromPinCode, setFromPinCode] = useState("");
        const [toLocation, setToLocation] = useState("");
        const [toPinCode, setToPinCode] = useState("");
        const [amount, setAmount] = useState("");
        const [errors, setErrors] = useState({});
  const [error,setError] = useState('');
  const mobileRegex = /^[7-9]\d{9}$/;
  const pincodeRegex = /^[0-9]{6}$/;
 
        const  updateOrder= async (e) => {
          let validationErrors = {};
          if (!name) {
            validationErrors.name = "Name should not be empty";
          }
          if(mobileNo == null || address ==null || fromLocation ==null || toLocation==null || fromPinCode==null|| toPinCode==null ||amount==null){
              setError("please Enter all fields");
              return;
          }
          if (!mobileNo) {
            validationErrors.mobileNo = "Mobile Number should not be empty";
          } else if (!mobileRegex.test(mobileNo)) {
            validationErrors.mobileNo = "Mobile Number Should Only Begin With 7,8,9";
          }
          if (!fromLocation) {
            validationErrors.fromLocation = "From Location should not be empty";
          }
          if (!toLocation) {
            validationErrors.toLocation = "To Location should not be empty";
          }
          if (!toPinCode) {
            validationErrors.toPinCode = "Pin Code should not be empty";
          } else if (!pincodeRegex.test(toPinCode)) {
            validationErrors.toPinCode = "Pin Code only contain 6 digits";
          }
          if (!address) {
            validationErrors.address = "Address should not be empty";
          }
          if (!amount) {
            validationErrors.amount = "Amount should not be empty";
          }
          if (!fromPinCode) {
            validationErrors.fromPinCode = "Pin Code should not be empty";
          } else if (!pincodeRegex.test(fromPinCode)) {
            validationErrors.fromPinCode = "Pin Code only contain 6 digits";
          }
          if (!trackingNumber) {
            validationErrors.trackingNumber = "Tracking Number should not be empty";
          }
          
          setErrors(validationErrors);
          if (Object.keys(validationErrors).length === 0) {
            e.preventDefault();
          const order = {  trackingNumber,name, address, mobileNo, fromLocation, fromPinCode, toLocation, toPinCode,amount };
          await axios.put('http://localhost:8082/order/update', order)
          .then(Response=>{
            console.log(order,"for tracking number "+Response.data.trackingNumber);
            alert('Your Details are Updated successfully');
          })
          .catch (err =>{
          console.error(err);
          alert("Error Occured")
          }
          );
          }
        
        }
          
          
          return(
            <div><Nav/>
            <div >
            <div className="cls1" >
              <h2>Update Your Order</h2><br/>
              
              <form>

              <label>Tracking Number</label><br/>
                <input type="num"  name="trackingNumber" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)}/>
                {errors.trackingNumber && <p className="text-danger">{errors.trackingNumber}</p>}
                <br/>
        
                <label>Name</label><br/>
                <input type="text"  name="name" value={name} onChange={e => setName(e.target.value)}/>
                {errors.name && <p className="text-danger">{errors.name}</p>}
                <br/>

                <label>Address</label><br/>
                <input type="text"  name="address" value={address} onChange={e => setAddress(e.target.value)} />
                {errors.address && <p className="text-danger">{errors.address}</p>}
                <br/>
   
                <label>Mobile Number</label><br/>
                <input type="tel" name="mobileNumber" value={mobileNo} onChange={e => setMobileNumber(e.target.value)} />
                {errors.mobileNo && <p className="text-danger">{errors.mobileNo}</p>}
                <br/>

                <label>From Location</label><br/>
                <input type="text"  name="fromLocation" value={fromLocation} onChange={e => setFromLocation(e.target.value)} />
                {errors.fromLocation && <p className="text-danger">{errors.fromLocation}</p>}
                <br/>
        
                <label>From Pincode</label><br/>
                <input type="numbers" name="fromPinCode" value={fromPinCode}  onChange={e => setFromPinCode(e.target.value)}  />
                {errors.fromPinCode && <p className="text-danger">{errors.fromPinCode}</p>}
                <br/>

                <label >To Location</label><br/>
                <input type="text"  name="toLocation" value={toLocation} onChange={e => setToLocation(e.target.value)} />
                {errors.toLocation && <p className="text-danger">{errors.toLocation}</p>}
                <br/>
           
                <label>To Pincode</label><br/>
                <input type="numbers" name="toPinCode" value={toPinCode}  onChange={e => setToPinCode(e.target.value)}/>
                {errors.toPinCode && <p className="text-danger">{errors.toPinCode}</p>}
                <br/>

                <label >Amount</label><br/>
                <input type="numbers" name="amount" value={amount}  onChange={e => setAmount(e.target.value)} />
                {errors.amount && <p className="text-danger">{errors.amount}</p>}
            
            <br/>
            <br/>
        
            <button className='btns' type="button" onClick={updateOrder}>Update Order</button>
            {/* <Link to='/cancel'>
             <button className='btn' type="submit" >Cancel Order</button></Link> */}
            </form>
            </div>
            </div>
            </div> 
            
          );
        }
        export default UpdateOrder;
        