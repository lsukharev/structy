import Node from '../../src/04-binary-tree/Node';
import binarySearchTreeInclude from '../../src/09-mixed-recall/117-binary-search-tree-includes';

test('test_00', () => {
  const a = new Node(12);
  const b = new Node(5);
  const c = new Node(18);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(19);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /    \
  //   5      18
  //  / \      \
  // 3   9      19

  expect(binarySearchTreeInclude(a, 9))
    .toBe(true);
});

test('test_01', () => {
  const a = new Node(12);
  const b = new Node(5);
  const c = new Node(18);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(19);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /    \
  //   5      18
  //  / \      \
  // 3   9      19

  expect(binarySearchTreeInclude(a, 15))
    .toBe(false);
});

test('test_02', () => {
  const a = new Node(12);
  const b = new Node(5);
  const c = new Node(18);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(19);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /    \
  //   5      18
  //  / \      \
  // 3   9      19

  expect(binarySearchTreeInclude(a, 1))
    .toBe(false);
});

test('test_03', () => {
  const a = new Node(12);
  const b = new Node(5);
  const c = new Node(18);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(19);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      12
  //    /    \
  //   5      18
  //  / \      \
  // 3   9      19

  expect(binarySearchTreeInclude(a, 12))
    .toBe(true);
});

test('test_04', () => {
  const q = new Node(54);
  const r = new Node(42);
  const s = new Node(70);
  const t = new Node(31);
  const u = new Node(50);
  const v = new Node(72);
  const w = new Node(47);
  const x = new Node(90);

  q.left = r;
  q.right = s;
  r.left = t;
  r.right = u;
  s.right = v;
  u.left = w;
  v.right = x;

  //       54
  //     /    \
  //    42     70
  //   / \      \
  // 31   50     72
  //     /        \
  //    47         90

  expect(binarySearchTreeInclude(q, 55))
    .toBe(false);
});

test('test_05', () => {
  const q = new Node(54);
  const r = new Node(42);
  const s = new Node(70);
  const t = new Node(31);
  const u = new Node(50);
  const v = new Node(72);
  const w = new Node(47);
  const x = new Node(90);

  q.left = r;
  q.right = s;
  r.left = t;
  r.right = u;
  s.right = v;
  u.left = w;
  v.right = x;

  //       54
  //     /    \
  //    42     70
  //   / \      \
  // 31   50     72
  //     /        \
  //    47         90

  expect(binarySearchTreeInclude(q, 47))
    .toBe(true);
});

test('test_06', () => {
  const q = new Node(54);
  const r = new Node(42);
  const s = new Node(70);
  const t = new Node(31);
  const u = new Node(50);
  const v = new Node(72);
  const w = new Node(47);
  const x = new Node(90);

  q.left = r;
  q.right = s;
  r.left = t;
  r.right = u;
  s.right = v;
  u.left = w;
  v.right = x;

  //       54
  //     /    \
  //    42     70
  //   / \      \
  // 31   50     72
  //     /        \
  //    47         90

  expect(binarySearchTreeInclude(q, 49))
    .toBe(false);
});

test('test_07', () => {
  const q = new Node(54);
  const r = new Node(42);
  const s = new Node(70);
  const t = new Node(31);
  const u = new Node(50);
  const v = new Node(72);
  const w = new Node(47);
  const x = new Node(90);

  q.left = r;
  q.right = s;
  r.left = t;
  r.right = u;
  s.right = v;
  u.left = w;
  v.right = x;

  //       54
  //     /    \
  //    42     70
  //   / \      \
  // 31   50     72
  //     /        \
  //    47         90

  expect(binarySearchTreeInclude(q, 70))
    .toBe(true);
});

test('test_08', () => {
  const q = new Node(54);
  const r = new Node(42);
  const s = new Node(70);
  const t = new Node(31);
  const u = new Node(50);
  const v = new Node(72);
  const w = new Node(47);
  const x = new Node(90);

  q.left = r;
  q.right = s;
  r.left = t;
  r.right = u;
  s.right = v;
  u.left = w;
  v.right = x;

  //       54
  //     /    \
  //    42     70
  //   / \      \
  // 31   50     72
  //     /        \
  //    47         90

  expect(binarySearchTreeInclude(q, 100))
    .toBe(false);
});
