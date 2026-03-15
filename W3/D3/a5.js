const bank = {
    owner: "CHAITHRA BR",
    balance: 0,
    lastTransaction: null,
    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }
        this.balance += amount;
        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },
    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdraw amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };
    }
};
bank.deposit(2000);
bank.withdraw(100);
console.log(bank);