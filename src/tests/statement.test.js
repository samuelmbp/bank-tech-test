const Statement = require('../statement');

describe('#Statement', () => {
	let statement;

	beforeEach(() => {
		statement = new Statement();
	});

	test('returns the header of the statement when empty', () => {
		expect(statement.printStatement([])).toEqual(
			'date|| credit	|| debit	|| balance'
		);
	});
});
