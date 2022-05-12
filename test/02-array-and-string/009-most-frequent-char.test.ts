import { mostFrequentChar } from '../../src/02-array-and-string/009-most-frequent-char';

test('test_00', () => {
  expect(mostFrequentChar('bookeeper')).toBe('e');
});

test('test_01', () => {
  expect(mostFrequentChar('david')).toBe('d');
});

test('test_02', () => {
  expect(mostFrequentChar('abby')).toBe('b');
});

test('test_03', () => {
  expect(mostFrequentChar('mississippi')).toBe('i');
});

test('test_04', () => {
  expect(mostFrequentChar('potato')).toBe('o');
});

test('test_05', () => {
  expect(mostFrequentChar('eleventennine')).toBe('e');
});

test('test_06', () => {
  expect(mostFrequentChar('riverbed')).toBe('r');
});
