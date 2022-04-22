// Assignment #1

const country = "Brazil";
const continent = "South America";
let population = 214488209;

console.log(country);
console.log(continent);
console.log(population);

// Assignment #2

let isIsland = false;
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

// Assignment #6

if (population > averagePopulation){
    console.log(`${country}'s population is ${population - averagePopulation} million above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}

// Assignment #7

console.log('9' - '5'); // 4
console.log('19' - '13' + '17');    // 617
console.log('19' - '13' + 17);  // 23
console.log('123' < 57);    // false
console.log(5 + 6 + '4' + 9 - 4 - 2)    // 1143

// Assignment #8
// Always use === operator insted of ==

const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}

// Assignment #9

const newCountry = true;
const hasLess50MillionPeople = true;
const isAnIsland = true;

if (newCountry && hasLess50MillionPeople && isAnIsland){
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// Assignment #10

const newLanguage = 'chinese';

switch (newLanguage){
    case 'chinese':
    case 'mandarim':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

// Assignment #11

const ternary = population > averagePopulation ? `${country}'s population is above average` : `${country}'s population is below average`
console.log(ternary)