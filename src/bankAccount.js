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

	depositAmount(amount, date = moment().format('DD/MM/YYYY')) {
		this.errorMessage(amount);
		this.balance += amount;
		this.transactions.push({
			amount: amount,
			date: date,
			type: 'credit',
			balance: this.balance,
		});
	}

	withdrawAmount(amount, date = moment().format('DD/MM/YYYY')) {
		this.balance -= amount;
		this.transactions.push({
			amount: amount,
			date: date,
			type: 'debit',
			balance: this.balance,
		});
	}

	errorMessage(amount) {
		const message =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		if (amount <= 0 || typeof amount === 'string') throw new Error(message);
	}
}

module.exports = BankAccount;
