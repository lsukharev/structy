import compress from '../../src/01-array-and-string/007-compress';

test('test_00', () => {
  expect(compress('ccaaatsss')).toBe('2c3at3s');
});

test('test_01', () => {
  expect(compress('ssssbbz')).toBe('4s2bz');
});

test('test_02', () => {
  expect(compress('ppoppppp')).toBe('2po5p');
});

test('test_03', () => {
  expect(compress('nnneeeeeeeeeeeezz')).toBe('3n12e2z');
});

test('test_04', () => {
  expect(compress('y'.repeat(127))).toBe('127y');
});
