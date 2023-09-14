import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./DWSummary.css";

const DaywiseSummary = () => {
  return (
    <>
      <h1 className="headingFormSummary"> Day Wise Billing Summary</h1>
      <div className="container dayWiseForm">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="OprtrName">
            <Form.Label column sm={3}>
              Operator Name
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Ashish</option>
                <option>Deepak</option>
                <option>Arnab</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DateFrom">
            <Form.Label column sm={3}>
              Report From Date
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DateTo">
            <Form.Label column sm={3}>
              Report Till Date
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="BillNoAndItmQty">
            <Form.Label column sm={3}>
              Bill Number & Item Quantity
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="AddChallan">
            <Form.Label column sm={3}>
              Add Chalans
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="AddChallan">
            <Form.Label column sm={3}>
              Report For
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Reason 1</option>
                <option>Reason 2</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <hr class="hr" />
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default DaywiseSummary;
