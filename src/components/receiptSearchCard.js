import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import ReceiptTable from './receiptTable';

import '../styles/style.css';


class ReceiptCard extends Component {
  constructor(props) {
    super(props)
    this.state = { receipts: [], filterReceipts: [], dataReq: false, filterReq: false };
    this.dataType = React.createRef();
    this.data = React.createRef();
    this.filterReq = this.filterReq.bind(this)
  }

  componentDidMount() {
    this.getReceipts();
  }

  async getReceipts() {

    var requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch("https://ce8k8t8kvk.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
      .then(response => response.json())
      .then((data) => {
        this.setState({ receipts: data });
        this.setState({ dataReq: true });
      })
      .catch(error => console.log('error', error));
    }

  async filterReq() {

    var filterData;
    var receipts = this.state.receipts.Items;

    if (this.dataType.current.value === "Name") {
      filterData = receipts.filter(receipt => JSON.parse(receipt.Name).toLowerCase().includes(this.data.current.value.toLowerCase()));
    }
    if (this.dataType.current.value === "Phone") {
      filterData = receipts.filter(receipt => JSON.parse(receipt.Phone).toLowerCase().includes(this.data.current.value.toLowerCase()));
    }
    if (this.dataType.current.value === "Email") {
      filterData = receipts.filter(receipt => JSON.parse(receipt.Email).toLowerCase().includes(this.data.current.value.toLowerCase()));
    }  
    if (this.dataType.current.value === "ReceiptNumber") {
      filterData = receipts.filter(receipt => JSON.parse(receipt.ReceiptNumber).toLowerCase().includes(this.data.current.value.toLowerCase()));
    }     

    this.setState({ filterReceipts: filterData });
    
    if (this.state.filterReceipts.length === 0) {
      this.setState({ filterReq: false });
    } else {
      this.setState ({ filterReq: true });
    }
    
  }

  render() {
    let tableRender;

    if (this.state.dataReq === true) {
      if (this.state.filterReq === true) {
        tableRender = <ReceiptTable receipts={this.state.filterReceipts} />
      } else {
        tableRender = <ReceiptTable receipts={this.state.receipts.Items} />
      }
    } else {
      tableRender = <h1> Awaiting Filter </h1>
    }

    return (
      <div className="receiptCard">
        <Container fluid>
          <Row>
            <Col></Col>
            <Col>
              <Card className="text-center" style={{ width: '24rem' }}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Filter Criteria</Form.Label>
                      <Form.Control as="select" ref={this.dataType}>
                        <option value={"Name"}>Name</option>
                        <option value={"Email"}>Email</option>
                        <option value={"Phone"}>Phone</option>
                        <option value={"ReceiptNumber"}>Receipt Number</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Name Search</Form.Label>
                      <Form.Control as="textarea" rows="1" ref={this.data} onChange={this.filterReq} />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              {tableRender}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReceiptCard;