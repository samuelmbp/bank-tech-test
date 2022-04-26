const moment = require('moment');
const Statement = require('./statement');

class BankAccount {
	constructor(statement = new Statement()) {
		this.balance = 0;
		this.transactions = [];
		this.statement = statement;
	}

	getBalance() {
		return this.balance;
	}

	depositAmount(amount) {
		this._errorMessage(amount);
		this.balance += amount;
		this.transactions.push({
			amount: amount,
			date: this._getCurrentDate(),
			type: 'credit',
			balance: this.balance,
		});
	}

	withdrawAmount(amount) {
		this.balance -= amount;
		this.transactions.push({
			amount: amount,
			date: this._getCurrentDate(),
			type: 'debit',
			balance: this.balance,
		});
	}

	bankStatement() {
		return this.statement.printStatement(this.transactions);
	}

	_errorMessage(amount) {
		const message =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';
		if (amount <= 0 || typeof amount === 'string') throw new Error(message);
	}

	_getCurrentDate() {
		return moment().format('DD/MM/YYYY');
	}
}

module.exports = BankAccount;
