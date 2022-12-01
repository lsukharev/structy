import { pathFinder, pathFinderOptimized } from '../../src/03-binary-tree/043-tree-path-finder';
import Node from '../../src/03-binary-tree/Node';

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

  test('solution', () => {
    expect(pathFinder(a, 'e')).toEqual(['a', 'b', 'e']);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(a, 'e')).toEqual(['a', 'b', 'e']);
  });
});

describe('test_01', () => {
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

  test('solution', () => {
    expect(pathFinder(a, 'p')).toBe(null);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(a, 'p')).toBe(null);
  });
});

describe('test_02', () => {
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

  test('solution', () => {
    expect(pathFinder(a, 'c')).toEqual(['a', 'c']);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(a, 'c')).toEqual(['a', 'c']);
  });
});

describe('test_03', () => {
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

  test('solution', () => {
    expect(pathFinder(a, 'h')).toEqual(['a', 'c', 'f', 'h']);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(a, 'h')).toEqual(['a', 'c', 'f', 'h']);
  });
});

describe('test_04', () => {
  const x = new Node('x');
  //      x

  test('solution', () => {
    expect(pathFinder(x, 'x')).toEqual(['x']);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(x, 'x')).toEqual(['x']);
  });
});

describe('test_05', () => {
  test('solution', () => {
    expect(pathFinder(null, 'x')).toBe(null);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(null, 'x')).toBe(null);
  });
});

describe('test_06', () => {
  const root = new Node(0);
  let curr = root;

  for (let i = 1; i <= 6000; i += 1) {
    curr.right = new Node(i);
    curr = curr.right;
  }

  //      0
  //       \
  //        1
  //         \
  //          2
  //           \
  //            3
  //             .
  //              .
  //               .
  //              5999
  //                \
  //                6000

  test('solution', () => {
    expect(pathFinder(root, 3451)).toEqual([...Array(3452).keys()]);
  });

  test('optimized', () => {
    expect(pathFinderOptimized(root, 3451)).toEqual([...Array(3452).keys()]);
  });
});
