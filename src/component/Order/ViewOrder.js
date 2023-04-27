import axios from "axios";
import Button from "@mui/material/Button";
import "./vieworder.css";
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

function ViewAllOrders() {
  const [prop, setProp] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8082/order/viewallorders").then((res) => {
        setProp(res.data);
        console.log(res.data.trackingNumber);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const viewData = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Nav />
      <div>
        <br />
        <div className="vb">
          {/* <Button onClick={viewData} align='center'>View Orders</Button> */}
        </div>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {prop
                ? prop.map((p) => (
                    <StyledTableRow key={p.trackingNumber}>
                      <StyledTableCell component="th" scope="row">
                                                                                                                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {p.trackingNumber}
                      </StyledTableCell>

                      <StyledTableCell align="right">{p.name}</StyledTableCell>
                      <StyledTableCell align="right">
                        {p.address}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.mobileNo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.fromLocation}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.fromPinCode}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.toLocation}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.toPinCode}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.amount}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default ViewAllOrders;
