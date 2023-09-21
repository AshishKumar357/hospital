import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import logoImg from "./../../Images/logo.png";
import "./../../screens/LandingPage/LandingPage.css";

import { Button } from "react-bootstrap";

const invoice = (props) => {
  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <span className="BillHeading">
                <img className="LogoImgOnBill" alt="logoImage" src={logoImg} />
                <h1 style={{ color: "#000000", fontSize: "60px" }}>
                  Mehta Hospital
                </h1>
              </span>
              <div>
                <h6>
                  Behind Honda Showroom, <br />
                  Near Rawat HP gas Agency, <br />
                  N.H.8, Kotputli, Jaipur- 303108
                </h6>
              </div>
              <br />
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  TO: <span style={{ color: "#5d9fc5" }}>Chetan Prakash</span>
                  {/*  {props.Name} */}
                </li>
                <li className="text-muted">DholiDub, Alwar</li>
                <li className="text-muted">Rajasthan, India</li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 998 736 4822
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Invoice ID:</span> 123456
                  {props.InvoiceID}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>Jun
                  23,2021 {props.InvoiceDate}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Time: </span> 10:23 AM
                  {props.InvoiceTime}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                    Unpaid{props.InvoiceStatus}
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>Paracetamol</td>
                  <td>4</td>
                  <td>05</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cipla Cough Syrup </td>
                  <td>1</td>
                  <td>80</td>
                  <td>80</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>ORS pouch</td>
                  <td>3</td>
                  <td>15</td>
                  <td>45</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <div className="BillTotals">
              <span>SubTotal : </span> 145 <br />
              <span>Tax(10%) : </span> 14.5 <br />
              <span> Total Amount : </span>
              <span style={{ fontSize: "25px" }}>160 </span>
            </div>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10" style={{ textAlign: "center" }}>
              Thank you for your purchase
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <br />
      <Button className="printBtn" type="submit">
        Print
      </Button>
    </MDBContainer>
  );
};

export default invoice;
