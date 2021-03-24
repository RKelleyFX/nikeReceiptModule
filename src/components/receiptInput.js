import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/style.css";

class ReceiptInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.createReceipt = this.createReceipt.bind(this)
    this.name = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.receiptNumber = React.createRef();
    this.receiptTotal = React.createRef();
  }

  createReceipt() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      {
        "name": this.name.current.value,
        "email": this.email.current.value,
        "phone": this.phone.current.value,
        "receiptNumber": this.receiptNumber.current.value,
        "receiptTotal": this.receiptTotal.current.value
      }
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://x8zoqyc1z0.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }


  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card className="text-center" style={{ width: '24rem' }}>
              <Card.Body>
                <Form className="receiptInput">
                  <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows="1" ref={this.name} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control as="textarea" rows="1" ref={this.email} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea4">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control as="textarea" rows="1" ref={this.phone} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea5">
                    <Form.Label>Receipt Number</Form.Label>
                    <Form.Control as="textarea" rows="1" ref={this.receiptNumber} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea6">
                    <Form.Label>Receipt Total</Form.Label>
                    <Form.Control as="textarea" rows="1" ref={this.receiptTotal} />
                  </Form.Group>
                  <Button variant="primary" onClick={this.createReceipt}>
                    Submit Receipt
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default ReceiptInput;