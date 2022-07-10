import { mergeLists, mergeListsRecursive } from '../../src/03-linked-list/025-merge-lists';
import Node from '../../src/03-linked-list/Node';

describe('test_00', () => {
  let a: Node<number>;
  let b: Node<number>;
  let c: Node<number>;
  let d: Node<number>;
  let e: Node<number>;
  let f: Node<number>;
  let q: Node<number>;
  let r: Node<number>;
  let s: Node<number>;
  let t: Node<number>;

  beforeEach(() => {
    a = new Node(5);
    b = new Node(7);
    c = new Node(10);
    d = new Node(12);
    e = new Node(20);
    f = new Node(28);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    // 5 -> 7 -> 10 -> 12 -> 20 -> 28

    q = new Node(6);
    r = new Node(8);
    s = new Node(9);
    t = new Node(25);
    q.next = r;
    r.next = s;
    s.next = t;
    // 6 -> 8 -> 9 -> 25
  });

  test('iterative', () => {
    expect(mergeLists(a, q).toString())
      .toBe('5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28');
  });

  test('recursive', () => {
    expect(mergeListsRecursive(a, q).toString())
      .toBe('5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28');
  });
});

describe('test_01', () => {
  let a: Node<number>;
  let b: Node<number>;
  let c: Node<number>;
  let d: Node<number>;
  let e: Node<number>;
  let f: Node<number>;
  let q: Node<number>;
  let r: Node<number>;
  let s: Node<number>;
  let t: Node<number>;

  beforeEach(() => {
    a = new Node(5);
    b = new Node(7);
    c = new Node(10);
    d = new Node(12);
    e = new Node(20);
    f = new Node(28);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    // 5 -> 7 -> 10 -> 12 -> 20 -> 28

    q = new Node(1);
    r = new Node(8);
    s = new Node(9);
    t = new Node(10);
    q.next = r;
    r.next = s;
    s.next = t;
    // 1 -> 8 -> 9 -> 10
  });

  test('iterative', () => {
    expect(mergeLists(a, q).toString())
      .toBe('1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28');
  });

  test('recursive', () => {
    expect(mergeListsRecursive(a, q).toString())
      .toBe('1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28');
  });
});

describe('test_02', () => {
  let h: Node<number>;
  let p: Node<number>;
  let q: Node<number>;

  beforeEach(() => {
    h = new Node(30);
    // 30

    p = new Node(15);
    q = new Node(67);
    p.next = q;
    // 15 -> 67
  });

  test('iterative', () => {
    expect(mergeLists(h, p).toString())
      .toBe('15 -> 30 -> 67');
  });

  test('recursive', () => {
    expect(mergeListsRecursive(h, p).toString())
      .toBe('15 -> 30 -> 67');
  });
});
