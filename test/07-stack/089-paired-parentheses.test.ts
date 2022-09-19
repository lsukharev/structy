import pairedParentheses from '../../src/07-stack/089-paired-parentheses';

test('test_00', () => {
  expect(pairedParentheses('(david)((abby))'))
    .toBe(true);
});

test('test_01', () => {
  expect(pairedParentheses('()rose(jeff'))
    .toBe(false);
});

test('test_02', () => {
  expect(pairedParentheses(')('))
    .toBe(false);
});

test('test_03', () => {
  expect(pairedParentheses('()'))
    .toBe(true);
});

test('test_04', () => {
  expect(pairedParentheses('(((potato())))'))
    .toBe(true);
});

test('test_05', () => {
  expect(pairedParentheses('(())(water)()'))
    .toBe(true);
});

test('test_06', () => {
  expect(pairedParentheses('(())(water()()'))
    .toBe(false);
});

test('test_07', () => {
  expect(pairedParentheses(''))
    .toBe(true);
});

test('test_08', () => {
  expect(pairedParentheses('))()'))
    .toBe(false);
});