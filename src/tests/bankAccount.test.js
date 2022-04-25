const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	const bankAccount = new BankAccount();

	test('can deposit money', () => {
		const amount = 1000;
		expect(bankAccount.depositAmount(amount)).toBe(amount);
	});
});
