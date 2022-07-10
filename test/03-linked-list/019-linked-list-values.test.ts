import { linkedListValues, linkedListValuesRecursive } from '../../src/03-linked-list/019-linked-list-values';
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
    expect(linkedListValues(a)).toEqual(['a', 'b', 'c', 'd']);
  });

  test('recursive', () => {
    expect(linkedListValuesRecursive(a)).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('test_01', () => {
  const x = new Node('x');
  const y = new Node('y');

  x.next = y;

  // x -> y

  test('iterative', () => {
    expect(linkedListValues(x)).toEqual(['x', 'y']);
  });

  test('recursive', () => {
    expect(linkedListValuesRecursive(x)).toEqual(['x', 'y']);
  });
});

describe('test_02', () => {
  const q = new Node('q');

  // q

  test('iterative', () => {
    expect(linkedListValues(q)).toEqual(['q']);
  });

  test('recursive', () => {
    expect(linkedListValuesRecursive(q)).toEqual(['q']);
  });
});

describe('test_03', () => {
  test('iterative', () => {
    expect(linkedListValues(null)).toEqual([]);
  });

  test('recursive', () => {
    expect(linkedListValuesRecursive(null)).toEqual([]);
  });
});
