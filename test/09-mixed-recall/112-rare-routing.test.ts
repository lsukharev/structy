import rareRouting from '../../src/09-mixed-recall/112-rare-routing';

test('test_00', () => {
  const roads: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3]
  ];

  expect(rareRouting(4, roads)).toBe(true);
});

test('test_01', () => {
  const roads: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 2]
  ];

  expect(rareRouting(4, roads)).toBe(false);
});

test('test_02', () => {
  const roads: [number, number][] = [
    [1, 2],
    [5, 4],
    [3, 0],
    [0, 1],
    [0, 4]
  ];

  expect(rareRouting(6, roads)).toBe(true);
});

test('test_03', () => {
  const roads: [number, number][] = [
    [1, 2],
    [4, 1],
    [5, 4],
    [3, 0],
    [0, 1],
    [0, 4]
  ];

  expect(rareRouting(6, roads)).toBe(false);
});

test('test_04', () => {
  const roads: [number, number][] = [
    [0, 1],
    [3, 2]
  ];

  expect(rareRouting(4, roads)).toBe(false);
});
