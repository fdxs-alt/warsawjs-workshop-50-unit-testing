const createHttpError = require('http-errors');
const { checkSignIn } = require('../auth/auth-middleware');

test('should pass user with active session', () => {
  const req = {
    session: {
      user: {},
    },
  };

  const next = jest.fn();

  checkSignIn(req, () => {}, next);

  expect(next).toBeCalledTimes(1);
  expect(next).toBeCalledWith();
});

test('should not pass user', () => {
  const req = {
    session: {},
  };

  const next = jest.fn();

  checkSignIn(req, () => {}, next);

  expect(next).toBeCalledTimes(1);
  expect(next).toBeCalledWith(createHttpError(401));
});
