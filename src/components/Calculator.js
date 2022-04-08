import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculate from './logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  btnValues = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    this.setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      btn,
    ));
  }

  // Set class for each button to set their colors
  btnClass = (param) => {
    switch (param) {
      case '0':
        return 'zero';

      case '÷':
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
    const { next, operation, total } = this.state;
    return (
      <div className="wrapper">
        <div className="screen">
          {next || operation || total || 0}
        </div>
        <div className="btnBox">

          {/* Display buttons */}
          {this.btnValues.flat().map((btn) => (

            <button
              type="submit"
              key={uuidv4()}
              className={this.btnClass(btn)}
              onClick={() => {
                this.handleClick(btn);
              }}
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
