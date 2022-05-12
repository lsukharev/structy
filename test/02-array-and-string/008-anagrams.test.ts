import anagrams from '../../src/02-array-and-string/008-anagrams';

test('test_00', () => {
  expect(anagrams('restful', 'fluster')).toBe(true);
});

test('test_01', () => {
  expect(anagrams('cats', 'tocs')).toBe(false);
});

test('test_02', () => {
  expect(anagrams('monkeyswrite', 'newyorktimes')).toBe(true);
});

test('test_03', () => {
  expect(anagrams('paper', 'reapa')).toBe(false);
});

test('test_04', () => {
  expect(anagrams('elbow', 'below')).toBe(true);
});

test('test_05', () => {
  expect(anagrams('tax', 'taxi')).toBe(false);
});

test('test_06', () => {
  expect(anagrams('taxi', 'tax')).toBe(false);
});

test('test_07', () => {
  expect(anagrams('night', 'thing')).toBe(true);
});

test('test_08', () => {
  expect(anagrams('abbc', 'aabc')).toBe(false);
});
