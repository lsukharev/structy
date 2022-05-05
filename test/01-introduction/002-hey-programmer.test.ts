import { greet } from '../../src/01-introduction/002-hey-programmer';

test('greet (test_00)', () => {
  expect(greet('alvin')).toBe('hey alvin');
});

test('greet (test_01)', () => {
  expect(greet('jason')).toBe('hey jason');
});

test('greet (test_02)', () => {
  expect(greet('how now brown cow')).toBe('hey how now brown cow');
});
