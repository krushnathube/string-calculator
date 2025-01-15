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

  it('should handle newlines as delimiters', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
  });

  it('should return false when not found custom dilimiter', () => {
    expect(calculator.isCustomDilimiter("1,2")).toBe(false);
  });

  it('should return true when found custom dilimiter', () => {
    expect(calculator.isCustomDilimiter("//;\n1;2")).toBe(true);
  });
});
