import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Nav from "../../Nav";
import { Link } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function ViewOrdersByUserName() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let username = localStorage.getItem("username");
    axios
      .get("http://localhost:8082/order/viewOrderByUserName/" + username)
      .then((res) => {
        setOrders(res.data);
        console.log(orders + "    _____________");
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div>
        <br />
        <div className="vb"></div>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Tracking Number</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Mobile Number</StyledTableCell>
                <StyledTableCell align="right">From Location</StyledTableCell>
                <StyledTableCell align="right">From PinCode</StyledTableCell>
                <StyledTableCell align="right">To Location</StyledTableCell>
                <StyledTableCell align="right">To PinCode</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <StyledTableRow key={order.trackingNumber}>
                    <StyledTableCell component="th" scope="row">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {order.trackingNumber}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {order.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.mobileNo}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.fromLocation}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.fromPinCode}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.toLocation}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.toPinCode}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.amount}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Link to="/updateorder">
                        <button type="submit">Update</button>
                      </Link>
                      &nbsp;
                      <Link to="/cancelorder">
                        <button type="submit">Cancel</button>
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewOrdersByUserName;
