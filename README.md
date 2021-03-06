# Bank Tech Test

> This application allows the customers to withdraw and deposit an amount of money in their bank account. 
> In the same time it allows them to have at anytime a full history of all their transactions by printing an informative bank statement.

- - - -
## Set-up
### Clone this repo to your local machine
```javascript
git clone https://github.com/samuelmbp/bank-tech-test.git
```
### Install the dependencies by typing
```zsh
cd bank-tech-test
npm install
```

## Run the program
### The application runs in the command line/terminal via a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
```node
cd src/
node 
```

```javascript
> .load ./bankAccount.js

[Function: BankAccount]
> const bankAccount = new BankAccount()
> bankAccount.depositAmount(600)
> bankAccount.depositAmount(400)
> bankAccount.withdrawAmount(250)

> bankAccount.depositAmount(0) // // Error when the amount is 0.
Error: It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.

> bankAccount.depositAmount('100') // Error when the amount is a string.
Error: It looks like you are trying to deposit an invalid amount. Please try again with a valid amount.
  
> bankAccount.bankStatement()
date || credit || debit || balance
27/04/2022 || || 250 || 750
27/04/2022 || 400 || || 1000
27/04/2022 || 600 || || 600
```
- - - - 

## Test the program
```javascript
cd src/
jest --coverage

PASS  tests/statement.test.js
PASS  tests/bankAccount.test.js
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 bankAccount.js |     100 |      100 |     100 |     100 |                   
 statement.js   |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        1.5 s, estimated 2 s
Ran all test suites.
```
- - - -

## Overall Approach
The program is made up of two classes

1. BankAccount Class
   - Handles the logic for deposits and the withdrawals
2. Statement Class
   - Handles the logic for printing out a full history of all the transactions

### Approach when writing the code:
- TDD every single class and it's methods
- Used single responsibility principle
- Used encapsulation for all the related code
- Used abstraction by making some of the methods private in order to expose only the necessary code the users.
- Thought about edge cases e.g :  
  - user deposits an amount that is o or less
  - user enters a string instead of an integer
- Installed the relevant packages
- Cleaned up the code for readability and review
- Completed Self-assessment form


## Technologies used
- Javascript
- NodeJs
- Jest (Includes files coverage)
- Git
- Moment