import { hasPath, hasPathRecursive } from '../../src/05-graph/056-has-path';
import { AdjacencyList } from '../../src/05-graph/common';

describe('test_00', () => {
  const graph: AdjacencyList = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

  test('iterative', () => {
    expect(hasPath(graph, 'f', 'k'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(hasPathRecursive(graph, 'f', 'k'))
      .toBe(true);
  });
});

describe('test_01', () => {
  const graph: AdjacencyList = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

  test('iterative', () => {
    expect(hasPath(graph, 'f', 'j'))
      .toBe(false);
  });

  test('recursive', () => {
    expect(hasPathRecursive(graph, 'f', 'j'))
      .toBe(false);
  });
});

describe('test_02', () => {
  const graph: AdjacencyList = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

  test('iterative', () => {
    expect(hasPath(graph, 'i', 'h'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(hasPathRecursive(graph, 'i', 'h'))
      .toBe(true);
  });
});

describe('test_03', () => {
  const graph: AdjacencyList = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: []
  };

  test('iterative', () => {
    expect(hasPath(graph, 'v', 'w'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(hasPathRecursive(graph, 'v', 'w'))
      .toBe(true);
  });
});

describe('test_04', () => {
  const graph: AdjacencyList = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: []
  };

  test('iterative', () => {
    expect(hasPath(graph, 'v', 'z'))
      .toBe(false);
  });

  test('recursive', () => {
    expect(hasPathRecursive(graph, 'v', 'z'))
      .toBe(false);
  });
});
