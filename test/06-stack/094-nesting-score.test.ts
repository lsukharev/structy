import nestingScore from '../../src/06-stack/094-nesting-score';

test('test_00', () => {
  expect(nestingScore('[]'))
    .toBe(1);
});

test('test_01', () => {
  expect(nestingScore('[][][]'))
    .toBe(3);
});

test('test_02', () => {
  expect(nestingScore('[[]]'))
    .toBe(2);
});

test('test_03', () => {
  expect(nestingScore('[[][]]'))
    .toBe(4);
});

test('test_04', () => {
  expect(nestingScore('[[][][]]'))
    .toBe(6);
});

test('test_05', () => {
  expect(nestingScore('[[][]][]'))
    .toBe(5);
});

test('test_06', () => {
  expect(nestingScore('[][[][]][[]]'))
    .toBe(7);
});

test('test_07', () => {
  expect(nestingScore('[[[[[[[][]]]]]]][]'))
    .toBe(129);
});
