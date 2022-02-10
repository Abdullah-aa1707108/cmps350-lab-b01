import promptSync from 'prompt-sync';
const prompt = promptSync();

let students = [ {}, {}, {}, {} ,{} ];

for (let i = 0; i < 5; i += 1) {
    // students[i] = { };
    // students[i].name = prompt("Student name: ");
    // students[i].gender = prompt("Student gender: ");
    students[i].age = Math.random() * (35 - 17 + 1) + 17;
    students[i].grade = Math.random() * (100 - 0 + 1) + 0;
}

console.table(students);

let highestGradeStudent = students.reduce((a, b) => a.grade < b.grade ? b : a);
let youngestStudent = students.reduce((a, b) => a.age > b.age ? b : a);
let oldestStudent = students.reduce((a, b) => a.age < b.age ? b : a);

let ages = students
    .sort((a, b) => a.age - b.age)
    .map((a) => a.age);

let n = students.length;
let mean = students.reduce((a, b) => a + b / n);
let variance = students.reduce((a, b) => a + Math.pow(b - mean, 2) / (n - 1));

console.log(ages);
