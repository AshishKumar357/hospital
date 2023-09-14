import React from "react";
import { Form, Button, Row, Col, Navbar, Container } from "react-bootstrap";
import "./BillOperation.css";
import { Link } from "react-router-dom";

const BillOperations = () => {
  return (
    <div className="container">
      <h1 className="headingFormBillOps"> Bill Operations</h1>
      <div className="container dayWiseForm">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="BillNumber">
            <Form.Label column lg={2}>
              Bill Number
            </Form.Label>
            <Col lg={5}>
              <Form.Control
                type="text"
                placeholder="Bill number (ex: 12346)"
              ></Form.Control>
            </Col>
            <Col sm={2}>
              <Button type="submit">Search</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <hr class="hr" />

      <div className="searchRes">
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              <Col sm={1}>Bill Number</Col>
            </Navbar.Brand>
            <Navbar.Brand>
              <Col sm={3}>Patient Name </Col>
            </Navbar.Brand>
            <Navbar.Brand>
              <Col sm={1}>Date Of Issue</Col>
            </Navbar.Brand>
            <Navbar.Brand>
              <Col sm={3}>Issuer</Col>
            </Navbar.Brand>
            <Navbar.Brand>
              <Col sm={1}>Payment Status</Col>
            </Navbar.Brand>
            <Navbar.Brand>
              <Col sm={2}>Actions</Col>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg" variant="ligh">
          <Container className="SearchRes">
            <Col sm={1}>1232345456</Col>
            <Col sm={3}>Ashish </Col>
            <Col sm={1}>12/02/2022</Col>
            <Col sm={3}>Deepak</Col>
            <Col sm={1}>Full Paid </Col>
            <Col sm={2}>
              <Link to="/view">View </Link> / <Link to="/modify">Modify </Link>{" "}
              / <Link to="/delete">Delete </Link>
            </Col>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg" variant="ligh">
          <Container className="SearchRes">
            <Col sm={1}>23456754</Col>
            <Col sm={3}>adsfghj </Col>
            <Col sm={1}>24/12/2023</Col>
            <Col sm={3}>asfdghfd</Col>
            <Col sm={1}>Unpaid</Col>
            <Col sm={2}>
              <Link to="/view">View </Link> / <Link to="/modify">Modify </Link>{" "}
              / <Link to="/delete">Delete </Link>
            </Col>
          </Container>
        </Navbar>
        <Navbar bg="light" expand="lg" variant="ligh">
          <Container className="SearchRes">
            <Col sm={1}>2345754</Col>
            <Col sm={3}>adsfghj </Col>
            <Col sm={1}>24/12/2023</Col>
            <Col sm={3}>asfdghfd</Col>
            <Col sm={1}>Unpaid</Col>
            <Col sm={2}>
              <Link to="/view">View </Link> / <Link to="/modify">Modify </Link>{" "}
              / <Link to="/delete">Delete </Link>
            </Col>
          </Container>
        </Navbar>
      </div>
      <hr class="hr" />
    </div>
  );
};

export default BillOperations;
