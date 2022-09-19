import permutations from '../../src/08-exhaustive-recursion/096-permutations';

test('test_00', () => {
  const expected = [
    ['a', 'b', 'c'],
    ['b', 'a', 'c'],
    ['b', 'c', 'a'],
    ['a', 'c', 'b'],
    ['c', 'a', 'b'],
    ['c', 'b', 'a']
  ];

  expect(permutations(['a', 'b', 'c']))
    .toIncludeSameMembers(expected);
});

test('test_01', () => {
  const expected = [
    ['red', 'blue'],
    ['blue', 'red']
  ];

  expect(permutations(['red', 'blue']))
    .toIncludeSameMembers(expected);
});

test('test_02', () => {
  const expected = [
    [8, 2, 1, 4], [2, 8, 1, 4],
    [2, 1, 8, 4], [2, 1, 4, 8],
    [8, 1, 2, 4], [1, 8, 2, 4],
    [1, 2, 8, 4], [1, 2, 4, 8],
    [8, 1, 4, 2], [1, 8, 4, 2],
    [1, 4, 8, 2], [1, 4, 2, 8],
    [8, 2, 4, 1], [2, 8, 4, 1],
    [2, 4, 8, 1], [2, 4, 1, 8],
    [8, 4, 2, 1], [4, 8, 2, 1],
    [4, 2, 8, 1], [4, 2, 1, 8],
    [8, 4, 1, 2], [4, 8, 1, 2],
    [4, 1, 8, 2], [4, 1, 2, 8]
  ];

  expect(permutations([8, 2, 1, 4]))
    .toIncludeSameMembers(expected);
});

test('test_03', () => {
  expect(permutations([]))
    .toIncludeSameMembers([[]]);
});
