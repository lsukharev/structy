import closestCarrot from '../../src/05-graph/063-closest-carrot';

test('test_00', () => {
  const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O']
  ];

  expect(closestCarrot(grid, 1, 2))
    .toBe(4);
});

test('test_01', () => {
  const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O']
  ];

  expect(closestCarrot(grid, 0, 0))
    .toBe(5);
});

test('test_02', () => {
  const grid = [
    ['O', 'O', 'X', 'X', 'X'],
    ['O', 'X', 'X', 'X', 'C'],
    ['O', 'X', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'C', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O']
  ];

  expect(closestCarrot(grid, 3, 4))
    .toBe(9);
});

test('test_03', () => {
  const grid = [
    ['O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'C', 'C', 'O']
  ];

  expect(closestCarrot(grid, 1, 4))
    .toBe(2);
});

test('test_04', () => {
  const grid = [
    ['O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'C', 'C', 'O']
  ];

  expect(closestCarrot(grid, 2, 0))
    .toBe(-1);
});

test('test_05', () => {
  const grid = [
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C']
  ];

  expect(closestCarrot(grid, 0, 0))
    .toBe(-1);
});
