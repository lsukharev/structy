import { treeValueCount, treeValueCountRecursive } from '../../src/03-binary-tree/044-tree-value-count';
import Node from '../../src/03-binary-tree/Node';

describe('test_00', () => {
  const a = new Node(12);
  const b = new Node(6);
  const c = new Node(6);
  const d = new Node(4);
  const e = new Node(6);
  const f = new Node(12);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /   \
  //   6     6
  //  / \     \
  // 4   6     12

  test('iterative', () => {
    expect(treeValueCount(a, 6)).toBe(3);
  });

  test('recursive', () => {
    expect(treeValueCountRecursive(a, 6)).toBe(3);
  });
});

describe('test_01', () => {
  const a = new Node(12);
  const b = new Node(6);
  const c = new Node(6);
  const d = new Node(4);
  const e = new Node(6);
  const f = new Node(12);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /   \
  //   6     6
  //  / \     \
  // 4  6     12

  test('iterative', () => {
    expect(treeValueCount(a, 12)).toBe(2);
  });

  test('recursive', () => {
    expect(treeValueCountRecursive(a, 12)).toBe(2);
  });
});

describe('test_02', () => {
  const a = new Node(7);
  const b = new Node(5);
  const c = new Node(1);
  const d = new Node(1);
  const e = new Node(8);
  const f = new Node(7);
  const g = new Node(1);
  const h = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      7
  //    /   \
  //   5     1
  //  / \     \
  // 1   8     7
  //    /       \
  //   1         1

  test('iterative', () => {
    expect(treeValueCount(a, 1)).toBe(4);
  });

  test('recursive', () => {
    expect(treeValueCountRecursive(a, 1)).toBe(4);
  });
});

describe('test_03', () => {
  const a = new Node(7);
  const b = new Node(5);
  const c = new Node(1);
  const d = new Node(1);
  const e = new Node(8);
  const f = new Node(7);
  const g = new Node(1);
  const h = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      7
  //    /   \
  //   5     1
  //  / \     \
  // 1   8     7
  //    /       \
  //   1         1

  test('iterative', () => {
    expect(treeValueCount(a, 9)).toBe(0);
  });

  test('recursive', () => {
    expect(treeValueCountRecursive(a, 9)).toBe(0);
  });
});

describe('test_04', () => {
  test('iterative', () => {
    expect(treeValueCount(null, 42)).toBe(0);
  });

  test('recursive', () => {
    expect(treeValueCountRecursive(null, 42)).toBe(0);
  });
});
