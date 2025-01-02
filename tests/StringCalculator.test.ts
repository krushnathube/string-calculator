import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  it('should return the sum of any number of numbers', () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

});
