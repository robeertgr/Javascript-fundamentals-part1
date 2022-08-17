/*
    BMI = mass / height ** 2

    TEST DATA 1: Mark's weights 78 kg and is 1.69 m tall.
    John weights 92 kg and is 1.95 m tall
    TEST DATA 2: Mark's weights 95 kg and is 1.88 m tall.
    John weights 85 kg and is 1.76 m tall.
*/

const markWeight = 78;
const markHeight = 169;
const johnWeight = 92;
const johnHeight = 195;
const BMIMark = markWeight / markHeight ** 2;
const BMIJohn = johnWeight / johnHeight ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn} is higher than Mark's (${BMIMark})`);
}