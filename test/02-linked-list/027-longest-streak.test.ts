import longestStreak from '../../src/02-linked-list/027-longest-streak';
import Node from '../../src/02-linked-list/Node';

test('test_00', () => {
  const a = new Node(5);
  const b = new Node(5);
  const c = new Node(7);
  const d = new Node(7);
  const e = new Node(7);
  const f = new Node(6);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 5 -> 5 -> 7 -> 7 -> 7 -> 6

  expect(longestStreak(a)).toBe(3);
});

test('test_01', () => {
  const a = new Node(3);
  const b = new Node(3);
  const c = new Node(3);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 3 -> 3 -> 3 -> 3 -> 9 -> 9

  expect(longestStreak(a)).toBe(4);
});

test('test_02', () => {
  const a = new Node(9);
  const b = new Node(9);
  const c = new Node(1);
  const d = new Node(9);
  const e = new Node(9);
  const f = new Node(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 9 -> 9 -> 1 -> 9 -> 9 -> 9

  expect(longestStreak(a)).toBe(3);
});

test('test_03', () => {
  const a = new Node(5);
  const b = new Node(5);

  a.next = b;

  // 5 -> 5

  expect(longestStreak(a)).toBe(2);
});

test('test_04', () => {
  const a = new Node(4);

  // 4

  expect(longestStreak(a)).toBe(1);
});

test('test_05', () => {
  expect(longestStreak(null)).toBe(0);
});
