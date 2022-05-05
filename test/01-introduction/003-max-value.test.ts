import { maxValue } from '../../src/01-introduction/003-max-value';

test('test_00', () => {
  expect(maxValue([4, 7, 2, 8, 10, 9])).toBe(10);
});

test('test_01', () => {
  expect(maxValue([10, 5, 40, 40.3])).toBe(40.3);
});

test('test_02', () => {
  expect(maxValue([-5, -2, -1, -11])).toBe(-1);
});

test('test_03', () => {
  expect(maxValue([42])).toBe(42);
});

test('test_04', () => {
  expect(maxValue([1000, 8])).toBe(1000);
});

test('test_05', () => {
  expect(maxValue([1000, 8, 9000])).toBe(9000);
});

test('test_06', () => {
  expect(maxValue([2, 5, 1, 1, 4])).toBe(5);
});
