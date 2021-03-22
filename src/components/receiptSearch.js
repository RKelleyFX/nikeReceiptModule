import React, { Component } from 'react';

import ReceiptCard from './receiptSearchCard';
import ReceiptInput from './receiptInput';


class ReceiptSearch extends Component {
    constructor (props) {
        super(props)
        this.state = { inputTrigger: false }
        this.viewInput = this.viewInput.bind(this)
    } 

    componentDidMount() {
        
    }

    viewInput() {
        let trigger = this.state.inputTrigger;

        if(trigger !== true) {
            this.setState({ inputTrigger: true })
        } else {
            this.setState({ inputTrigger: false })
        } 
    };

  render () {

    let viewComp;
    const inputView = this.state.inputTrigger;

    if (inputView) {
        viewComp = <ReceiptInput />
    } else {
        viewComp = <div></div>
    }

    return (
      <div className="App">
        <ReceiptCard />
        <button onClick={this.viewInput}>Receipt Input</button>
        {viewComp}
      </div>
    );
  }
}

export default ReceiptSearch;