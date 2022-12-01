import { linkedListFind, linkedListFindRecursive } from '../../src/02-linked-list/021-linked-list-find';
import Node from '../../src/02-linked-list/Node';

describe('test_00', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  test('iterative', () => {
    expect(linkedListFind(a, 'c')).toBe(true);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(a, 'c')).toBe(true);
  });
});

describe('test_01', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  test('iterative', () => {
    expect(linkedListFind(a, 'd')).toBe(true);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(a, 'd')).toBe(true);
  });
});

describe('test_02', () => {
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  test('iterative', () => {
    expect(linkedListFind(a, 'q')).toBe(false);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(a, 'q')).toBe(false);
  });
});

describe('test_03', () => {
  const node1 = new Node('jason');
  const node2 = new Node('leneli');

  node1.next = node2;

  // jason -> leneli

  test('iterative', () => {
    expect(linkedListFind(node1, 'jason')).toBe(true);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(node1, 'jason')).toBe(true);
  });
});

describe('test_04', () => {
  const node1 = new Node(42);

  // 42

  test('iterative', () => {
    expect(linkedListFind(node1, 42)).toBe(true);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(node1, 42)).toBe(true);
  });
});

describe('test_05', () => {
  const node1 = new Node(42);

  // 42

  test('iterative', () => {
    expect(linkedListFind(node1, 100)).toBe(false);
  });

  test('recursive', () => {
    expect(linkedListFindRecursive(node1, 100)).toBe(false);
  });
});
