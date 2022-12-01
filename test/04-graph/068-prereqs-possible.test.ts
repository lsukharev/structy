import prereqsPossible from '../../src/04-graph/068-prereqs-possible';

test('test_00', () => {
  const prereqs: [number, number][] = [
    [0, 1],
    [2, 3],
    [0, 2],
    [1, 3],
    [4, 5]
  ];

  expect(prereqsPossible(6, prereqs))
    .toBe(true);
});

test('test_01', () => {
  const prereqs: [number, number][] = [
    [0, 1],
    [2, 3],
    [0, 2],
    [1, 3],
    [4, 5],
    [3, 0]
  ];

  expect(prereqsPossible(6, prereqs))
    .toBe(false);
});

test('test_02', () => {
  const prereqs: [number, number][] = [
    [2, 4],
    [1, 0],
    [0, 2],
    [0, 4]
  ];

  expect(prereqsPossible(5, prereqs))
    .toBe(true);
});

test('test_03', () => {
  const prereqs: [number, number][] = [
    [2, 4],
    [1, 0],
    [0, 2],
    [0, 4],
    [5, 3],
    [3, 5]
  ];

  expect(prereqsPossible(6, prereqs))
    .toBe(false);
});

test('test_04', () => {
  const prereqs: [number, number][] = [
    [1, 0],
    [0, 6],
    [2, 0],
    [0, 5],
    [3, 7],
    [4, 3]
  ];

  expect(prereqsPossible(8, prereqs))
    .toBe(true);
});

test('test_05', () => {
  const prereqs: [number, number][] = [
    [1, 0],
    [0, 6],
    [2, 0],
    [0, 5],
    [3, 7],
    [7, 4],
    [4, 3]
  ];

  expect(prereqsPossible(8, prereqs))
    .toBe(false);
});

test('test_06', () => {
  const prereqs: [number, number][] = [
    [6, 36]
  ];

  expect(prereqsPossible(42, prereqs))
    .toBe(true);
});
