import { treeSum, treeSumRecursive } from '../../src/04-binary-tree/039-tree-sum';
import Node from '../../src/04-binary-tree/Node';

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
    expect(treeSum(a)).toBe(21);
  });

  test('recursive', () => {
    expect(treeSumRecursive(a)).toBe(21);
  });
});

describe('test_01', () => {
  const a = new Node(1);
  const b = new Node(6);
  const c = new Node(0);
  const d = new Node(3);
  const e = new Node(-6);
  const f = new Node(2);
  const g = new Node(2);
  const h = new Node(2);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      1
  //    /   \
  //   6     0
  //  / \     \
  // 3   -6    2
  //    /       \
  //   2         2

  test('iterative', () => {
    expect(treeSum(a)).toBe(10);
  });

  test('recursive', () => {
    expect(treeSumRecursive(a)).toBe(10);
  });
});

describe('test_02', () => {
  test('iterative', () => {
    expect(treeSum(null)).toBe(0);
  });

  test('recursive', () => {
    expect(treeSumRecursive(null)).toBe(0);
  });
});
