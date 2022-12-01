import countingChange from '../../src/06-dynamic-programming/081-counting-change';

test('test_00', () => {
  expect(countingChange(4, [1, 2, 3]))
    .toBe(4);
});

test('test_01', () => {
  expect(countingChange(8, [1, 2, 3]))
    .toBe(10);
});

test('test_02', () => {
  expect(countingChange(24, [5, 7, 3]))
    .toBe(5);
});

test('test_03', () => {
  expect(countingChange(13, [2, 6, 12, 10]))
    .toBe(0);
});

test('test_04', () => {
  expect(countingChange(512, [1, 5, 10, 25]))
    .toBe(20119);
});

test('test_05', () => {
  expect(countingChange(1000, [1, 5, 10, 25]))
    .toBe(142511);
});

test('test_06', () => {
  expect(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    .toBe(1525987916);
});
