const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	const bankAccount = new BankAccount();

	test('can deposit money', () => {
		const amount = 500;
		expect(bankAccount.depositAmount()).toBe(amount);
	});
});
