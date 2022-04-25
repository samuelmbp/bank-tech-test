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
		const errorMessage =
			'It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.';

		if (amount <= 0) throw new Error(errorMessage);
		else if (typeof amount === 'string') throw new Error(errorMessage);
		else {
			this.balance += amount;
			this.transactions.push({ amount: amount, date: date });
		}
	}

	withdrawAmount(amount, date = moment().format('DD/MM/YYYY')) {
		this.balance -= amount;
		this.transactions.push({ amount: amount, date: date });
	}
}

module.exports = BankAccount;
