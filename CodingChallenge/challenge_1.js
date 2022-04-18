/*
    Coding challenge #1

    Mark and John are trying to compare their BMI (Body
        Mass Index), which is calculated using the formula:
        BMI = mass / height ** 2 = mass / (height * height).
        (mass in kg and height in meter).

        1. Store Mark's and John's mass and height
        in variables.
        2. Calculate both their BMIs using the formula (you
            can even implement both versions)
        3. Create a boolean variable 'markHigherBMI'
        containing information about whether Mark has a
        higher BMI than John.

        TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
        John weights 92 kg and is 1.95 m tall.
        TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
        John weights 85 kg and is 1.76 m tall.

        GOOD LUCK
    */

const firstMarksWeight = 78;
const firstMarksHeight = 1.69;
const secondMarksWeight = 95;
const secondMarksHeight = 1.88;
const firstJohnsWeight = 92;
const firstJohnsHeight = 1.95;
const secondJohnsWeight = 85;
const secondJohnsHeight = 1.76;

const firstMarksBMI = firstMarksWeight / firstMarksHeight ** 2;
const secondMarksBMI = secondMarksWeight / secondMarksHeight ** 2;
const firstJohnsBMI = firstJohnsWeight / firstJohnsHeight ** 2;
const secondJohnsBMI = secondJohnsWeight / secondJohnsHeight ** 2;

console.log("First Mark's BMI " + firstMarksBMI);
console.log("Second Mark's BMI " + secondMarksBMI);
console.log("First John's BMI " + firstJohnsBMI);
console.log("Second John's BMI " + secondJohnsBMI)

const firstMarksHeigherBMI = firstMarksBMI > firstJohnsBMI;
const secondMarksHeigherBMI = secondMarksBMI > secondJohnsBMI;

console.log(firstMarksHeigherBMI);
console.log(secondMarksHeigherBMI);
