/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Robert');
console.log(23);

let firstName = "Letícia";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let robert_granja = "RG";
let $function = 27;

let person = "Robert";
let PI = 3.14159;

let myFirstJob = "Coder";
let myCurrentJob = "Developer";

let job1 = "coder";
let job2 = "developer";

console.log(myFirstJob);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Robert');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 28;
age = 29;

const birthYear = 1994;
// birthYear = 1995;
// const job;

var job = 'programmer';
job = 'coder';

lastName = 'Granja';
console.log(lastName);
*/
/*
// Math operators
const now = 2037;
const ageRobert = now - 1994;
const ageLeticia = now - 2018;
console.log(ageRobert, ageLeticia);

console.log(ageRobert * 2, ageRobert / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Robert';
const lastName = 'Granja';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageRobert > ageLeticia); // >, <, >=,
console.log(ageLeticia >= 18);

const isFullAge = ageLeticia >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageRobert = now - 1991;
const ageLeticia = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageRobert + ageLeticia) / 2;
console.log(ageRobert, ageLeticia, averageAge);
*/
/*
const firstName = 'Robert';
const job = 'developer';
const birthYear = 1994;
const year = 2037;

const robert = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";
console.log(robert);

const robertNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(robertNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
    console.log('You can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`You can not start driving license 🚗. Wait another ${yearsLeft} years`);
}

const birthYear = 1994;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);