import Node from '../../src/03-linked-list/Node';
import {
  removeNode,
  removeNodeRecursive
} from '../../src/03-linked-list/028-remove-node';

describe('test_00', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let d: Node<string>;
  let e: Node<string>;
  let f: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');
    c = new Node('c');
    d = new Node('d');
    e = new Node('e');
    f = new Node('f');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    // a -> b -> c -> d -> e -> f
  });

  test('iterative', () => {
    expect(removeNode(a, 'c').toString())
      .toBe('a -> b -> d -> e -> f');
  });

  test('recursive', () => {
    expect(removeNodeRecursive(a, 'c').toString())
      .toBe('a -> b -> d -> e -> f');
  });
});

describe('test_01', () => {
  let x: Node<string>;
  let y: Node<string>;
  let z: Node<string>;

  beforeEach(() => {
    x = new Node('x');
    y = new Node('y');
    z = new Node('z');

    x.next = y;
    y.next = z;

    // x -> y -> z
  });

  test('iterative', () => {
    expect(removeNode(x, 'z').toString())
      .toBe('x -> y');
  });

  test('recursive', () => {
    expect(removeNodeRecursive(x, 'z').toString())
      .toBe('x -> y');
  });
});

describe('test_02', () => {
  let q: Node<string>;
  let r: Node<string>;
  let s: Node<string>;

  beforeEach(() => {
    q = new Node('q');
    r = new Node('r');
    s = new Node('s');

    q.next = r;
    r.next = s;

    // q -> r -> s
  });

  test('iterative', () => {
    expect(removeNode(q, 'q').toString())
      .toBe('r -> s');
  });

  test('recursive', () => {
    expect(removeNodeRecursive(q, 'q').toString())
      .toBe('r -> s');
  });
});

describe('test_03', () => {
  let node1: Node<string>;
  let node2: Node<string>;
  let node3: Node<string>;
  let node4: Node<string>;

  beforeEach(() => {
    node1 = new Node('h');
    node2 = new Node('i');
    node3 = new Node('j');
    node4 = new Node('i');

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    // h -> i -> j -> i
  });

  test('iterative', () => {
    expect(removeNode(node1, 'i').toString())
      .toBe('h -> j -> i');
  });

  test('recursive', () => {
    expect(removeNodeRecursive(node1, 'i').toString())
      .toBe('h -> j -> i');
  });
});

describe('test_04', () => {
  let t: Node<string>;

  beforeEach(() => {
    t = new Node('t');

    // t
  });

  test('iterative', () => {
    expect(removeNode(t, 't'))
      .toBe(null);
  });

  test('recursive', () => {
    expect(removeNodeRecursive(t, 't'))
      .toBe(null);
  });
});
