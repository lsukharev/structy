import { treeMinValue, treeMinValueRecursive } from '../../src/03-binary-tree/041-tree-min-value';
import Node from '../../src/03-binary-tree/Node';

describe('test_00', () => {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //       3
  //    /    \
  //   11     4
  //  / \      \
  // 4   -2     1

  test('iterative', () => {
    expect(treeMinValue(a)).toBe(-2);
  });

  test('recursive', () => {
    expect(treeMinValueRecursive(a)).toBe(-2);
  });
});

describe('test_01', () => {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(14);
  const f = new Node(12);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //       5
  //    /    \
  //   11     3
  //  / \      \
  // 4   14     12

  test('iterative', () => {
    expect(treeMinValue(a)).toBe(3);
  });

  test('recursive', () => {
    expect(treeMinValueRecursive(a)).toBe(3);
  });
});

describe('test_02', () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(-4);
  const f = new Node(-13);
  const g = new Node(-2);
  const h = new Node(-2);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //        -1
  //      /   \
  //    -6    -5
  //   /  \     \
  // -3   -4   -13
  //     /       \
  //    -2       -2

  test('iterative', () => {
    expect(treeMinValue(a)).toBe(-13);
  });

  test('recursive', () => {
    expect(treeMinValueRecursive(a)).toBe(-13);
  });
});

describe('test_03', () => {
  const a = new Node(42);
  //        42

  test('iterative', () => {
    expect(treeMinValue(a)).toBe(42);
  });

  test('recursive', () => {
    expect(treeMinValueRecursive(a)).toBe(42);
  });
});
