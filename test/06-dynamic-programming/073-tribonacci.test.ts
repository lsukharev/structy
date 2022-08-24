import tribonacci from '../../src/06-dynamic-programming/073-tribonacci';

test('test_00', () => {
  expect(tribonacci(0)).toBe(0);
});

test('test_01', () => {
  expect(tribonacci(1)).toBe(0);
});

test('test_02', () => {
  expect(tribonacci(2)).toBe(1);
});

test('test_03', () => {
  expect(tribonacci(5)).toBe(4);
});

test('test_04', () => {
  expect(tribonacci(7)).toBe(13);
});

test('test_05', () => {
  expect(tribonacci(14)).toBe(927);
});

test('test_06', () => {
  expect(tribonacci(20)).toBe(35890);
});

test('test_07', () => {
  expect(tribonacci(37)).toBe(1132436852);
});
