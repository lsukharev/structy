import tolerantTeams from '../../src/09-mixed-recall/111-tolerant-teams';

test('test_00', () => {
  const rivalries: [string, string][] = [
    ['philip', 'seb'],
    ['raj', 'nader']
  ];

  expect(tolerantTeams(rivalries)).toBe(true);
});

test('test_01', () => {
  const rivalries: [string, string][] = [
    ['philip', 'seb'],
    ['raj', 'nader'],
    ['raj', 'philip'],
    ['seb', 'raj']
  ];

  expect(tolerantTeams(rivalries)).toBe(false);
});

test('test_02', () => {
  const rivalries: [string, string][] = [
    ['cindy', 'anj'],
    ['alex', 'matt'],
    ['alex', 'cindy'],
    ['anj', 'matt'],
    ['brando', 'matt']
  ];

  expect(tolerantTeams(rivalries)).toBe(true);
});

test('test_03', () => {
  const rivalries: [string, string][] = [
    ['alex', 'anj'],
    ['alex', 'matt'],
    ['alex', 'cindy'],
    ['anj', 'matt'],
    ['brando', 'matt']
  ];

  expect(tolerantTeams(rivalries)).toBe(false);
});

test('test_04', () => {
  const rivalries: [string, string][] = [
    ['alan', 'jj'],
    ['betty', 'richard'],
    ['jj', 'simcha'],
    ['richard', 'christine']
  ];

  expect(tolerantTeams(rivalries)).toBe(true);
});

test('test_05', () => {
  const rivalries: [string, string][] = [
    ['alan', 'jj'],
    ['betty', 'richard'],
    ['jj', 'simcha'],
    ['richard', 'christine']
  ];

  expect(tolerantTeams(rivalries)).toBe(true);
});

test('test_06', () => {
  const rivalries: [string, string][] = [
    ['alan', 'jj'],
    ['jj', 'richard'],
    ['betty', 'richard'],
    ['jj', 'simcha'],
    ['richard', 'christine']
  ];

  expect(tolerantTeams(rivalries)).toBe(true);
});

test('test_07', () => {
  const rivalries: [string, string][] = [
    ['alan', 'jj'],
    ['betty', 'richard'],
    ['betty', 'christine'],
    ['jj', 'simcha'],
    ['richard', 'christine']
  ];

  expect(tolerantTeams(rivalries)).toBe(false);
});
