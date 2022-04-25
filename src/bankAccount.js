class BankAccount {
	constructor() {
		this.balance = 0;
	}

	getBalance() {
		return this.balance;
	}

	depositAmount(amount) {
		this.balance += amount;
	}

  withdrawAmount(amount) {
    this.balance -= amount;
  }
}

module.exports = BankAccount;
