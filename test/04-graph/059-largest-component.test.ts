import largestComponent from '../../src/04-graph/059-largest-component';
import { AdjacencyList } from '../../src/04-graph/common';

test('test_00', () => {
  const graph: AdjacencyList<string> = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  };

  expect(largestComponent(graph))
    .toBe(4);
});

test('test_01', () => {
  const graph: AdjacencyList<string> = {
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  };

  expect(largestComponent(graph))
    .toBe(6);
});

test('test_02', () => {
  const graph: AdjacencyList<string> = {
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
  };

  expect(largestComponent(graph))
    .toBe(5);
});

test('test_03', () => {
  const graph: AdjacencyList<unknown> = {};

  expect(largestComponent(graph))
    .toBe(0);
});

test('test_04', () => {
  const graph: AdjacencyList<string> = {
    0: ['4', '7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
  };

  expect(largestComponent(graph))
    .toBe(3);
});
