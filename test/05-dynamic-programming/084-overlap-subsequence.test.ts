import overlapSubsequence from '../../src/05-dynamic-programming/084-overlap-subsequence';

test('test_00', () => {
  expect(overlapSubsequence('dogs', 'daogt'))
    .toBe(3);
});

test('test_01', () => {
  expect(overlapSubsequence('xcyats', 'criaotsi'))
    .toBe(4);
});

test('test_02', () => {
  expect(overlapSubsequence('xfeqortsver', 'feeeuavoeqr'))
    .toBe(5);
});

test('test_03', () => {
  expect(overlapSubsequence('kinfolklivemustache', 'bespokekinfolksnackwave'))
    .toBe(11);
});

test('test_04', () => {
  const strA = 'mumblecorebeardleggingsauthenticunicorn';
  const strB = 'succulentspughumblemeditationlocavore';
  expect(overlapSubsequence(strA, strB))
    .toBe(15);
});
