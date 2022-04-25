const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	let bankAccount;
	let mockDate;

	beforeEach(() => {
		bankAccount = new BankAccount();
		mockDate = { date: '25/04/2022' };
	});

	test('starts with a balance of £0', () => {
		expect(bankAccount.getBalance()).toBe(0);
	});

	test('can deposit an amount of money', () => {
		const amount = 1000;
		bankAccount.depositAmount(amount);
		expect(bankAccount.getBalance()).toBe(amount);
	});

	test('can withdraw an amount of money', () => {
		bankAccount.depositAmount(1500);
		bankAccount.withdrawAmount(500);
		expect(bankAccount.getBalance()).toBe(1000);
	});

	test('saves a transaction with the amount and date when #depositAmount', () => {
		bankAccount.depositAmount(600);
		expect(bankAccount.transactions).toEqual([
			{
				amount: 600,
				date: mockDate.date,
			},
		]);
	});

	test('saves a transaction with the amount and date when #withdrawAmount', () => {
		bankAccount.withdrawAmount(200);
		expect(bankAccount.transactions).toEqual([
			{
				amount: 200,
				date: mockDate.date,
			},
		]);
	});

	test('throws an error when #depositAmount is less than or equal to £0', () => {
		const errorMessage =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		expect(() => bankAccount.depositAmount(0)).toThrow(errorMessage);
	});
});
