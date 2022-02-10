/*
let i = 1;
let a = [];
while (i <= 100) {
    // if (i % 2 === 1) {
    //     console.log(i);
    // }
    // i += 1;

    console.log(i);
    a.push(i);
    i += 2;
}
console.table(a);

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
*/

let cars = [ "Saab", "Volvo", "BMW" ];

let extraCars = [ ...cars, "Ferrari" ];
let extraCars2 = [ "Mercedes", ...cars, "Ferrari" ];

let superExtraCars = [ ...cars, ...extraCars ];

let pair = [ 10, 11 ];
let max = (a, b) => a > b ? a : b;

console.log(max(...pair));

console.log(extraCars);

cars.push("Toyota");
cars.unshift("Mercedes");

console.log(cars);

let a = 10;
let b = 11;
let c = a;
a = b;
b = c;

[ a, b ] = [ b, a ];

let [ mer, , vol, bmw, ] = cars;
console.log(mer, vol, bmw);

cars.sort();
console.log(cars);

let numbers = [ 1, 2, 10, 7, 19, -1 ];
// let numbers = [ "1", "2", "10", "7", "19", "-1" ];
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.forEach((a) => console.log(a));

for (let a of numbers) {
    console.log(a);
}
