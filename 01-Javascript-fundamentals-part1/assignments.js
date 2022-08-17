// Values and Variables

const country = 'Ireland';
const continent = 'South America';
let population = '45000000';
console.log(country, continent, population);

// Data types

let isIsland = false;
const language = 'Portuguese';
console.log(isIsland, population, country, language);

// Let, const and var

// Basic Operators

let finlandPopulation = 6000000;
let averagePopulation = 33000000;
console.log(population / 2);
console.log(population++);
console.log(population > finlandPopulation);
console.log(population > averagePopulation);
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// String and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// Taking decisions: if/else statements

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`);
}

// LECTURE: Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log (5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

// const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbors === 1) console.log('Only 1 border!');
// else if (numNeighbors > 1) console.log('More than 1 border!');
// else (console.log('No borders'))

// LECTURE: Logical Operators

if (country === 'Ireland' && population < 50000000 && !isIsland) console.log(`You should live in ${country}`);
else console.log(`${country} does not meet your criteria`);