import calculate, { plus, minus } from './calculate';

test('calculate', () => {
  expect(calculate('+', 1, 2)).toBe(3);
  expect(calculate('-', 10, 2)).toBe(8);
});
