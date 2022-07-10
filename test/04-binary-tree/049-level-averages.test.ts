import { levelAverages, levelAveragesRecursive } from '../../src/04-binary-tree/049-level-averages';
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
    expect(levelAverages(a))
      .toEqual([3, 7.5, 1]);
  });

  test('recursive', () => {
    expect(levelAveragesRecursive(a))
      .toEqual([3, 7.5, 1]);
  });
});

describe('test_01', () => {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(54);
  const d = new Node(20);
  const e = new Node(15);
  const f = new Node(1);
  const g = new Node(3);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  e.left = f;
  e.right = g;

  //        5
  //     /    \
  //    11    54
  //  /   \
  // 20   15
  //      / \
  //     1  3

  test('iterative', () => {
    expect(levelAverages(a))
      .toEqual([5, 32.5, 17.5, 2]);
  });

  test('recursive', () => {
    expect(levelAveragesRecursive(a))
      .toEqual([5, 32.5, 17.5, 2]);
  });
});

describe('test_02', () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(0);
  const f = new Node(45);
  const g = new Node(-1);
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
  // -3   0     45
  //     /       \
  //    -1       -2

  test('iterative', () => {
    expect(levelAverages(a))
      .toEqual([-1, -5.5, 14, -1.5]);
  });

  test('recursive', () => {
    expect(levelAveragesRecursive(a))
      .toEqual([-1, -5.5, 14, -1.5]);
  });
});

describe('test_03', () => {
  const q = new Node(13);
  const r = new Node(4);
  const s = new Node(2);
  const t = new Node(9);
  const u = new Node(2);
  const v = new Node(42);

  q.left = r;
  q.right = s;
  r.right = t;
  t.left = u;
  u.right = v;

  //        13
  //      /   \
  //     4     2
  //      \
  //       9
  //      /
  //     2
  //    /
  //   42

  test('iterative', () => {
    expect(levelAverages(q))
      .toEqual([13, 3, 9, 2, 42]);
  });

  test('recursive', () => {
    expect(levelAveragesRecursive(q))
      .toEqual([13, 3, 9, 2, 42]);
  });
});

describe('test_04', () => {
  test('iterative', () => {
    expect(levelAverages(null))
      .toEqual([]);
  });

  test('recursive', () => {
    expect(levelAveragesRecursive(null))
      .toEqual([]);
  });
});
