import pairProduct from '../../src/01-array-and-string/011-pair-product';

test('test_00', () => {
  expect(pairProduct([3, 2, 5, 4, 1], 8)).toEqual([1, 3]);
});

test('test_01', () => {
  expect(pairProduct([3, 2, 5, 4, 1], 10)).toEqual([1, 2]);
});

test('test_02', () => {
  expect(pairProduct([4, 7, 9, 2, 5, 1], 5)).toEqual([4, 5]);
});

test('test_03', () => {
  expect(pairProduct([4, 7, 9, 2, 5, 1], 35)).toEqual([1, 4]);
});

test('test_04', () => {
  expect(pairProduct([3, 2, 5, 4, 1], 10)).toEqual([1, 2]);
});

test('test_05', () => {
  expect(pairProduct([4, 6, 8, 2], 16)).toEqual([2, 3]);
});
