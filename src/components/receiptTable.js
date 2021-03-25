import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import Card from "react-bootstrap/Card";
import Moment from 'moment';

class ReceiptTable extends Component {
  render() {

    const receipts = this.props.receipts;

    const rows = receipts.map(p => (
      <tr key={p.ID}>
          <td>
            {Moment(p.PurchaseDate).format('MM-DD-YYYY')}
          </td>
          <td>{JSON.parse(p.Name)}</td>
          <td>{JSON.parse(p.Email)}</td>
          <td>{JSON.parse(p.Phone)}</td>
          <td>{JSON.parse(p.ReceiptNumber)}</td>
          <td>{JSON.parse(p.ReceiptTotal)}</td>
          <td><button>View</button></td>
      </tr>
    ));

    return (
      <div className="App">
        <Card>
          <Card.Title></Card.Title>
          <Card.Body>
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Receipt Number</th>
                  <th>Receipt Total</th>
                  <th>View Receipt</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ReceiptTable;