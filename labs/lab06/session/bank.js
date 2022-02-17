import { SavingAccount } from "./saving-account.js";
import { CurrentAccount } from "./current-account.js";

class Bank {
    #accounts = [];

    constructor(accounts) {
        this.#accounts = accounts;
    }

    get accounts() {
        return this.#accounts;
    }

    add(account) {
        this.#accounts.push(account);
    }

    getAccount(accountNo) {
        return this.#accounts.find(acc => acc.accountNo === accountNo);
    }

    deleteAccount(accountNo) {
        this.#accounts = this.#accounts.filter(acc => acc.accountNo !== accountNo);

        // use indexOf followed by splice
    }

    totalBalance() {
        return this.#accounts.reduce((sum, acc) => sum + acc.balance, 0);
    }

    averageBalance() {
        return this.totalBalance() / this.#accounts.length;

        // return this.#accounts.reduce((sum, acc) => sum + acc.balance / this.#accounts.length);

        // return this.#accounts.reduce((info, acc) => [(info[0] * info[1] + acc.balance) / (info[1] + 1), info[1] + 1], [0, 0]);
    }

    toJSON() {
        return {
            accounts: this.#accounts
        };
    }

    serialize() {
        return JSON.stringify(this.#accounts);
    }

    fromJSON(bank) {
        this.#accounts = bank.accounts;
    }

    deserialize(representation) {
        let data = JSON.parse(representation);
        this.#accounts = data.map(info => {
            // if (info["minBalance"]) {
            if (info.type === "Saving") {
                return new SavingAccount(info.balance, info.accountNo, info.minBalance);
            }

            // if (info["monthlyFee"]) {
            if (info.type === "Current") {
                return new CurrentAccount(info.balance, info.accountNo, info.monthlyFee);
            }
        });
    }

    toString() {
        return this.#accounts.map(acc => `<tr><td>${acc.accountNo}</td><td>${acc.balance}</td></tr>`)
            .join("");
    }
}

export { Bank };
