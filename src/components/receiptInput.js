import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ReceiptInput extends Component {
  constructor (props) {
    super(props)
    this.state = {  }
    this.createReceipt = this.createReceipt.bind(this)
} 

  createReceipt() {
    console.log("create receipt")
  }


  render () {
    return (
      <Card className="text-center" style={{ width: '24rem' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Date</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Name</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>Email</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea4">
            <Form.Label>Phone</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea5">
            <Form.Label>Receipt Number</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea6">
            <Form.Label>Receipt Total</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>
          <Button variant="primary" onClick={this.createReceipt}>
            Submit Receipt
          </Button>
        </Form>
      </Card.Body>
      </Card>
    );
  }
}

export default ReceiptInput;