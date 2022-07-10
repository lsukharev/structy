import fiveSort from '../../src/02-array-and-string/014-five-sort';

test('test_00', () => {
  expect(fiveSort([12, 5, 1, 5, 12, 7]))
    .toEqual([12, 7, 1, 12, 5, 5]);
});

test('test_01', () => {
  expect(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]))
    .toEqual([2, 2, 10, 6, 1, 5, 5, 5, 5, 5]);
});

test('test_02', () => {
  expect(fiveSort([5, 5, 5, 1, 1, 1, 4]))
    .toEqual([4, 1, 1, 1, 5, 5, 5]);
});

test('test_03', () => {
  expect(fiveSort([5, 5, 6, 5, 5, 5, 5]))
    .toEqual([6, 5, 5, 5, 5, 5, 5]);
});

test('test_04', () => {
  expect(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]))
    .toEqual([4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]);
});
