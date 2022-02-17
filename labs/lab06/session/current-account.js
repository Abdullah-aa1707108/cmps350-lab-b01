import { BankAccount } from "./bank-account.js";

class CurrentAccount extends BankAccount {
    #monthlyFee;
    type = "Current";

    constructor(balance = 0, accountNo = 0, monthlyFee = 0) {
        super(balance, accountNo);
        this.#monthlyFee = monthlyFee;
    }

    get monthlyFee() {
        return this.#monthlyFee;
    }

    set monthlyFee(amount) {
        this.#monthlyFee += amount;
    }

    deductFee() {
        this.balance -= this.monthlyFee;
    }

    toString() {
        return `Current ${super.toString()} with a monthly fee of ${this.monthlyFee}`;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            monthlyFee: this.monthlyFee,
            type: this.type,
        };
    }
}

export { CurrentAccount };