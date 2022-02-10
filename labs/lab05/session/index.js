let i = 0;
const j = 10;
while (i < 10) {
    console.log(i++ * j);
}

let s = '';
let a = [];
for (let i = 0; i < 10; i += 1) {
    console.log(i * j);
    s += " " + i * j;
    a[i] = i * j;
}
console.log(s);
console.table(a);

for (let k in a) {
    console.log(k);
}

for (let v of a) {
    console.log(v);
}

// let max = function (a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let min = function (a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

let min = (a, b) => a < b ? a : b;
let max = (a, b) => a > b ? a : b;

let fun = min;

console.log(fun(10, 11));
