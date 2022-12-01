import combineIntervals from '../../src/09-mixed-recall/117-combine-intervals';

test('test_00', () => {
  const intervals: [number, number][] = [
    [1, 4],
    [12, 15],
    [3, 7],
    [8, 13]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[1, 7], [8, 15]]);
});

test('test_01', () => {
  const intervals: [number, number][] = [
    [6, 8],
    [2, 9],
    [10, 12],
    [20, 24]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[2, 9], [10, 12], [20, 24]]);
});

test('test_02', () => {
  const intervals: [number, number][] = [
    [3, 7],
    [5, 8],
    [1, 5]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[1, 8]]);
});

test('test_03', () => {
  const intervals: [number, number][] = [
    [3, 7],
    [10, 13],
    [5, 8],
    [27, 31],
    [1, 5],
    [12, 16],
    [20, 22]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[1, 8], [10, 16], [20, 22], [27, 31]]);
});

test('test_04', () => {
  const intervals: [number, number][] = [
    [3, 7],
    [10, 13],
    [5, 8],
    [27, 31],
    [1, 5],
    [12, 16],
    [20, 32]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[1, 8], [10, 16], [20, 32]]);
});

test('test_05', () => {
  const intervals: [number, number][] = [
    [64, 70],
    [50, 55],
    [62, 65],
    [12, 50],
    [72, 300000]
  ];
  expect(combineIntervals(intervals))
    .toIncludeSameMembers([[12, 55], [62, 70], [72, 300000]]);
});
