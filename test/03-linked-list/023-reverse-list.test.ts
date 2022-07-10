import { reverseList, reverseListRecursive } from '../../src/03-linked-list/023-reverse-list';
import Node from '../../src/03-linked-list/Node';

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
    expect(reverseList(a).toString())
      .toBe('f -> e -> d -> c -> b -> a');
  });

  test('recursive', () => {
    expect(reverseListRecursive(a).toString())
      .toBe('f -> e -> d -> c -> b -> a');
  });
});

describe('test_01', () => {
  let x: Node<string>;
  let y: Node<string>;

  beforeEach(() => {
    x = new Node('x');
    y = new Node('y');

    x.next = y;

    // x -> y
  });

  test('iterative', () => {
    expect(reverseList(x).toString())
      .toBe('y -> x');
  });

  test('recursive', () => {
    expect(reverseListRecursive(x).toString())
      .toBe('y -> x');
  });
});

describe('test_02', () => {
  let p: Node<string>;

  beforeEach(() => {
    p = new Node('p');

    // p
  });

  test('iterative', () => {
    expect(reverseList(p).toString())
      .toBe('p');
  });

  test('recursive', () => {
    expect(reverseListRecursive(p).toString())
      .toBe('p');
  });
});
