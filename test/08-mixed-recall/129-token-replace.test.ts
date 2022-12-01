import tokenReplace from '../../src/08-mixed-recall/129-token-replace';

test('test_00', () => {
  const tokens = {
    '$LOCATION$': 'park',
    '$ANIMAL$': 'dog'
  };

  expect(tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens))
    .toBe('Walk the dog in the park!');
});

test('test_01', () => {
  const tokens = {
    '$ADJECTIVE$': 'quick',
    '$VERB$': 'hopped',
    '$DIRECTION$': 'North'
  };

  expect(tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', tokens))
    .toBe('the quick fox hopped quickly Northward');
});

test('test_02', () => {
  const tokens = {
    '$greeting$': 'hey programmer'
  };

  expect(tokenReplace('his greeting is always $greeting$.', tokens))
    .toBe('his greeting is always hey programmer.');
});

test('test_03', () => {
  const tokens = {
    '$A$': 'lions',
    '$B$': 'tigers',
    '$C$': 'bears'
  };

  expect(tokenReplace('$A$$B$$C$, oh my.', tokens))
    .toBe('lionstigersbears, oh my.');
});

test('test_04', () => {
  const tokens = {
    '$A$': 'lions',
    '$B$': 'tigers',
    '$C$': 'bears'
  };

  expect(tokenReplace('$B$', tokens))
    .toBe('tigers');
});

test('test_05', () => {
  const tokens = {
    '$second$': 'beta',
    '$first$': 'alpha',
    '$third$': 'gamma'
  };

  expect(tokenReplace('$first$second$third$', tokens))
    .toBe('alphasecondgamma');
});
