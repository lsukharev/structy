import parentheticalPossibilities from '../../src/07-exhaustive-recursion/100-parenthetical-possibilities';

test('test_00', () => {
  const expected = ['xmyz', 'xnyz'];

  expect(parentheticalPossibilities('x(mn)yz'))
    .toIncludeSameMembers(expected);
});

test('test_01', () => {
  const expected = ['qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc'];

  expect(parentheticalPossibilities('(qr)ab(stu)c'))
    .toIncludeSameMembers(expected);
});

test('test_02', () => {
  const expected = ['taco'];

  expect(parentheticalPossibilities('taco'))
    .toIncludeSameMembers(expected);
});

test('test_03', () => {
  const expected = [''];

  expect(parentheticalPossibilities(''))
    .toIncludeSameMembers(expected);
});

test('test_04', () => {
  const expected = [
    'ebc', 'eba', 'ebt', 'elc', 'ela',
    'elt', 'evc', 'eva', 'evt', 'edc',
    'eda', 'edt', 'tbc', 'tba', 'tbt',
    'tlc', 'tla', 'tlt', 'tvc', 'tva',
    'tvt', 'tdc', 'tda', 'tdt', 'cbc',
    'cba', 'cbt', 'clc', 'cla', 'clt',
    'cvc', 'cva', 'cvt', 'cdc', 'cda',
    'cdt'
  ];

  expect(parentheticalPossibilities('(etc)(blvd)(cat)'))
    .toIncludeSameMembers(expected);
});
