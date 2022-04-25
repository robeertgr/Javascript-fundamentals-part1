// Assignment #1

function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry('Finland', 6000000, 'Helsinki');
describeCountry('Brazil', 230000000, 'Brazilia');
describeCountry('Ireland', 5000000, 'Dublin');

// Assignment #2

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(230);
const population3 = percentageOfWorld1(5);
console.log(population1, population2, population3)

const percentageOfWorld2 =  function (population) {
    return (population / 7900) * 100;
}

const population4 = percentageOfWorld2(1441);
const population5 = percentageOfWorld2(230);
const population6 = percentageOfWorld2(5);
console.log(population4, population5, population6);