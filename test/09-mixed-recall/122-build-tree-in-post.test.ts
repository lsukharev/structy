import Node from '../../src/04-binary-tree/Node';
import buildTreeInPost from '../../src/09-mixed-recall/122-build-tree-in-post';

test('test_00', () => {
  const inOrder = ['y', 'x', 'z'];
  const postOrder = ['y', 'z', 'x'];

  const x = new Node('x');
  const y = new Node('y');
  const z = new Node('z');

  x.left = y;
  x.right = z;

  //    x
  //  /   \
  // y     z

  expect(buildTreeInPost(inOrder, postOrder).toString())
    .toBe(x.toString());
});

test('test_01', () => {
  const inOrder = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
  const postOrder = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];

  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;

  //       a
  //    /     \
  //   b       c
  //  / \     / \
  // d   e   f   g

  expect(buildTreeInPost(inOrder, postOrder).toString())
    .toBe(a.toString());
});

test('test_02', () => {
  const inOrder = ['d', 'b', 'g', 'e', 'h', 'a', 'c', 'f'];
  const postOrder = ['d', 'g', 'h', 'e', 'b', 'f', 'c', 'a'];

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

  expect(buildTreeInPost(inOrder, postOrder).toString())
    .toBe(a.toString());
});

test('test_03', () => {
  const inOrder = ['m', 'n'];
  const postOrder = ['m', 'n'];

  const n = new Node('n');
  const m = new Node('m');

  n.left = m;

  //    n
  //  /
  // m

  expect(buildTreeInPost(inOrder, postOrder).toString())
    .toBe(n.toString());
});

test('test_04', () => {
  const inOrder = ['n', 'm'];
  const postOrder = ['m', 'n'];

  const n = new Node('n');
  const m = new Node('m');

  n.right = m;

  //    n
  //     \
  //      m

  expect(buildTreeInPost(inOrder, postOrder).toString())
    .toBe(n.toString());
});
