import React, { useState } from 'react';

function Calculator({ onResultUpdate }) {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    onResultUpdate('');
  };

  const handleCalculate = () => {
    const tokens = input.split(/([+\-*/])/);
    let currentResult = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseFloat(tokens[i + 1]);

      if (isNaN(nextNumber)) {
        onResultUpdate('Erro');
        return;
      }

      switch (operator) {
        case '+':
          currentResult += nextNumber;
          break;
        case '-':
          currentResult -= nextNumber;
          break;
        case '*':
          currentResult *= nextNumber;
          break;
        case '/':
          if (nextNumber === 0) {
            onResultUpdate('Erro');
            return;
          }
          currentResult /= nextNumber;
          break;
        default:
          onResultUpdate('Erro');
          return;
      }
    }

    setInput(currentResult.toString());
    onResultUpdate(currentResult);
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div>{input}</div>
      </div>
      <div style={styles.buttons}>
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={value === '=' ? handleCalculate : () => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
        <button onClick={handleClear} style={styles.clearButton}>Clear</button>
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  display: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    textAlign: 'right',
    fontSize: '24px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  clearButton: {
    gridColumn: 'span 4',
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '18px',
  },
};

export default Calculator;
