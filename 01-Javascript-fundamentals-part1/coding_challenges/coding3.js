/*
    TEST DATA: Dolphins score 96, 108, 89
    Koalas score 88, 91 and 110
*/

averageDolphins = (96 + 108 + 89) / 3;
averageKoalas = (88 + 91 + 110) / 3;
minimumScore = 100;

console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins > minimumScore) console.log('Dolphins is winner!');
else if (averageKoalas > averageDolphins && averageKoalas > minimumScore) console.log('Koalas is winner!');
else if (averageKoalas === averageDolphins && averageDolphins > minimumScore && averageKoalas > minimumScore) console.log("Draw!");
else console.log("No team wins the trophy.")