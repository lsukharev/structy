import { createLinkedList, createLinkedListRecursive } from '../../src/03-linked-list/030-create-linked-list';

describe('test_00', () => {
  test('iterative', () => {
    expect(createLinkedList(['h', 'e', 'y']).toString())
      .toBe('h -> e -> y');
  });

  test('recursive', () => {
    expect(createLinkedListRecursive(['h', 'e', 'y']).toString())
      .toBe('h -> e -> y');
  });
});

describe('test_01', () => {
  test('iterative', () => {
    expect(createLinkedList([1, 7, 1, 8]).toString())
      .toBe('1 -> 7 -> 1 -> 8');
  });

  test('recursive', () => {
    expect(createLinkedListRecursive([1, 7, 1, 8]).toString())
      .toBe('1 -> 7 -> 1 -> 8');
  });
});

describe('test_02', () => {
  test('iterative', () => {
    expect(createLinkedList(['a']).toString())
      .toBe('a');
  });

  test('recursive', () => {
    expect(createLinkedListRecursive(['a']).toString())
      .toBe('a');
  });
});

describe('test_03', () => {
  test('iterative', () => {
    expect(createLinkedList([]))
      .toBe(null);
  });

  test('recursive', () => {
    expect(createLinkedListRecursive([]))
      .toBe(null);
  });
});
