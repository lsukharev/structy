import createCombinations from '../../src/07-exhaustive-recursion/099-create-combinations';

test('test_00', () => {
  const expected = [
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'c']
  ];

  expect(createCombinations(['a', 'b', 'c'], 2))
    .toIncludeSameMembers(expected);
});

test('test_01', () => {
  const expected = [
    ['q', 'r'],
    ['q', 's'],
    ['q', 't'],
    ['r', 's'],
    ['r', 't'],
    ['s', 't']
  ];

  expect(createCombinations(['q', 'r', 's', 't'], 2))
    .toIncludeSameMembers(expected);
});

test('test_02', () => {
  const expected = [
    ['q', 'r', 's'],
    ['q', 'r', 't'],
    ['q', 's', 't'],
    ['r', 's', 't']
  ];

  expect(createCombinations(['q', 'r', 's', 't'], 3))
    .toIncludeSameMembers(expected);
});

test('test_03', () => {
  const expected = [
    [1, 28, 94]
  ];

  expect(createCombinations([1, 28, 94], 3))
    .toIncludeSameMembers(expected);
});
