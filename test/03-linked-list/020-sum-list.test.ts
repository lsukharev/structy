import Node from '../../src/03-linked-list/Node';
import {
  sumList,
  sumListRecursive
} from '../../src/03-linked-list/020-sum-list';

describe('test_00', () => {
  const a = new Node(2);
  const b = new Node(8);
  const c = new Node(3);
  const d = new Node(-1);
  const e = new Node(7);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  // 2 -> 8 -> 3 -> -1 -> 7

  test('iterative', () => {
    expect(sumList(a)).toEqual(19);
  });

  test('recursive', () => {
    expect(sumListRecursive(a)).toEqual(19);
  });
});

describe('test_01', () => {
  const x = new Node(38);
  const y = new Node(4);

  x.next = y;

  // 38 -> 4

  test('iterative', () => {
    expect(sumList(x)).toEqual(42);
  });

  test('recursive', () => {
    expect(sumListRecursive(x)).toEqual(42);
  });
});

describe('test_02', () => {
  const z = new Node(100);

  // 100

  test('iterative', () => {
    expect(sumList(z)).toEqual(100);
  });

  test('recursive', () => {
    expect(sumListRecursive(z)).toEqual(100);
  });
});

describe('test_03', () => {
  test('iterative', () => {
    expect(sumList(null)).toEqual(0);
  });

  test('recursive', () => {
    expect(sumListRecursive(null)).toEqual(0);
  });
});
