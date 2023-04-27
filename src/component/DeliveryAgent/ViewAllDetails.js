import axios from "axios";
import { useEffect, useState } from "react";
import "./AddCourierdetails.css";
import Nav from "../../Nav";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function ViewAllDetails() {
  const [prop, setProp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8082/courierdetails/view")
      .then((response) => {
        setProp(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div className="container">
        <br></br>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Courier Id</StyledTableCell>
                <StyledTableCell align="right">Customer Id</StyledTableCell>
                <StyledTableCell align="right">Tracking Number</StyledTableCell>
                <StyledTableCell align="right">Received At</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prop
                ? prop.map((p) => (
                    <StyledTableRow key="id">
                      <StyledTableCell component="th" scope="row">

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {p.courierId}
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        {p.customerId}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.trackingNumber}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.recievedAt}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {p.status}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Link to="/updatecourier">
                          <button type="submit">Update</button>
                        </Link>
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
export default ViewAllDetails;
