import safeCracking from '../../src/09-mixed-recall/127-safe-cracking';

test('test_00', () => {
  const hints: [number, number][] = [
    [7, 1],
    [1, 8],
    [7, 8]
  ];

  expect(safeCracking(hints))
    .toBe('718');
});

test('test_01', () => {
  const hints: [number, number][] = [
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1]
  ];

  expect(safeCracking(hints))
    .toBe('473591');
});

test('test_02', () => {
  const hints: [number, number][] = [
    [2, 5],
    [8, 6],
    [0, 6],
    [6, 2],
    [0, 8],
    [2, 3],
    [3, 5],
    [6, 5]
  ];

  expect(safeCracking(hints))
    .toBe('086235');
});

test('test_03', () => {
  const hints: [number, number][] = [
    [0, 1],
    [6, 0],
    [1, 8]
  ];

  expect(safeCracking(hints))
    .toBe('6018');
});

test('test_04', () => {
  const hints: [number, number][] = [
    [8, 9],
    [4, 2],
    [8, 2],
    [3, 8],
    [2, 9],
    [4, 9],
    [8, 4]
  ];

  expect(safeCracking(hints))
    .toBe('38429');
});
