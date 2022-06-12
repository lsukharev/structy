import Node from '../../src/03-linked-list/Node';
import {
  insertNode,
  insertNodeRecursive
} from '../../src/03-linked-list/029-insert-node';

describe('test_00', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let d: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');
    c = new Node('c');
    d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
  });

  test('iterative', () => {
    expect(insertNode(a, 'x', 2).toString())
      .toBe('a -> b -> x -> c -> d');
  });

  test('recursive', () => {
    expect(insertNodeRecursive(a, 'x', 2).toString())
      .toBe('a -> b -> x -> c -> d');
  });
});

describe('test_01', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let d: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');
    c = new Node('c');
    d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
  });

  test('iterative', () => {
    expect(insertNode(a, 'v', 3).toString())
      .toBe('a -> b -> c -> v -> d');
  });

  test('recursive', () => {
    expect(insertNodeRecursive(a, 'v', 3).toString())
      .toBe('a -> b -> c -> v -> d');
  });
});

describe('test_02', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let d: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');
    c = new Node('c');
    d = new Node('d');

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d
  });

  test('iterative', () => {
    expect(insertNode(a, 'm', 4).toString())
      .toBe('a -> b -> c -> d -> m');
  });

  test('recursive', () => {
    expect(insertNodeRecursive(a, 'm', 4).toString())
      .toBe('a -> b -> c -> d -> m');
  });
});

describe('test_03', () => {
  let a: Node<string>;
  let b: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');

    a.next = b;

    // a -> b
  });

  test('iterative', () => {
    expect(insertNode(a, 'z', 0).toString())
      .toBe('z -> a -> b');
  });

  test('recursive', () => {
    expect(insertNodeRecursive(a, 'z', 0).toString())
      .toBe('z -> a -> b');
  });
});
