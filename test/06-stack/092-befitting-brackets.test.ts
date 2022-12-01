import befittingBrackets from '../../src/06-stack/092-befitting-brackets';

test('test_00', () => {
  expect(befittingBrackets('(){}[](())'))
    .toBe(true);
});

test('test_01', () => {
  expect(befittingBrackets('({[]})'))
    .toBe(true);
});

test('test_02', () => {
  expect(befittingBrackets('[][}'))
    .toBe(false);
});

test('test_03', () => {
  expect(befittingBrackets('{[]}({}'))
    .toBe(false);
});

test('test_04', () => {
  expect(befittingBrackets('[]{}(}[]'))
    .toBe(false);
});

test('test_05', () => {
  expect(befittingBrackets('[]{}()[]'))
    .toBe(true);
});

test('test_06', () => {
  expect(befittingBrackets(']{}'))
    .toBe(false);
});

test('test_07', () => {
  expect(befittingBrackets(''))
    .toBe(true);
});

test('test_08', () => {
  expect(befittingBrackets('{[(}])'))
    .toBe(false);
});
