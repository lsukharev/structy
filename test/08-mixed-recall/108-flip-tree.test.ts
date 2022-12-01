import Node from '../../src/03-binary-tree/Node';
import flipTree from '../../src/08-mixed-recall/108-flip-tree';

test('test_00', () => {
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
  e.right = h;

  //       a
  //     /   \
  //    b     c
  //   / \     \
  //  d   e     f
  //     / \
  //    g   h

  const a2 = new Node('a');
  const b2 = new Node('b');
  const c2 = new Node('c');
  const d2 = new Node('d');
  const e2 = new Node('e');
  const f2 = new Node('f');
  const g2 = new Node('g');
  const h2 = new Node('h');

  a2.left = c2;
  a2.right = b2;
  c2.left = f2;
  b2.left = e2;
  b2.right = d2;
  e2.left = h2;
  e2.right = g2;

  //       a
  //     /   \
  //    c     b
  //   /     / \
  //  f     e   d
  //       / \
  //      h   g

  expect(flipTree(a).toString())
    .toBe(a2.toString());
});

test('test_01', () => {
  const u = new Node('u');
  const t = new Node('t');
  const s = new Node('s');
  const r = new Node('r');
  const q = new Node('q');
  const p = new Node('p');

  u.left = t;
  u.right = s;
  s.right = r;
  r.left = q;
  r.right = p;

  //     u
  //   /   \
  //  t     s
  //         \
  //          r
  //         / \
  //        q   p

  const u2 = new Node('u');
  const t2 = new Node('t');
  const s2 = new Node('s');
  const r2 = new Node('r');
  const q2 = new Node('q');
  const p2 = new Node('p');

  u2.left = s2;
  u2.right = t2;
  s2.left = r2;
  r2.left = p2;
  r2.right = q2;

  //         u
  //       /   \
  //      s     t
  //     /
  //    r
  //   / \
  //  p   q

  expect(flipTree(u).toString())
    .toBe(u2.toString());
});

test('test_02', () => {
  const l = new Node('l');
  const m = new Node('m');
  const n = new Node('n');
  const o = new Node('o');
  const p = new Node('p');
  const q = new Node('q');
  const r = new Node('r');
  const s = new Node('s');
  const t = new Node('t');

  l.left = m;
  l.right = n;
  n.left = o;
  n.right = p;
  o.left = q;
  o.right = r;
  p.left = s;
  p.right = t;

  //     l
  //   /   \
  //  m     n
  //      /   \
  //     o     p
  //    / \   / \
  //   q   r s   t

  const l2 = new Node('l');
  const m2 = new Node('m');
  const n2 = new Node('n');
  const o2 = new Node('o');
  const p2 = new Node('p');
  const q2 = new Node('q');
  const r2 = new Node('r');
  const s2 = new Node('s');
  const t2 = new Node('t');

  l2.left = n2;
  l2.right = m2;
  n2.left = p2;
  n2.right = o2;
  p2.left = t2;
  p2.right = s2;
  o2.left = r2;
  o2.right = q2;

  //          l
  //        /   \
  //       n     m
  //     /   \
  //    p     o
  //   / \   / \
  //  t   s r   q

  expect(flipTree(l).toString())
    .toBe(l2.toString());
});

test('test_03', () => {
  const n = new Node('n');
  const y = new Node('y');
  const c = new Node('c');

  n.left = y;
  n.right = c;

  //     n
  //   /   \
  //  y     c

  const n2 = new Node('n');
  const y2 = new Node('y');
  const c2 = new Node('c');

  n2.left = c2;
  n2.right = y2;

  //     n
  //   /   \
  //  c     y

  expect(flipTree(n).toString())
    .toBe(n2.toString());
});
