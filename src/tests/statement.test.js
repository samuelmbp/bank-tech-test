const Statement = require('../statement');

describe('#Statement', () => {
	let statement;
	beforeEach(() => {
		statement = new Statement();
	});

	test('can show a header with date, credit, debit and balance', () => {
		expect(statement.printTransactions()).toBe(
			'date  || credit || debit  || balance'
		);
	});
});
