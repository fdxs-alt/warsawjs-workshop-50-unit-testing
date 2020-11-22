const Rental = require('../rentals/rental');
// const RentalBuilder = require('../rentals/rental-builder');
test('should change state to deposit paid', () => {
  const rental = new Rental(11, 22, 1, 1000);

  rental.payDeposit();

  expect(rental.getState()).toBe(Rental.DEPOSIT_PAID);
});
