import isPrime from '../../src/01-introduction/004-is-prime';

test('test_00', () => {
  expect(isPrime(2)).toBe(true);
});

test('test_01', () => {
  expect(isPrime(3)).toBe(true);
});

test('test_02', () => {
  expect(isPrime(4)).toBe(false);
});

test('test_03', () => {
  expect(isPrime(5)).toBe(true);
});

test('test_04', () => {
  expect(isPrime(6)).toBe(false);
});

test('test_05', () => {
  expect(isPrime(7)).toBe(true);
});

test('test_06', () => {
  expect(isPrime(8)).toBe(false);
});

test('test_07', () => {
  expect(isPrime(25)).toBe(false);
});

test('test_08', () => {
  expect(isPrime(31)).toBe(true);
});

test('test_09', () => {
  expect(isPrime(2017)).toBe(true);
});

test('test_10', () => {
  expect(isPrime(2048)).toBe(false);
});

test('test_11', () => {
  expect(isPrime(1)).toBe(false);
});

test('test_12', () => {
  expect(isPrime(713)).toBe(false);
});
