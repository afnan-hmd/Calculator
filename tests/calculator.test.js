// calculator.test.js
const { operate, resetDisplay, resetOperation } = require('./calculator');

describe('Calculator Tests', () => {
  
  // Test for the operate function
  test('should correctly add two numbers', () => {
    const result = operate(3, 2, '+');
    expect(result).toBe(5);
  });

  test('should correctly subtract two numbers', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe(2);
  });

  test('should correctly multiply two numbers', () => {
    const result = operate(4, 3, '*');
    expect(result).toBe(12);
  });

  test('should correctly divide two numbers', () => {
    const result = operate(6, 3, '/');
    expect(result).toBe(2);
  });

  test('should return "Error" when dividing by zero', () => {
    const result = operate(6, 0, '/');
    expect(result).toBe('Error');
  });

  // Test for resetDisplay function
  test('should reset the calculator display state correctly', () => {
    resetDisplay(); // calling reset should reset the state
    expect(previousNum).toBe(0);
    expect(currentNum).toBeNull();
    expect(operator).toBeNull();
  });

  // Test for resetOperation function
  test('should reset the operator and currentNum correctly', () => {
    previousNum = 5;
    currentNum = 3;
    operator = '+';

    resetOperation(); // calling resetOperation should reset currentNum and operator
    expect(currentNum).toBeNull();
    expect(operator).toBeNull();
  });

});
