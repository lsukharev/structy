import shortestPath from '../../src/04-graph/060-shortest-path';

test('test_00', () => {
  const edges: [string, string][] = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

  expect(shortestPath(edges, 'w', 'z'))
    .toBe(2);
});

test('test_01', () => {
  const edges: [string, string][] = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

  expect(shortestPath(edges, 'y', 'x'))
    .toBe(1);
});

test('test_02', () => {
  const edges: [string, string][] = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];

  expect(shortestPath(edges, 'a', 'e'))
    .toBe(3);
});

test('test_03', () => {
  const edges: [string, string][] = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];

  expect(shortestPath(edges, 'e', 'c'))
    .toBe(2);
});

test('test_04', () => {
  const edges: [string, string][] = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];

  expect(shortestPath(edges, 'b', 'g'))
    .toBe(-1);
});

test('test_05', () => {
  const edges: [string, string][] = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e']
  ];

  expect(shortestPath(edges, 'w', 'e'))
    .toBe(1);
});

test('test_06', () => {
  const edges: [string, string][] = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e']
  ];

  expect(shortestPath(edges, 'n', 'e'))
    .toBe(2);
});

test('test_07', () => {
  const edges: [string, string][] = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
  ];

  expect(shortestPath(edges, 'm', 's'))
    .toBe(6);
});
