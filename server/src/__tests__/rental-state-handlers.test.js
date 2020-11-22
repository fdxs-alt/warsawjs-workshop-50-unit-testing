const { rentalStateHandler } = require('../rentals/rentals-handlers');
const RentalWrapperMock = require('../rentals/rental-mapper');
const RentalBuilder = require('../rentals/rental-builder');
jest.mock('../rentals/rental-mapper');

afterEach(() => {
  RentalWrapperMock.findById.mockClear();
  RentalWrapperMock.update.mockClear();
});

test('should pay deposit with success', async () => {
  const req = { params: { rental_id: 1, command: 'pay-deposit' } };
  const res = { send: jest.fn() };
  const payDeposit = jest.fn();

  RentalWrapperMock.findById.mockReturnValueOnce({ payDeposit });

  await rentalStateHandler(req, res);

  expect(RentalWrapperMock.findById).toBeCalledTimes(1);

  expect(RentalWrapperMock.update).toBeCalledTimes(1);

  expect(res.send).toBeCalledTimes(1);

  expect(res.send).toBeCalledWith(200);
});

test('should pay deposit with success', async () => {
  const req = { params: { rental_id: 1, command: 'return-deposit' } };
  const res = { send: jest.fn() };
  const rental = new RentalBuilder().buildPaid();
  const returnDepositSpy = jest.spyOn(rental, 'returnDeposit');

  RentalWrapperMock.findById.mockReturnValueOnce(rental);

  await rentalStateHandler(req, res);

  expect(RentalWrapperMock.findById).toBeCalledTimes(1);

  expect(RentalWrapperMock.update).toBeCalledTimes(1);

  expect(RentalWrapperMock.update).toBeCalledWith(rental);

  expect(res.send).toBeCalledTimes(1);

  expect(res.send).toBeCalledWith(200);

  expect(returnDepositSpy).toBeCalledTimes(1);
});
