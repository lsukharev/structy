import { treeIncludes, treeIncludesRecursive } from '../../src/04-binary-tree/040-tree-includes';
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
    expect(treeIncludes(a, 'e')).toBe(true);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(a, 'e')).toBe(true);
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

  test('iterative', () => {
    expect(treeIncludes(a, 'a')).toBe(true);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(a, 'a')).toBe(true);
  });
});

describe('test_02', () => {
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
    expect(treeIncludes(a, 'n')).toBe(false);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(a, 'n')).toBe(false);
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

  test('iterative', () => {
    expect(treeIncludes(a, 'f')).toBe(true);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(a, 'f')).toBe(true);
  });
});

describe('test_04', () => {
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
    expect(treeIncludes(a, 'p')).toBe(false);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(a, 'p')).toBe(false);
  });
});

describe('test_05', () => {
  test('iterative', () => {
    expect(treeIncludes(null, 'b')).toBe(false);
  });

  test('recursive', () => {
    expect(treeIncludesRecursive(null, 'b')).toBe(false);
  });
});
