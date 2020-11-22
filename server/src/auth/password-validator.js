function passwordValidator(password) {
  return (
    password.length >= 6 &&
    /\W/i.test(password) &&
    /\d/i.test(password) &&
    /[A-Z]/.test(password)
  );
}

module.exports = { passwordValidator };
