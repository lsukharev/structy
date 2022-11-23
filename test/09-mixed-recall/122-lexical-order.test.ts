import lexicalOrder from '../../src/09-mixed-recall/122-lexical-order';

test('test_00', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  expect(lexicalOrder('apple', 'dock', alphabet))
    .toBe(true);
});

test('test_01', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  expect(lexicalOrder('apple', 'ample', alphabet))
    .toBe(false);
});

test('test_02', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  expect(lexicalOrder('app', 'application', alphabet))
    .toBe(true);
});

test('test_03', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  expect(lexicalOrder('backs', 'backdoor', alphabet))
    .toBe(false);
});

test('test_04', () => {
  const alphabet = 'ghzstijbacdopnfklmeqrxyuvw';
  expect(lexicalOrder('zoo', 'dinner', alphabet))
    .toBe(true);
});

test('test_05', () => {
  const alphabet = 'ghzstijbacdopnfklmeqrxyuvw';
  expect(lexicalOrder('leaper', 'leap', alphabet))
    .toBe(false);
});

test('test_06', () => {
  const alphabet = 'ghzstijbacdopnfklmeqrxyuvw';
  expect(lexicalOrder('backs', 'backdoor', alphabet))
    .toBe(true);
});

test('test_07', () => {
  const alphabet = 'ghzstijbacdopnfklmeqrxyuvw';
  expect(lexicalOrder('semper', 'semper', alphabet))
    .toBe(true);
});
