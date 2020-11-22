const Rental = require('../rentals/rental');
const RentalBuilder = require('../rentals/rental-builder');

test('should return rental', () => {
  const rental = new RentalBuilder()
    .rentBy(1)
    .selectCar(1)
    .depositAmount(5000)
    .inState(Rental.RESERVED)
    .build();

  expect(rental).toMatchSnapshot();
});

test('should return rental paid', () => {
  const rental = new RentalBuilder().buildPaid();

  expect(rental).toMatchInlineSnapshot(`
    Rental {
      "car_id": 1,
      "client_id": 1,
      "deposit": 6000,
      "rental_id": 1,
      "state": "DEPOSIT_PAID",
    }
  `);
});
