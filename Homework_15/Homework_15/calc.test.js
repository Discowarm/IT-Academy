const { default: expect } = require('expect');

const { Calculator } = require('./calculator.js');

describe("Operation Tests for programm calculator", function(){
  test(`method add should return sum numbers from array`, async () => {
    const calculator = new Calculator();
    const result = calculator.add(1, 2, 3, 5, 6, 7, 8, 9);
    expect(result).toBe(41);
    expect(result).toBeGreaterThan(40);
    expect(result).toBeLessThanOrEqual(41);
    expect(typeof result).toBe('number');
  });
  
  test(`method multiply should return multiply numbers from array`, async () => {
    const calculator = new Calculator();
    const result = calculator.multiply(2, 1, 4, 7, 3, 10, 9);
    expect(result).toBe(15120);
    expect(typeof result).toBe('number');
  });
  
  test(`method subtraction should return subtraction numbers `, async () => {
    const calculator = new Calculator();
    const result = calculator.subtraction(12, 9);
    expect(result).toBe(3);
    expect(typeof result).toBe('number');
  });
  
  test(`method divide should return division numbers `, async () => {
    const calculator = new Calculator();
    const result = calculator.divide(20, 4);
    expect(result).toBe(5);
    expect(typeof result).toBe('number');
  });
  
  test(`method exponentiation should return result of the exponent `, async () => {
    const calculator = new Calculator();
    const result = calculator.exponentiation(10);
    expect(result).toBe(100);
    expect(typeof result).toBe('string');
  });
});




