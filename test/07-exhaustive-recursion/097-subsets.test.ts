import subsets from '../../src/07-exhaustive-recursion/097-subsets';

test('test_00', () => {
  const expected = [
    [],
    ['b'],
    ['a'],
    ['a', 'b']
  ];

  expect(subsets(['a', 'b']))
    .toIncludeSameMembers(expected);
});

test('test_01', () => {
  const expected = [
    [],
    ['c'],
    ['b'],
    ['b', 'c'],
    ['a'],
    ['a', 'c'],
    ['a', 'b'],
    ['a', 'b', 'c']
  ];

  expect(subsets(['a', 'b', 'c']))
    .toIncludeSameMembers(expected);
});

test('test_02', () => {
  const expected = [
    [],
    ['x']
  ];

  expect(subsets(['x']))
    .toIncludeSameMembers(expected);
});

test('test_03', () => {
  const expected: string[][] = [[]];

  expect(subsets([]))
    .toIncludeSameMembers(expected);
});

test('test_04', () => {
  const expected = [
    [],
    ['t'],
    ['s'],
    ['s', 't'],
    ['r'],
    ['r', 't'],
    ['r', 's'],
    ['r', 's', 't'],
    ['q'],
    ['q', 't'],
    ['q', 's'],
    ['q', 's', 't'],
    ['q', 'r'],
    ['q', 'r', 't'],
    ['q', 'r', 's'],
    ['q', 'r', 's', 't'],
  ];

  expect(subsets(['q', 'r', 's', 't']))
    .toIncludeSameMembers(expected);
});
