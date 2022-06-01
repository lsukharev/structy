import Node from '../../src/03-linked-list/Node';
import {
  zipperLists,
  zipperListsRecursive
} from '../../src/03-linked-list/024-zipper-lists';

describe('test_00', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let x: Node<string>;
  let y: Node<string>;
  let z: Node<string>;

  beforeEach(() => {
    a = new Node('a');
    b = new Node('b');
    c = new Node('c');
    a.next = b;
    b.next = c;
    // a -> b -> c

    x = new Node('x');
    y = new Node('y');
    z = new Node('z');
    x.next = y;
    y.next = z;
    // x -> y -> z
  });

  test('iterative', () => {
    expect(zipperLists(a, x).toString())
      .toBe('a -> x -> b -> y -> c -> z');
  });

  test('recursive', () => {
    expect(zipperListsRecursive(a, x).toString())
      .toBe('a -> x -> b -> y -> c -> z');
  });
});

describe('test_01', () => {
  let a: Node<string>;
  let b: Node<string>;
  let c: Node<string>;
  let d: Node<string>;
  let e: Node<string>;
  let f: Node<string>;
  let x: Node<string>;
  let y: Node<string>;
  let z: Node<string>;

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

    x = new Node('x');
    y = new Node('y');
    z = new Node('z');
    x.next = y;
    y.next = z;
    // x -> y -> z
  });

  test('iterative', () => {
    expect(zipperLists(a, x).toString())
      .toBe('a -> x -> b -> y -> c -> z -> d -> e -> f');
  });

  test('recursive', () => {
    expect(zipperListsRecursive(a, x).toString())
      .toBe('a -> x -> b -> y -> c -> z -> d -> e -> f');
  });
});

describe('test_02', () => {
  let s: Node<string>;
  let t: Node<string>;
  let one: Node<number>;
  let two: Node<number>;
  let three: Node<number>;
  let four: Node<number>;

  beforeEach(() => {
    s = new Node('s');
    t = new Node('t');
    s.next = t;
    // s -> t

    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    four = new Node(4);
    one.next = two;
    two.next = three;
    three.next = four;
    // 1 -> 2 -> 3 -> 4
  });

  test('iterative', () => {
    expect(zipperLists(s, one).toString())
      .toBe('s -> 1 -> t -> 2 -> 3 -> 4');
  });

  test('recursive', () => {
    expect(zipperListsRecursive(s, one).toString())
      .toBe('s -> 1 -> t -> 2 -> 3 -> 4');
  });
});

describe('test_03', () => {
  let w: Node<string>;
  let one: Node<number>;
  let two: Node<number>;
  let three: Node<number>;

  beforeEach(() => {
    w = new Node('w');
    // w

    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    one.next = two;
    two.next = three;
    // 1 -> 2 -> 3
  });

  test('iterative', () => {
    expect(zipperLists(w, one).toString())
      .toBe('w -> 1 -> 2 -> 3');
  });

  test('recursive', () => {
    expect(zipperListsRecursive(w, one).toString())
      .toBe('w -> 1 -> 2 -> 3');
  });
});

describe('test_04', () => {
  let one: Node<number>;
  let two: Node<number>;
  let three: Node<number>;
  let w: Node<string>;

  beforeEach(() => {
    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    one.next = two;
    two.next = three;
    // 1 -> 2 -> 3

    w = new Node('w');
    // w
  });

  test('iterative', () => {
    expect(zipperLists(one, w).toString())
      .toBe('1 -> w -> 2 -> 3');
  });

  test('recursive', () => {
    expect(zipperListsRecursive(one, w).toString())
      .toBe('1 -> w -> 2 -> 3');
  });
});
