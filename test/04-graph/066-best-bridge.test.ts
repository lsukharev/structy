import bestBridge from '../../src/04-graph/066-best-bridge';

test('test_00', () => {
  const grid = [
    ['W', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'L'],
    ['L', 'L', 'L', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W']
  ];

  expect(bestBridge(grid))
    .toBe(1);
});

test('test_01', () => {
  const grid = [
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['L', 'L', 'W', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'W', 'W']
  ];

  expect(bestBridge(grid))
    .toBe(2);
});

test('test_02', () => {
  const grid = [
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'W', 'W']
  ];

  expect(bestBridge(grid))
    .toBe(3);
});

test('test_03', () => {
  const grid = [
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'L', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'L', 'L', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'L', 'L', 'L'],
    ['L', 'L', 'L', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
  ];

  expect(bestBridge(grid))
    .toBe(3);
});

test('test_04', () => {
  const grid = [
    ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'L', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W', 'W', 'W', 'L'],
    ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L']
  ];

  expect(bestBridge(grid))
    .toBe(2);
});

test('test_05', () => {
  const grid = [
    ['W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'L']
  ];

  expect(bestBridge(grid))
    .toBe(8);
});
