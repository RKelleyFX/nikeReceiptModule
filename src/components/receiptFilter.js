import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ReceiptFilter extends Component {
  render() {
    return (
      <div className="App">
        <Card className="text-center" style={{ width: '24rem' }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Filter Criteria</Form.Label>
                <Form.Control as="select" >
                  <option value={"name"}>Name</option>
                  <option value={"email"}>Email</option>
                  <option value={"phone"}>Phone</option>
                  <option value={"receiptNum"}>Receipt Number</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Input</Form.Label>
                <Form.Control as="textarea" rows="1" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ReceiptFilter;