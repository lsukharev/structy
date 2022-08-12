import semestersRequired from '../../src/05-graph/065-semesters-required';

test('test_00', () => {
  const prereqs: [number, number][] = [
    [1, 2],
    [2, 4],
    [3, 5],
    [0, 5]
  ];

  expect(semestersRequired(6, prereqs))
    .toBe(3);
});

test('test_01', () => {
  const prereqs: [number, number][] = [
    [4, 3],
    [3, 2],
    [2, 1],
    [1, 0],
    [5, 2],
    [5, 6]
  ];

  expect(semestersRequired(7, prereqs))
    .toBe(5);
});

test('test_02', () => {
  const prereqs: [number, number][] = [
    [1, 0],
    [3, 4],
    [1, 2],
    [3, 2]
  ];

  expect(semestersRequired(5, prereqs))
    .toBe(2);
});

test('test_03', () => {
  const prereqs: [number, number][] = [];

  expect(semestersRequired(12, prereqs))
    .toBe(1);
});

test('test_04', () => {
  const prereqs: [number, number][] = [
    [0, 2],
    [0, 1],
    [1, 2]
  ];

  expect(semestersRequired(3, prereqs))
    .toBe(3);
});

test('test_05', () => {
  const prereqs: [number, number][] = [
    [3, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 5]
  ];

  expect(semestersRequired(6, prereqs))
    .toBe(2);
});
