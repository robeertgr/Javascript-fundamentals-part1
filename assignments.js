// Assignment #1

const country = "Brazil";
const continent = "South America";
let population = 214488209;

console.log(country);
console.log(continent);
console.log(population);

// Assignment #2

let isIsland = country;
isIsland = true;
const language = "Portuguese";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment #3

// These variables will not change their content because they are "const" and not "let"
//country = "Ireland";
//language = "English";

// Assignment #4

let description = country + " is in " + continent + " and it's " + population + " milion people speak " + language;
const finlandPopulation = 6000000;
const averagePopulation = 33000000;
let countrySplitHalf = population / 2;
console.log(countrySplitHalf)
countrySplitHalf++;
console.log(countrySplitHalf)
console.log(population > finlandPopulation);
console.log(population < averagePopulation);
console.log(description);

// Assignment #5

description = `${country} is in ${continent} and it's ${population} milion people speak ${language}`;
console.log(description);