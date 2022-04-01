import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import './Calculator.css';
import { v4 as uuidv4 } from 'uuid';

export class Calculator extends Component {
  btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  key = 0

  btnClass = (param) => {
    switch (param) {
      case 0:
        return 'zero';

      case '/':
      case 'X':
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
        <Textfit className="screen" mode="single" max={30}>
          {0}
        </Textfit>
        <div className="btnBox">

          {this.btnValues.flat().map((btn) => (
            <button
              type="submit"
              key={uuidv4()}
              className={this.btnClass(btn)}
              onClick={() => {
                console.log(`${btn} clicked!`);
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
