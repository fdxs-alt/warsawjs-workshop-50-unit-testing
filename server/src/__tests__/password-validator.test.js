const { passwordValidator } = require('../auth/password-validator');

describe('password validator', () => {
  test('should return false if password is shorter than 6 char', () => {
    const isValid = passwordValidator('sss');
    expect(isValid).toBe(false);
  });

  test('should return false for password not contain non-alphanum string', () => {
    const isValid = passwordValidator('ssswowow12');
    expect(isValid).toBe(false);
  });

  test('should return false for password not conaining digit', () => {
    const isValid = passwordValidator('ssswowow@');
    expect(isValid).toBe(false);
  });

  test('should return true for valid password', () => {
    const isValid = passwordValidator('ssS12wowow@');
    expect(isValid).toBe(true);
  });

  test('should return false for password not containing capital letter', () => {
    const isValid = passwordValidator('ssswowo12w%');
    expect(isValid).toBe(false);
  });
});
