import { getNodeValue, getNodeValueRecursive } from '../../src/03-linked-list/022-get-node-value';
import Node from '../../src/03-linked-list/Node';

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
    expect(getNodeValue(a, 2)).toBe('c');
  });

  test('recursive', () => {
    expect(getNodeValueRecursive(a, 2)).toBe('c');
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
    expect(getNodeValue(a, 3)).toBe('d');
  });

  test('recursive', () => {
    expect(getNodeValueRecursive(a, 3)).toBe('d');
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
    expect(getNodeValue(a, 7)).toBe(null);
  });

  test('recursive', () => {
    expect(getNodeValueRecursive(a, 7)).toBe(null);
  });
});

describe('test_03', () => {
  const node1 = new Node('banana');
  const node2 = new Node('mango');

  node1.next = node2;

  // banana -> mango

  test('iterative', () => {
    expect(getNodeValue(node1, 0)).toBe('banana');
  });

  test('recursive', () => {
    expect(getNodeValueRecursive(node1, 0)).toBe('banana');
  });
});

describe('test_04', () => {
  const node1 = new Node('banana');
  const node2 = new Node('mango');

  node1.next = node2;

  // banana -> mango

  test('iterative', () => {
    expect(getNodeValue(node1, 1)).toBe('mango');
  });

  test('recursive', () => {
    expect(getNodeValueRecursive(node1, 1)).toBe('mango');
  });
});
