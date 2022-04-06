import React, { Component } from 'react';
import calculate from './logic/calculate'
import './Calculator.css';
import { v4 as uuidv4 } from 'uuid';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        next: '',
        total: '',
        operation: ''
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (btn) {
    console.log("btn",btn);
    this.setState(state => 
     calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation
      } 
      , btn)

    )
  }
  
  btnValues = [
    ['C', '+-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  

  btnClass = (param) => {
    switch (param) {
      case '0':
        return 'zero';

      case '/':
      case 'x':
      case '-':
      case '+':
      case '=':
        return 'btn orange';

      default:
        return 'btn';
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="screen" >
          {this.state.next || this.state.operation || this.state.total || 0}
        </div>
        <div className="btnBox">

          {/* Display buttons */}
          {this.btnValues.flat().map((btn) => (
            
            <button
              type="submit"
              key={uuidv4()}
              className={this.btnClass(btn)}
              onClick={() =>
                {
                  this.handleClick(btn)
              }
              }
            >
              {btn}
            </button>
          )) }
        </div>

      </div>
    );
  }
}

Calculator.defaultProps = {
  value: '0',
};

export default Calculator;
