import hasCycle from '../../src/04-graph/067-has-cycle';
import { AdjacencyList } from '../../src/04-graph/common';

test('test_00', () => {
  const graph: AdjacencyList<string> = {
    a: ['b'],
    b: ['c'],
    c: ['a']
  };

  expect(hasCycle(graph))
    .toBe(true);
});

test('test_01', () => {
  const graph: AdjacencyList<string> = {
    a: ['b', 'c'],
    b: ['c'],
    c: ['d'],
    d: []
  };

  expect(hasCycle(graph))
    .toBe(false);
});

test('test_02', () => {
  const graph: AdjacencyList<string> = {
    a: ['b', 'c'],
    b: [],
    c: [],
    e: ['f'],
    f: ['e']
  };

  expect(hasCycle(graph))
    .toBe(true);
});

test('test_03', () => {
  const graph: AdjacencyList<string> = {
    q: ['r', 's'],
    r: ['t', 'u'],
    s: [],
    t: [],
    u: [],
    v: ['w'],
    w: [],
    x: ['w']
  };

  expect(hasCycle(graph))
    .toBe(false);
});

test('test_04', () => {
  const graph: AdjacencyList<string> = {
    a: ['b'],
    b: ['c'],
    c: ['a'],
    g: []
  };

  expect(hasCycle(graph))
    .toBe(true);
});

test('test_05', () => {
  const graph: AdjacencyList<string> = {
    a: ['b'],
    b: ['c'],
    c: ['d'],
    d: ['b']
  };

  expect(hasCycle(graph))
    .toBe(true);
});
