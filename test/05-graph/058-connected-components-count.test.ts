import connectedComponentsCount from '../../src/05-graph/058-connected-components-count';
import { AdjacencyList } from '../../src/05-graph/common';

test('test_00', () => {
  const graph: AdjacencyList<number> = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  };

  expect(connectedComponentsCount(graph))
    .toBe(2);
});

test('test_01', () => {
  const graph: AdjacencyList<number> = {
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  };

  expect(connectedComponentsCount(graph))
    .toBe(1);
});

test('test_02', () => {
  const graph: AdjacencyList<number> = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
  };

  expect(connectedComponentsCount(graph))
    .toBe(3);
});

test('test_03', () => {
  const graph: AdjacencyList<number> = {};

  expect(connectedComponentsCount(graph))
    .toBe(0);
});

test('test_04', () => {
  const graph: AdjacencyList<number> = {
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
  };

  expect(connectedComponentsCount(graph))
    .toBe(5);
});
