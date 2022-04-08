import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculate from './logic/calculate';
import './Calculator.css';

function Calculator () {
  const btnValues = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const [state, setState] = useState({next:"", total:"", operation:""})

  const handleClick = (btn) => {
    if (btn === '=' && !state.total) {
      setState({total: state.next, next:"", operation:""} )

    } else {
      const {total, next, operation} = calculate(state, btn)

      setState({total, next, operation} )
    }

  }

  // Set class for each button to set their colors
  const btnClass = (param) => {
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

    return (
      <div className="wrapper">
        <div className="screen">
          {state.next || state.operation || state.total || 0}
        </div>
        <div className="btnBox">

          {/* Display buttons */}
          {btnValues.flat().map((btn) => (

            <button
              type="submit"
              key={uuidv4()}
              className={btnClass(btn)}
              onClick={() => {
                handleClick(btn);
              }}
            >
              {btn}
            </button>
          )) }
        </div>

      </div>
    );
}

Calculator.defaultProps = {
  value: '0',
};

export default Calculator;
