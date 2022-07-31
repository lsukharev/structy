import { undirectedPath, undirectedPathRecursive } from '../../src/05-graph/057-undirected-path';

describe('test_00', () => {
  const edges: [string, string][] = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'j', 'm'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'j', 'm'))
      .toBe(true);
  });
});

describe('test_01', () => {
  const edges: [string, string][] = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'm', 'j'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'm', 'j'))
      .toBe(true);
  });
});

describe('test_02', () => {
  const edges: [string, string][] = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'l', 'j'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'l', 'j'))
      .toBe(true);
  });
});

describe('test_03', () => {
  const edges: [string, string][] = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'k', 'o'))
      .toBe(false);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'k', 'o'))
      .toBe(false);
  });
});

describe('test_04', () => {
  const edges: [string, string][] = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'i', 'o'))
      .toBe(false);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'i', 'o'))
      .toBe(false);
  });
});

describe('test_05', () => {
  const edges: [string, string][] = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'a', 'b'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'a', 'b'))
      .toBe(true);
  });
});

describe('test_06', () => {
  const edges: [string, string][] = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'a', 'c'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'a', 'c'))
      .toBe(true);
  });
});

describe('test_07', () => {
  const edges: [string, string][] = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'r', 't'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'r', 't'))
      .toBe(true);
  });
});

describe('test_08', () => {
  const edges: [string, string][] = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'r', 'b'))
      .toBe(false);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'r', 'b'))
      .toBe(false);
  });
});

describe('test_09', () => {
  const edges: [string, string][] = [
    ['s', 'r'],
    ['t', 'q'],
    ['q', 'r']
  ];

  test('iterative', () => {
    expect(undirectedPath(edges, 'r', 't'))
      .toBe(true);
  });

  test('recursive', () => {
    expect(undirectedPathRecursive(edges, 'r', 't'))
      .toBe(true);
  });
});
