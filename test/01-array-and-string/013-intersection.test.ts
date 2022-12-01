import intersection from '../../src/01-array-and-string/013-intersection';

test('test_00', () => {
  expect(intersection([4, 2, 1, 6], [2, 3, 6, 9, 10])).toEqual([2, 6]);
});

test('test_01', () => {
  expect(intersection([2, 4, 6], [2, 4])).toEqual([2, 4]);
});

test('test_02', () => {
  expect(intersection([4, 2, 1], [1, 2, 4, 6])).toEqual([1, 2, 4]);
});

test('test_03', () => {
  expect(intersection([0, 1, 2], [10, 11])).toEqual([]);
});

test('test_04', () => {
  const a: number[] = [];
  const b: number[] = [];

  for (let i = 0; i < 50000; i += 1) {
    a.push(i);
    b.push(i);
  }

  expect(intersection(a, b)).toEqual([...Array(50000).keys()]);
});
