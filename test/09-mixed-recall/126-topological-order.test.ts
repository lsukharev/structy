import { AdjacencyList } from '../../src/05-graph/common';
import topologicalOrder from '../../src/09-mixed-recall/126-topological-order';

test('test_00', () => {
  const graph: AdjacencyList<string> = {
    a: ['f'],
    b: ['d'],
    c: ['a', 'f'],
    d: ['e'],
    e: [],
    f: ['b', 'e']
  };

  expect(topologicalOrder(graph))
    .toEqual<string[]>(['c', 'a', 'f', 'b', 'd', 'e']);
});

test('test_01', () => {
  const graph: AdjacencyList<string> = {
    h: ['l', 'm'],
    i: ['k'],
    j: ['k', 'i'],
    k: ['h', 'm'],
    l: ['m'],
    m: []
  };

  expect(topologicalOrder(graph))
    .toEqual<string[]>(['j', 'i', 'k', 'h', 'l', 'm']);
});

test('test_02', () => {
  const graph: AdjacencyList<string> = {
    q: [],
    r: ['q'],
    s: ['r'],
    t: ['s']
  };

  expect(topologicalOrder(graph))
    .toEqual<string[]>(['t', 's', 'r', 'q']);
});

test('test_03', () => {
  const graph: AdjacencyList<string> = {
    v: ['z', 'w'],
    w: [],
    x: ['w', 'v', 'z'],
    y: ['x'],
    z: ['w']
  };

  expect(topologicalOrder(graph))
    .toEqual<string[]>(['y', 'x', 'v', 'z', 'w']);
});
