import { addLists, addListsRecursive } from '../../src/03-linked-list/031-add-lists';
import Node from '../../src/03-linked-list/Node';

describe('test_00', () => {
  //   621
  // + 354
  // -----
  //   975

  const a1 = new Node(1);
  const a2 = new Node(2);
  const a3 = new Node(6);
  a1.next = a2;
  a2.next = a3;
  // 1 -> 2 -> 6

  const b1 = new Node(4);
  const b2 = new Node(5);
  const b3 = new Node(3);
  b1.next = b2;
  b2.next = b3;
  // 4 -> 5 -> 3

  test('iterative', () => {
    expect(addLists(a1, b1).toString())
      .toBe('5 -> 7 -> 9');
  });

  test('recursive', () => {
    expect(addListsRecursive(a1, b1).toString())
      .toBe('5 -> 7 -> 9');
  });
});

describe('test_01', () => {
  //  7541
  // +  32
  // -----
  //  7573

  const a1 = new Node(1);
  const a2 = new Node(4);
  const a3 = new Node(5);
  const a4 = new Node(7);
  a1.next = a2;
  a2.next = a3;
  a3.next = a4;
  // 1 -> 4 -> 5 -> 7

  const b1 = new Node(2);
  const b2 = new Node(3);
  b1.next = b2;
  // 2 -> 3

  test('iterative', () => {
    expect(addLists(a1, b1).toString())
      .toBe('3 -> 7 -> 5 -> 7');
  });

  test('recursive', () => {
    expect(addListsRecursive(a1, b1).toString())
      .toBe('3 -> 7 -> 5 -> 7');
  });
});

describe('test_02', () => {
  //   39
  // + 47
  // ----
  //   86

  const a1 = new Node(9);
  const a2 = new Node(3);
  a1.next = a2;
  // 9 -> 3

  const b1 = new Node(7);
  const b2 = new Node(4);
  b1.next = b2;
  // 7 -> 4

  test('iterative', () => {
    expect(addLists(a1, b1).toString())
      .toBe('6 -> 8');
  });

  test('recursive', () => {
    expect(addListsRecursive(a1, b1).toString())
      .toBe('6 -> 8');
  });
});

describe('test_03', () => {
  //   89
  // + 47
  // ----
  //  136

  const a1 = new Node(9);
  const a2 = new Node(8);
  a1.next = a2;
  // 9 -> 8

  const b1 = new Node(7);
  const b2 = new Node(4);
  b1.next = b2;
  // 7 -> 4

  test('iterative', () => {
    expect(addLists(a1, b1).toString())
      .toBe('6 -> 3 -> 1');
  });

  test('recursive', () => {
    expect(addListsRecursive(a1, b1).toString())
      .toBe('6 -> 3 -> 1');
  });
});

describe('test_04', () => {
  //   999
  //  +  6
  //  ----
  //  1005

  const a1 = new Node(9);
  const a2 = new Node(9);
  const a3 = new Node(9);
  a1.next = a2;
  a2.next = a3;
  // 9 -> 9 -> 9

  const b1 = new Node(6);
  // 6

  test('iterative', () => {
    expect(addLists(a1, b1).toString())
      .toBe('5 -> 0 -> 0 -> 1');
  });

  test('recursive', () => {
    expect(addListsRecursive(a1, b1).toString())
      .toBe('5 -> 0 -> 0 -> 1');
  });
});
