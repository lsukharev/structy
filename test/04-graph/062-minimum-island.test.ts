import minimumIsland from '../../src/04-graph/062-minimum-island';

test('test_00', () => {
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
  ];

  expect(minimumIsland(grid))
    .toBe(2);
});

test('test_01', () => {
  const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
  ];

  expect(minimumIsland(grid))
    .toBe(1);
});

test('test_02', () => {
  const grid = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L']
  ];

  expect(minimumIsland(grid))
    .toBe(9);
});

test('test_03', () => {
  const grid = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
  ];

  expect(minimumIsland(grid))
    .toBe(1);
});
