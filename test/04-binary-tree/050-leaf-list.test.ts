import { leafList, leafListRecursive } from '../../src/04-binary-tree/050-leaf-list';
import Node from '../../src/04-binary-tree/Node';

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
    expect(leafList(a))
      .toEqual(['d', 'e', 'f']);
  });

  test('recursive', () => {
    expect(leafListRecursive(a))
      .toEqual(['d', 'e', 'f']);
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
  const h = new Node('h');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  test('iterative', () => {
    expect(leafList(a))
      .toEqual(['d', 'g', 'h']);
  });

  test('recursive', () => {
    expect(leafListRecursive(a))
      .toEqual(['d', 'g', 'h']);
  });
});

describe('test_02', () => {
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
  //     1   3

  test('iterative', () => {
    expect(leafList(a))
      .toEqual([20, 1, 3, 54]);
  });

  test('recursive', () => {
    expect(leafListRecursive(a))
      .toEqual([20, 1, 3, 54]);
  });
});

describe('test_03', () => {
  const x = new Node('x');
  //      x

  test('iterative', () => {
    expect(leafList(x))
      .toEqual(['x']);
  });

  test('recursive', () => {
    expect(leafListRecursive(x))
      .toEqual(['x']);
  });
});

describe('test_04', () => {
  test('iterative', () => {
    expect(leafList(null))
      .toEqual([]);
  });

  test('recursive', () => {
    expect(leafListRecursive(null))
      .toEqual([]);
  });
});
