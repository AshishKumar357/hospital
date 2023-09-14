import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./DWSummary.css";

const BillwiseSummary = () => {
  return (
    <>
      <h1 className="headingFormSummary"> Bill Wise Summary</h1>
      <div className="container dayWiseForm">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="OprtrName">
            <Form.Label column lg={4}>
              Operator Name
            </Form.Label>
            <Col lg={5}>
              <Form.Select>
                <option>Select</option>
                <option>Ashish</option>
                <option>Deepak</option>
                <option>Arnab</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DateFrom">
            <Form.Label column sm={4}>
              Report From Date
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DateTo">
            <Form.Label column sm={4}>
              Report Till Date
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="date" />
            </Col>
          </Form.Group>
          <hr class="hr" />

          <Form.Group as={Row} className="mb-3" controlId="BillType">
            <Form.Label column sm={4}>
              Bill type (Cash/Credit/Discount)
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Cash</option>
                <option>Credit</option>
                <option>Discount</option>
                <option>All</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="ClubByType">
            <Form.Label column sm={4}>
              Club sales by Bill Type
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
            <Form.Label column sm={4}>
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
          <hr class="hr" />

          <Form.Group as={Row} className="mb-3" controlId="PatientCode">
            <Form.Label column sm={4}>
              Patient Code
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Patients Code (Ex: 1234553)"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="Prescriber Code">
            <Form.Label column sm={4}>
              Prescriber Code
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Prescriber Code (Ex: 9999)"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="ReportFor">
            <Form.Label column sm={4}>
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

          <Form.Group as={Row} className="mb-3" controlId="reportType">
            <Form.Label column sm={4}>
              Report Type
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Summary</option>
                <option>Detailed Summary</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DiscountBillSign">
            <Form.Label column sm={4}>
              Discounted Bill Sign
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="DayTotal">
            <Form.Label column sm={4}>
              Day Total
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="ItemDetails">
            <Form.Label column sm={4}>
              Item Details
            </Form.Label>
            <Col sm={5}>
              <Form.Select>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
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

export default BillwiseSummary;
