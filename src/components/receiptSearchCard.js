import React, { Component } from 'react';

import ReceiptFilter from './receiptFilter';
import ReceiptTable from './receiptTable';

import '../styles/style.css';


class ReceiptCard extends Component {

  render () {
    return (
      <div className="receiptCard">
        <ReceiptFilter />
        <ReceiptTable />
      </div>
    );
  }
}

export default ReceiptCard;