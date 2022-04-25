const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	const bankAccount = new BankAccount();

  test('starts with a balance of £0', () => {
    expect(bankAccount.getBalance()).toBe(0);
  });

	test('can deposit money', () => {
		const amount = 1000;
		expect(bankAccount.depositAmount(amount)).toBe(amount);
	});


});
