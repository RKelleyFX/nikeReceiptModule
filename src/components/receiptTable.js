import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import { Card } from "react-bootstrap";

class ReceiptTable extends Component {
  render() {

/*     const rows = posts.map(p => (
      <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.page}</td>
          <td>
              {Moment(p.createdAt).format('MM-DD-YYYY')}
          </td>
          <td><input type='checkbox'></input></td>
      </tr>
    )); */

    return (
      <div className="App">
        <Card>
          <Card.Body>
            <Table striped bordered hover size="sm">
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
                <tr>
                  <td>03-21-21</td>
                  <td>Ryan Kelley</td>
                  <td>rkelleyfx@gmail.com</td>
                  <td>818-653-5213</td>
                  <td>NKPDX-032121-421</td>
                  <td>$212.50</td>
                  <td>x</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ReceiptTable;