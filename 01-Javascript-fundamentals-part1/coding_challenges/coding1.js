/*
    BMI = mass / height ** 2

    TEST DATA 1: Mark's weights 78 kg and is 1.69 m tall.
    John weights 92 kg and is 1.95 m tall
    TEST DATA 2: Mark's weights 95 kg and is 1.88 m tall.
    John weights 85 kg and is 1.76 m tall.
*/

let massMark = 95;
let heightMark = 188;
let massJohn = 85;
let heightJohn = 176;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

massMark = 78;
heightMark = 169;
massJohn = 92;
heightJohn = 195;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);