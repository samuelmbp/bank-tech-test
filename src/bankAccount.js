const moment = require('moment')
class BankAccount {
	constructor() {
		this.balance = 0;
		this.transactions = [];
	}

	getBalance() {
		return this.balance;
	}

	depositAmount(amount, date=moment().format('DD/MM/YYYY')) {
		this.balance += amount;
		this.transactions.push({ amount: amount, date: date })
	}

	withdrawAmount(amount, date=moment().format('DD/MM/YYYY')) {
		this.balance -= amount;
		this.transactions.push({ amount: amount, date: date });
	}
}

module.exports = BankAccount;
