import { BankAccount } from "./bank-account.js";

class SavingAccount extends BankAccount {
    #minBalance;
    type = "Saving";

    constructor(balance = 0, accountNo = 0, minBalance = 0) {
        super(balance, accountNo);
        this.#minBalance = minBalance;

        // make sure that balance >= minBalance
    }

    get minBalance() {
        return this.#minBalance;
    }

    distributeBenefit(benefitPercentage = 0.01) {
        // this.balance = this.balance + this.balance * benefitPercentage;
        // this.balance *= 1 + benefitPercentage;
        this.balance += this.balance * benefitPercentage;
    }

    withdraw(amount) {
        if (amount >= 0) {
            if (amount <= this.balance && this.balance - amount >= minBalance) {
                this.balance -= amount;
            } else {
                console.error("Insufficient funds.");
            }
        } else {
            console.error("Amount should be non-negative.");
        }
    }

    toString() {
        return `Saving ${super.toString()} with a minimum balance of ${this.minBalance}`;
        // return `Saving Account #${this.#accountNo} has QR${this.#balance}  with a minimum balance of ${this.minBalance}`;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            minBalance: this.minBalance,
            type: this.type,
        };
    }
}

export { SavingAccount };