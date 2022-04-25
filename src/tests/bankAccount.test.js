const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	let bankAccount;

	beforeEach(() => {
		bankAccount = new BankAccount();
	});

	test('starts with a balance of £0', () => {
		expect(bankAccount.getBalance()).toBe(0);
	});

	test('can deposit an amount of money', () => {
		const amount = 1000;
		bankAccount.depositAmount(amount);
		expect(bankAccount.getBalance()).toBe(amount);
	});
});
