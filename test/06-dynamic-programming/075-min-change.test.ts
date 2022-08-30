import minChange from '../../src/06-dynamic-programming/075-min-change';

test('test_00', () => {
  expect(minChange(8, [1, 5, 4, 12]))
    .toBe(2);
});

test('test_01', () => {
  expect(minChange(13, [1, 9, 5, 14, 30]))
    .toBe(5);
});

test('test_02', () => {
  expect(minChange(23, [2, 5, 7]))
    .toBe(4);
});

test('test_03', () => {
  expect(minChange(102, [1, 5, 10, 25]))
    .toBe(6);
});

test('test_04', () => {
  expect(minChange(200, [1, 5, 10, 25]))
    .toBe(8);
});

test('test_05', () => {
  expect(minChange(2017, [4, 2, 10]))
    .toBe(-1);
});

test('test_06', () => {
  expect(minChange(271, [10, 8, 265, 24]))
    .toBe(-1);
});

test('test_07', () => {
  expect(minChange(0, [4, 2, 10]))
    .toBe(0);
});

test('test_08', () => {
  expect(minChange(0, []))
    .toBe(0);
});
