const moment = require('moment');
class BankAccount {
	constructor() {
		this.balance = 0;
		this.transactions = [];
	}

	getBalance() {
		return this.balance;
	}

	depositAmount(amount, date = moment().format('DD/MM/YYYY')) {
		this.errorMessage(amount);
		this.balance += amount;
		this.transactions.push({ amount: amount, date: date, transactionType: 'credit', balance: this.balance });
	}

	withdrawAmount(amount, date = moment().format('DD/MM/YYYY')) {
		this.balance -= amount;
		this.transactions.push({ amount: amount, date: date, transactionType: 'debit', balance: this.balance });
	}

	errorMessage(amount) {
		const message =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		if (amount <= 0 || typeof amount === 'string') throw new Error(message);
	}
}

module.exports = BankAccount;
