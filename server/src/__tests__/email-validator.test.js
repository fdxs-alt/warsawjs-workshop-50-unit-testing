const { isEmailAllowed } = require('../utils/email-validator');

test('should email be allowed ', () => {
  const goodEmail = 'test@warsaw.js';

  const result = isEmailAllowed(goodEmail);

  expect(result).toBe(true);
});

test('should email not be allowed without warsaw.js domain ', () => {
  const badEmail = 'test@warsaw.ssjs';

  const result = isEmailAllowed(badEmail);

  expect(result).toBe(false);
});

const cases = [
  ['war1_@warsaw.js', false],
  ['war_345@warsaw.js', false],
  ['12345@warsaw.js', false],
];

test.each(cases)('Should not contain numbers', (email, expected) => {
  const result = isEmailAllowed(email);
  expect(result).toBe(expected);
});
