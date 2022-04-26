const moment = require('moment');
const BankAccount = require('../bankAccount');

describe('#BankAccount', () => {
	let bankAccount;
	let mockDate;
	beforeEach(() => {
		bankAccount = new BankAccount();
		mockDate = { date: moment().format('DD/MM/YYYY') };
	});

	test('starts with a balance of £0', () => {
		expect(bankAccount.getBalance()).toBe(0);
	});

	test('can deposit an amount of money', () => {
		bankAccount.depositAmount(1000);
		expect(bankAccount.getBalance()).toBe(1000);
	});

	test('can withdraw an amount of money', () => {
		bankAccount.depositAmount(1500);
		bankAccount.withdrawAmount(500);
		expect(bankAccount.getBalance()).toBe(1000);
	});

	test('saves a transaction when the customer deposits or withdraws an amount', () => {
		bankAccount.depositAmount(600);
		bankAccount.withdrawAmount(150);
		expect(bankAccount.transactions).toEqual([
			{ date: mockDate.date, amount: 600, type: 'credit', balance: 600 },
			{ date: mockDate.date, amount: 150, type: 'debit', balance: 450 },
		]);
	});

	test('can print the statement with the transactions', () => {
		bankAccount.depositAmount(1600);
		bankAccount.withdrawAmount(500);
		expect(bankAccount.bankStatement()).toBe(
			`date || credit || debit || balance\n${mockDate.date} || || 500 || 1100\n${mockDate.date} || 1600 || || 1600`
		);
	});

	test('throws an error when #depositAmount is less than or equal to zero', () => {
		const errorMessage =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		expect(() => bankAccount.depositAmount(0)).toThrow(errorMessage);
	});

	test('throws an error when #depositAmount is a string', () => {
		const errorMessage =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		expect(() => bankAccount.depositAmount('100')).toThrow(errorMessage);
	});
});
