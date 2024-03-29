import islandCount from '../../src/04-graph/061-island-count';

test('test_00', () => {
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
  ];

  expect(islandCount(grid))
    .toBe(3);
});

test('test_01', () => {
  const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
  ];

  expect(islandCount(grid))
    .toBe(4);
});

test('test_02', () => {
  const grid = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L']
  ];

  expect(islandCount(grid))
    .toBe(1);
});

test('test_03', () => {
  const grid = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W']
  ];

  expect(islandCount(grid))
    .toBe(0);
});
