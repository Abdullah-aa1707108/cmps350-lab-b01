class BankAccount {
    #accountNo = String(Math.trunc(Math.random() * 10000)).padStart(5, "0");
    #balance;

    constructor(balance = 0, accountNo = 0) {
        this.#balance = balance;
        this.#accountNo = accountNo;
    }

    get accountNo() {
        return this.#accountNo;
    }

    set accountNo(accountNo) {
        this.#accountNo = accountNo;
    }

    get balance() {
        return this.#balance;
    }

    set balance(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount >= 0) {
            this.balance += amount;
        } else {
            console.error("Amount should be non-negative.");
        }
    }

    withdraw(amount) {
        if (amount >= 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
            } else {
                console.error("Insufficient funds.");
            }
        } else {
            console.error("Amount should be non-negative.");
        }
    }

    toString() {
        return `Account #${this.accountNo} has QR${this.balance}`;
    }

    toJSON() {
        return {
            accountNo: this.accountNo,
            balance: this.balance,
        };
    }
}

export { BankAccount };
