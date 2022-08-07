import longestPath from '../../src/05-graph/064-longest-path';
import { AdjacencyList } from '../../src/05-graph/common';

test('test_00', () => {
  const graph: AdjacencyList<string> = {
    a: ['c', 'b'],
    b: ['c'],
    c: []
  };

  expect(longestPath(graph))
    .toBe(2);
});

test('test_01', () => {
  const graph: AdjacencyList<string> = {
    a: ['c', 'b'],
    b: ['c'],
    c: [],
    q: ['r'],
    r: ['s', 'u', 't'],
    s: ['t'],
    t: ['u'],
    u: []
  };

  expect(longestPath(graph))
    .toBe(4);
});

test('test_02', () => {
  const graph: AdjacencyList<string> = {
    h: ['i', 'j', 'k'],
    g: ['h'],
    i: [],
    j: [],
    k: [],
    x: ['y'],
    y: []
  };

  expect(longestPath(graph))
    .toBe(2);
});

test('test_03', () => {
  const graph: AdjacencyList<string> = {
    a: ['b'],
    b: ['c'],
    c: [],
    e: ['f'],
    f: ['g'],
    g: ['h'],
    h: []
  };

  expect(longestPath(graph))
    .toBe(3);
});
