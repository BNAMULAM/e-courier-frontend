import React,{ useState } from 'react'
import axios from 'axios';
import "./cancelorder.css"
 import Nav from '../../Nav';
function CancelOrder() {
  const [trackingNumber, setTrackingNumber] = useState('');
   const handleDelete = async (e) => {
     e.preventDefault();
      try {
        await axios.delete(`http://localhost:8082/order/cancel/${trackingNumber}`);
        console.log("Order Has Been Cancelled");
          alert('Order has been Cancelled Successfully');
        }
        catch (err) {
           console.error(err);
           alert("Tracking Number not Found")
         }
   }
  return (
    <div><Nav/>
    <div className='cancel' >
      <form>
       
        <h2>Cancel My Order</h2><br/>
        <input type="text" name="trackingNumber" value={trackingNumber} onChange={(e)=> setTrackingNumber(e.target.value)}
        placeholder="Enter Tracking Number"/>
        
        <br/>
        <br/>
        <button className='btns' type="submit" onClick={handleDelete}>Submit</button>
       
      </form>
    </div>
    </div>
  )
}
 
export default CancelOrder
