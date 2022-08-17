// Values and Variables

const country = 'Brazil';
const continent = 'South America';
let population = '212000000';
console.log(country, continent, population);

// Data types

let isIsland = true;
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
