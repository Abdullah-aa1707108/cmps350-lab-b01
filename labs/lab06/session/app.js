import { BankAccount } from "./bank-account.js";
import { SavingAccount } from "./saving-account.js";
import { CurrentAccount } from "./current-account.js";
import { Bank } from "./bank.js";

// let ba = new BankAccount(0, 123);
// console.log(ba);
// console.log(ba.toString());
// console.log(ba.balance);
// console.log(ba.accountNo);

// console.log(ba.balance);
// ba.balance = ba.balance + 1;
// console.log(ba.balance);

// ba.deposit(-100);
// console.log(ba.balance);
// ba.deposit(1000);
// console.log(ba.balance);
// ba.withdraw(-100);
// console.log(ba.balance);
// ba.withdraw(10000);
// console.log(ba.balance);
// ba.withdraw(500);
// console.log(ba.balance);

let accountInfos = [
    [123, 1000],
    [234, 4000],
    [345, 3500],
];

// let accounts = [];
// for (const accountInfo of accountInfos) {
//     accounts.push(new BankAccount(accountInfo[1], accountInfo[0]));
// }

// let accounts = accountInfos.map(info => new BankAccount(info[1], info[0]));
// console.log(accounts);

// let sa = new SavingAccount(100, "78987", 0);
// console.log(sa.toString());
//
// let accounts = accountInfos.map(info => new SavingAccount(info[1], info[0], 500));
// // console.log(accounts);
// accounts.forEach(acc => console.log(acc.toString()));

let accounts = accountInfos.map(info => new CurrentAccount(info[1], info[0], 10));
// console.log(accounts);
accounts.forEach(acc => console.log(acc.toString()));
accounts[0].deductFee();
accounts.forEach(acc => console.log(acc.toString()));

console.log(JSON.stringify({ a: 1, b: 3}));
const obj = JSON.parse('{\n' +
    '  "name": "lab-06",\n' +
    '  "version": "1.0.0",\n' +
    '  "description": "",\n' +
    '  "main": "app.js",\n' +
    '  "type": "module",\n' +
    '  "scripts": {\n' +
    '    "start": "node app.js",\n' +
    '    "test": "echo \\"Error: no test specified\\" && exit 1"\n' +
    '  },\n' +
    '  "author": "",\n' +
    '  "license": "ISC"\n' +
    '}\n'
);

// console.log(obj.name);
//
// let ba = new BankAccount();
// console.log(JSON.stringify(ba));
//
// let s = JSON.stringify(ba);
// let w = JSON.parse(s);
// console.log(w);

// let sa = new SavingAccount();
// let s = JSON.stringify(sa);
// let w = JSON.parse(s);
// console.log(w);

// let ca = new CurrentAccount();
// let s = JSON.stringify(ca);
// let w = JSON.parse(s);
// console.log(w);

let b = new Bank([
    new SavingAccount(500, 123, 1000),
    new CurrentAccount(4000,234, 10),
    new CurrentAccount(35000,345, 15),
    new SavingAccount(60000,456, 1000),
]);

// console.log(b.accounts[0] instanceof SavingAccount);

// let bankAccount = new BankAccount();
// console.log("BankAccount JSON: ", JSON.stringify(bankAccount));

// let sb = b.serialize();
// let newBank = new Bank();
// newBank.deserialize(sb);
// console.log("New Bank:", newBank.toJSON());
//
// console.log(newBank.accounts[0] instanceof SavingAccount);
// newBank.accounts[0].distributeBenefit();

// console.log(newBank.toString());

console.log("Sum:", b.totalBalance());
b.accounts.forEach(acc => {
    if (acc.type === "Current") {
        acc.monthlyFee += 5;
        acc.deductFee();
    }

    if (acc.type === "Saving") {
        acc.distributeBenefit(0.05);
    }
});
console.log("Sum:", b.totalBalance());

import { UnitConverter } from "./unit-converter.js";

let uc = new UnitConverter();
