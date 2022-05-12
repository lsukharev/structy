import { pairSum } from '../../src/02-array-and-string/010-pair-sum';

test('test_00', () => {
  expect(pairSum([3, 2, 5, 4, 1], 8)).toEqual([0, 2]);
});

test('test_01', () => {
  expect(pairSum([4, 7, 9, 2, 5, 1], 5)).toEqual([0, 5]);
});

test('test_02', () => {
  expect(pairSum([4, 7, 9, 2, 5, 1], 3)).toEqual([3, 5]);
});

test('test_03', () => {
  expect(pairSum([1, 6, 7, 2], 13)).toEqual([1, 2]);
});

test('test_04', () => {
  expect(pairSum([9, 9], 18)).toEqual([0, 1]);
});

test('test_05', () => {
  expect(pairSum([6, 4, 2, 8 ], 12)).toEqual([1, 3]);
});
