import React, { Component } from 'react';

import './styles/App.css';
import logo from './assets/logo.jpg';

import ReceiptSearch from './components/receiptSearch';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Receipt Filtering Component</h1>
          {/* <img src={logo} height='100' alt='NikeLogo'/> */}
          <ReceiptSearch />
        </header>
      </div>
    );
  }
}

export default App;
