let matrix = [
    [2, 3],
    [34, 89],
    [55, 101, 34],
    [34, 89, 34, 99],
];

console.table(matrix);
console.log(matrix[2][1])

// [ 2, 3, 34, 89, 55, 101, ... ]
let flatMatrix = matrix.flat();
console.log(matrix);
console.log(flatMatrix);

// let extraMatrix = [ ...matrix[0], ...matrix[1], ...matrix[2], ...matrix[3] ];
let extraMatrix = [];
for (let row of matrix) {
    // extraMatrix.push(...row);
    extraMatrix = [ ...extraMatrix, ...row ];
}

let numbers = [ 1, 2, 10, 7, 19, -1 ];
// let sum = 0;
// for (let element of numbers) {
//     sum = sum + element;
// }
//
// let product = 1;
// for (let element of numbers) {
//     product = product * element;
// }
//
// let minimum = -Infinity;
// for (let element of numbers) {
//     minimum = minimum > element ? element : minimum;
// }
//
// let maximum = +Infinity;
// for (let element of numbers) {
//     maximum = maximum < element ? element : maximum;
// }

let sum = numbers.reduce((a, b) => a + b, 0);
let product = numbers.reduce((a, b) => a * b, 1);
let concatenate = numbers.reduce((a, b) => [ ...a, b ], []);
let reverse = numbers.reduce((a, b) => [ b, ...a ], []);
let flat = matrix.reduce((a, b) => [ ...a, ...b ], []);
let max = flat.reduce((a, b) => a > b ? a : b, -Infinity);
let flatSquared = flat.map((a) => a * a);
let average = flat.reduce((a, b) => a + b, 0) / flat.length;

let greaterThan40 = flat.filter((a) => a > 40);
let sumGreaterThan40 = greaterThan40.reduce((a, b) => a + b, 0);

let sum40Chain = flat
    .filter((a) => a > 40)
    .map((a) => console.log(a))
    .reduce((a, b) => a + b, 0);

let unique = [];
for (let element of flat) {
    if (unique.indexOf(element) === -1) {
        unique.push(element);
    }
    // else {
    //     unique = unique;
    // }
}
console.log(unique);

let uniqueReduce = flat.reduce((a, b) => a.indexOf(b) === -1 ? [ ...a, b ] : a, []);
console.log(uniqueReduce);

console.log("Reduction:");
console.log(sum);
console.log(product);
console.log(reverse);

console.log(flat);
console.log(max);
console.log(flatSquared);
console.log(average);

for (let i = 0; i < numbers.length; i += 1) {
    let [ , index ] = numbers.slice(i).reduce((a, b, i) => a[0] > b ? [ b, i ] : a, [ +Infinity, -1 ]);
    // console.log("Index: ", index);
    [ numbers[i], numbers[index + i] ] = [ numbers[index + i], numbers[i] ];
}

console.log("Sort:");
console.log(numbers);

// let accumulator = // initial value
// let operation = (a, b) => // something involving a and b

// [ accumulator, operation ] = [ 0, (a, b) => a + b ];
// [ accumulator, operation ] = [ 1, (a, b) => a * b ];
// [ accumulator, operation ] = [ [], (a, b) => [ ...a, ...b ] ];
// [ accumulator, operation ] = [ -Inifinty, (a, b) => a > b ? b : a ];
// [ accumulator, operation ] = [ +Inifinty, (a, b) => a < b ? b : a ];

console.log(extraMatrix);
