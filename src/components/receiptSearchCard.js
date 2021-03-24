import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReceiptFilter from './receiptFilter';
import ReceiptTable from './receiptTable';

import '../styles/style.css';


class ReceiptCard extends Component {
  constructor (props) {
    super(props)
    this.state = { receipts: [], dataReq: false }
  }

  componentDidMount () {
    this.getReceipts();
  }

  async getReceipts () {
    //var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "application/json");
    
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
      console.log(data);
    })
    .catch(error => console.log('error', error));
  }

  render () {
    let tableRender;

    if( this.state.dataReq === true) {
      tableRender = <ReceiptTable receipts={this.state.receipts}/> 
    } else {
     tableRender = <h1> Loading </h1>
    }

    return (
      <div className="receiptCard">
        <Container fluid>  
          <Row>
            <Col></Col>
            <Col>
              <ReceiptFilter />
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