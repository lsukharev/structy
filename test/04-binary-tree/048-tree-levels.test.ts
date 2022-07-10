import { treeLevels, treeLevelsRecursive } from '../../src/04-binary-tree/048-tree-levels';
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
    expect(treeLevels(a))
      .toEqual(
        [
          ['a'],
          ['b', 'c'],
          ['d', 'e', 'f']
        ]
      );
  });

  test('recursive', () => {
    expect(treeLevelsRecursive(a))
      .toEqual(
        [
          ['a'],
          ['b', 'c'],
          ['d', 'e', 'f']
        ]
      );
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
  const i = new Node('i');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  e.right = h;
  f.left = i;

  //         a
  //      /    \
  //     b      c
  //   /  \      \
  //  d    e      f
  //      / \    /
  //     g  h   i

  test('iterative', () => {
    expect(treeLevels(a))
      .toEqual(
        [
          ['a'],
          ['b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i']
        ]
      );
  });

  test('recursive', () => {
    expect(treeLevelsRecursive(a))
      .toEqual(
        [
          ['a'],
          ['b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i']
        ]
      );
  });
});

describe('test_02', () => {
  const q = new Node('q');
  const r = new Node('r');
  const s = new Node('s');
  const t = new Node('t');
  const u = new Node('u');
  const v = new Node('v');

  q.left = r;
  q.right = s;
  r.right = t;
  t.left = u;
  u.right = v;

  //      q
  //    /   \
  //   r     s
  //    \
  //     t
  //    /
  //   u
  //  /
  // v

  test('iterative', () => {
    expect(treeLevels(q))
      .toEqual(
        [
          ['q'],
          ['r', 's'],
          ['t'],
          ['u'],
          ['v']
        ]
      );
  });

  test('recursive', () => {
    expect(treeLevelsRecursive(q))
      .toEqual(
        [
          ['q'],
          ['r', 's'],
          ['t'],
          ['u'],
          ['v']
        ]
      );
  });
});

describe('test_03', () => {
  test('iterative', () => {
    expect(treeLevels(null))
      .toEqual([]);
  });

  test('recursive', () => {
    expect(treeLevelsRecursive(null))
      .toEqual([]);
  });
});
