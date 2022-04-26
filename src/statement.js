class Statement {
	printStatement(transactions) {
		let headerStatement = 'date || credit || debit || balance';

		if (typeof transactions === 'undefined' || transactions.length === 0)
			return headerStatement;

		transactions.reverse().forEach((transaction) => {
			if (transaction.type === 'credit')
				headerStatement += `\n${transaction.date} || ${transaction.amount} || || ${transaction.balance}`;
			else
				headerStatement += `\n${transaction.date} || || ${transaction.amount} || ${transaction.balance}`;
		});

		return headerStatement;
	}
}

module.exports = Statement;
