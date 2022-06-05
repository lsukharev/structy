import Node from '../../src/03-linked-list/Node';
import {
  isUnivalueList,
  isUnivalueListRecursive
} from '../../src/03-linked-list/026-is-univalue-list';

describe('test_00', () => {
  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(7);

  a.next = b;
  b.next = c;

  // 7 -> 7 -> 7

  test('iterative', () => {
    expect(isUnivalueList(a)).toBe(true);
  });

  test('recursive', () => {
    expect(isUnivalueListRecursive(a)).toBe(true);
  });
});

describe('test_01', () => {
  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(4);

  a.next = b;
  b.next = c;

  // 7 -> 7 -> 4

  test('iterative', () => {
    expect(isUnivalueList(a)).toBe(false);
  });

  test('recursive', () => {
    expect(isUnivalueListRecursive(a)).toBe(false);
  });
});

describe('test_02', () => {
  const u = new Node(2);
  const v = new Node(2);
  const w = new Node(2);
  const x = new Node(2);
  const y = new Node(2);

  u.next = v;
  v.next = w;
  w.next = x;
  x.next = y;

  // 2 -> 2 -> 2 -> 2 -> 2

  test('iterative', () => {
    expect(isUnivalueList(u)).toBe(true);
  });

  test('recursive', () => {
    expect(isUnivalueListRecursive(u)).toBe(true);
  });
});

describe('test_03', () => {
  const u = new Node(2);
  const v = new Node(2);
  const w = new Node(3);
  const x = new Node(3);
  const y = new Node(2);

  u.next = v;
  v.next = w;
  w.next = x;
  x.next = y;

  // 2 -> 2 -> 3 -> 3 -> 2

  test('iterative', () => {
    expect(isUnivalueList(u)).toBe(false);
  });

  test('recursive', () => {
    expect(isUnivalueListRecursive(u)).toBe(false);
  });
});

describe('test_04', () => {
  const z = new Node('z');

  // z

  test('iterative', () => {
    expect(isUnivalueList(z)).toBe(true);
  });

  test('recursive', () => {
    expect(isUnivalueListRecursive(z)).toBe(true);
  });
});
