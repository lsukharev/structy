import { uncompress } from '../../src/02-array-and-string/006-uncompress';

test('test_00', () => {
  expect(uncompress('2c3a1t')).toBe('ccaaat');
});

test('test_01', () => {
  expect(uncompress('4s2b')).toBe('ssssbb');
});

test('test_02', () => {
  expect(uncompress('2p1o5p')).toBe('ppoppppp');
});

test('test_03', () => {
  expect(uncompress('3n12e2z')).toBe('nnneeeeeeeeeeeezz');
});

test('test_04', () => {
  expect(uncompress('127y')).toBe('y'.repeat(127));
});
