class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    if (depositAmount > 0) {
      this.transactions.push({type: "deposit", amount: depositAmount});
      this.balance += depositAmount;
      return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`;
    } else if (depositAmount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > 0 && withdrawAmount <= this.balance) {
      this.transactions.push({type: "withdraw", amount: withdrawAmount});
      this.balance -= withdrawAmount;
      return `Successfully withdrew $${withdrawAmount}. New balance: $${this.balance}`;
    } else if (withdrawAmount <= 0 || withdrawAmount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions.filter(transaction => transaction.type === "deposit");
    let returnStr = `Deposits: `;
    deposits.forEach(deposit => {
      returnStr += `${deposit.amount},`;
    });
    return returnStr.slice(0, returnStr.length - 1);
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions.filter(transaction => transaction.type === "withdraw");
    let returnStr = `Withdrawals: `;
    withdrawals.forEach(withdraw => {
      returnStr += `${withdraw.amount},`;
    });
    return returnStr.slice(0, returnStr.length - 1);
  }
}

const myAccount = new BankAccount();

console.log(myAccount.deposit(1000));
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(500));
console.log(myAccount.withdraw(500));
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());