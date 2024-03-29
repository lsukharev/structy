import linkedPalindrome from '../../src/08-mixed-recall/104-linked-palindrome';
import Node from '../../src/02-linked-list/Node';

test('test_00', () => {
  const a = new Node(3);
  const b = new Node(2);
  const c = new Node(7);
  const d = new Node(7);
  const e = new Node(2);
  const f = new Node(3);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 3 -> 2 -> 7 -> 7 -> 2 -> 3

  expect(linkedPalindrome(a)).toBe(true);
});

test('test_01', () => {
  const a = new Node(3);
  const b = new Node(2);
  const c = new Node(4);

  a.next = b;
  b.next = c;

  // 3 -> 2 -> 4

  expect(linkedPalindrome(a)).toBe(false);
});

test('test_02', () => {
  const a = new Node(3);
  const b = new Node(2);
  const c = new Node(3);

  a.next = b;
  b.next = c;

  // 3 -> 2 -> 3

  expect(linkedPalindrome(a)).toBe(true);
});

test('test_03', () => {
  const a = new Node(0);
  const b = new Node(1);
  const c = new Node(0);
  const d = new Node(1);
  const e = new Node(0);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  // 0 -> 1 -> 0 -> 1 -> 0

  expect(linkedPalindrome(a)).toBe(true);
});

test('test_04', () => {
  const a = new Node(0);
  const b = new Node(1);
  const c = new Node(0);
  const d = new Node(1);
  const e = new Node(1);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  // 0 -> 1 -> 0 -> 1 -> 1

  expect(linkedPalindrome(a)).toBe(false);
});

test('test_05', () => {
  const a = new Node(5);

  // 5

  expect(linkedPalindrome(a)).toBe(true);
});

test('test_06', () => {
  expect(linkedPalindrome(null)).toBe(true);
});
