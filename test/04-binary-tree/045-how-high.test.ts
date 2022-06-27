import Node from '../../src/04-binary-tree/Node';
import howHigh from '../../src/04-binary-tree/045-how-high';

test('test_00', () => {
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

  expect(howHigh(a)).toBe(2);
});

test('test_01', () => {
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
  c.right = f;
  e.left = g

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /
  //   g

  expect(howHigh(a)).toBe(3);
});

test('test_02', () => {
  const a = new Node('a');
  const c = new Node('c');

  a.right = c;

  //      a
  //       \
  //        c

  expect(howHigh(a)).toBe(1);
});

test('test_03', () => {
  const a = new Node('a');
  //      a

  expect(howHigh(a)).toBe(0);
});

test('test_04', () => {
  expect(howHigh(null)).toBe(-1);
});
