const Statement = require('../statement');

describe('#Statement', () => {
	let statement;

	beforeEach(() => {
		statement = new Statement();
	});

	// test('returns the header of the statement when empty', () => {
	// 	expect(statement.printStatement()).toEqual(
	// 		'date || credit || debit || balance'
	// 	);
	// });

	test('returns a bank statements with all the transactions', () => {
		const transactions = [
			{ date: '20/04/2022', amount: 1600, type: 'credit', balance: 1600 },
			{ date: '23/04/2022', amount: 500, type: 'debit', balance: 1100 },
		];
		expect(statement.printStatement(transactions)).toEqual(
			'date || credit || debit || balance\n23/04/2022 || || 500 || 1100\n20/04/2022 || 1600 || || 1600'
		);
	});
});
