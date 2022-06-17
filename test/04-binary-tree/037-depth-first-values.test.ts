import Node from '../../src/04-binary-tree/Node';
import { depthFirstValues, depthFirstValuesRecursive } from '../../src/04-binary-tree/037-depth-first-values';

describe('test_00', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  test('iterative', () => {
    expect(depthFirstValues(a))
      .toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });

  test('recursive', () => {
    expect(depthFirstValuesRecursive(a))
      .toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });
});

describe('test_01', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /
  //   g

  test('iterative', () => {
    expect(depthFirstValues(a))
      .toEqual(['a', 'b', 'd', 'e', 'g', 'c', 'f']);
  });

  test('recursive', () => {
    expect(depthFirstValuesRecursive(a))
      .toEqual(['a', 'b', 'd', 'e', 'g', 'c', 'f']);
  });
});

describe('test_02', () => {
  const a = new Node('a');
  //      a

  test('iterative', () => {
    expect(depthFirstValues(a))
      .toEqual(['a']);
  });

  test('recursive', () => {
    expect(depthFirstValuesRecursive(a))
      .toEqual(['a']);
  });
});

describe('test_03', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');

  a.right = b;
  b.left = c;
  c.right = d;
  d.right = e;

  //      a
  //       \
  //        b
  //       /
  //      c
  //       \
  //        d
  //         \
  //          e

  test('iterative', () => {
    expect(depthFirstValues(a))
      .toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  test('recursive', () => {
    expect(depthFirstValuesRecursive(a))
      .toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});

describe('test_04', () => {
  test('iterative', () => {
    expect(depthFirstValues(null))
      .toEqual([]);
  });

  test('recursive', () => {
    expect(depthFirstValuesRecursive(null))
      .toEqual([]);
  });
});
