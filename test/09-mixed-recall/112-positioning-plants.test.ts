import positioningPlants from '../../src/09-mixed-recall/112-positioning-plants';

test('test_00', () => {
  const costs = [
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3]
  ];
  expect(positioningPlants(costs)).toBe(7);
});

test('test_01', () => {
  const costs = [
    [12, 14, 5],
    [6, 3, 2]
  ];
  expect(positioningPlants(costs)).toBe(8);
});

test('test_02', () => {
  const costs = [
    [12, 14, 5],
    [6, 3, 2],
    [4, 2, 7],
    [4, 8, 4],
    [1, 13, 5],
    [8, 6, 7]
  ];
  expect(positioningPlants(costs)).toBe(23);
});

test('test_03', () => {
  const costs = [
    [12, 14, 5, 13],
    [6, 3, 20, 3],
    [24, 12, 7, 2],
    [4, 80, 45, 3],
    [104, 13, 5, 14],
    [38, 19, 7, 6],
    [12, 2, 1, 2]
  ];
  expect(positioningPlants(costs)).toBe(26);
});

test('test_04', () => {
  const costs = [
    [12, 14, 50, 12],
    [6, 3, 20, 3],
    [24, 12, 7, 2],
    [4, 80, 45, 3],
    [104, 13, 5, 14],
    [38, 19, 7, 6],
    [1, 20, 1, 2],
    [13, 12, 5, 13],
    [60, 32, 20, 3],
    [24, 12, 7, 2],
    [4, 80, 44, 1],
    [104, 13, 5, 14],
    [38, 19, 76, 6],
    [12, 23, 12, 20],
    [1, 3, 1, 1],
    [1, 2, 12, 5]
  ];
  expect(positioningPlants(costs)).toBe(74);
});

test('test_05', () => {
  const costs = [
    [12, 14, 50, 12, 13],
    [6, 3, 20, 3, 16],
    [24, 12, 7, 2, 74],
    [4, 80, 45, 3, 100],
    [104, 13, 5, 14, 3],
    [38, 19, 7, 6, 24],
    [1, 20, 1, 2, 31],
    [13, 12, 5, 13, 9],
    [60, 32, 20, 3, 2],
    [24, 12, 7, 2, 42],
    [4, 80, 44, 1, 23],
    [104, 13, 5, 14, 28],
    [38, 19, 76, 6, 12],
    [12, 23, 12, 20, 13],
    [1, 3, 1, 1, 50],
    [1, 2, 12, 5, 36],
    [6, 2, 3, 12, 20],
    [4, 6, 4, 11, 15]
  ];
  expect(positioningPlants(costs)).toBe(75);
});
