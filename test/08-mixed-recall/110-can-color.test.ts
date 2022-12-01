import { AdjacencyList } from '../../src/04-graph/common';
import canColor from '../../src/08-mixed-recall/110-can-color';

test('test_00', () => {
  const graph: AdjacencyList<string> = {
    x: ['y'],
    y: ['x', 'z'],
    z: ['y']
  };

  expect(canColor(graph)).toBe(true);
});

test('test_01', () => {
  const graph: AdjacencyList<string> = {
    q: ['r', 's'],
    r: ['q', 's'],
    s: ['r', 'q']
  };

  expect(canColor(graph)).toBe(false);
});

test('test_02', () => {
  const graph: AdjacencyList<string> = {
    a: ['b', 'c', 'd'],
    b: ['a'],
    c: ['a'],
    d: ['a']
  };

  expect(canColor(graph)).toBe(true);
});

test('test_03', () => {
  const graph: AdjacencyList<string> = {
    a: ['b', 'c', 'd'],
    b: ['a'],
    c: ['a', 'd'],
    d: ['a', 'c']
  };

  expect(canColor(graph)).toBe(false);
});

test('test_04', () => {
  const graph: AdjacencyList<string> = {
    h: ['i', 'k'],
    i: ['h', 'j'],
    j: ['i', 'k'],
    k: ['h', 'j']
  };

  expect(canColor(graph)).toBe(true);
});

test('test_05', () => {
  const graph: AdjacencyList<string> = {
    z: []
  };

  expect(canColor(graph)).toBe(true);
});

test('test_06', () => {
  const graph: AdjacencyList<string> = {
    h: ['i', 'k'],
    i: ['h', 'j'],
    j: ['i', 'k'],
    k: ['h', 'j'],
    q: ['r', 's'],
    r: ['q', 's'],
    s: ['r', 'q']
  };

  expect(canColor(graph)).toBe(false);
});
