import Node from '../../src/03-binary-tree/Node';
import buildTreeInPre from '../../src/08-mixed-recall/123-build-tree-in-pre';

test('test_00', () => {
  const inOrder = ['z', 'y', 'x'];
  const preOrder = ['y', 'z', 'x'];

  const x = new Node('x');
  const y = new Node('y');
  const z = new Node('z');

  y.left = z;
  y.right = x;

  //    y
  //  /   \
  // z     x

  expect(buildTreeInPre(inOrder, preOrder).toString())
    .toBe(y.toString());
});

test('test_01', () => {
  const inOrder = ['y', 'z', 'x'];
  const preOrder = ['y', 'x', 'z'];

  const x = new Node('x');
  const y = new Node('y');
  const z = new Node('z');

  y.right = x;
  x.left = z;

  //  y
  //   \
  //    x
  //   /
  //  z

  expect(buildTreeInPre(inOrder, preOrder).toString())
    .toBe(y.toString());
});

test('test_02', () => {
  const inOrder = ['d', 'b', 'g', 'e', 'h', 'a', 'c', 'f'];
  const preOrder = ['a', 'b', 'd', 'e', 'g', 'h', 'c', 'f'];

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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    / \
  //   g   h

  expect(buildTreeInPre(inOrder, preOrder).toString())
    .toBe(a.toString());
});

test('test_03', () => {
  const inOrder = ['t', 'u', 's', 'q', 'r', 'p'];
  const preOrder = ['u', 't', 's', 'r', 'q', 'p'];

  const p = new Node('p');
  const q = new Node('q');
  const r = new Node('r');
  const s = new Node('s');
  const t = new Node('t');
  const u = new Node('u');

  u.left = t;
  u.right = s;
  s.right = r;
  r.left = q;
  r.right = p;

  //    u
  //  /   \
  // t     s
  //        \
  //         r
  //        / \
  //       q   p

  expect(buildTreeInPre(inOrder, preOrder).toString())
    .toBe(u.toString());
});

test('test_04', () => {
  const inOrder = ['m', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't'];
  const preOrder = ['l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't'];

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

  //    l
  //  /   \
  // m     n
  //     /   \
  //    o     p
  //   / \   / \
  //  q   r s   t

  expect(buildTreeInPre(inOrder, preOrder).toString())
    .toBe(l.toString());
});
