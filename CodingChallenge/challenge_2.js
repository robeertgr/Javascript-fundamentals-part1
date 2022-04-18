/*
    Coding challenge #2

    Use the BMI example from challenge #1, and the code
    you already wrote, and improve it:

    1. Print a nice output to the console, saying who has
    the higher BMI. The message can be either "Mark's BMI
    is higher than John's!" or "John's BMI is higher that
    Mark's!"
    2. Use a template string to include the BMI values is
    the outputs. Example: "Mark's BMI (28.3) is higher
    than John's (23.9)!"

    HINT: Use an if/else statement

    GOOD LUCK!
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
       
    let firstHeigherBMI;
    let secondHeigherBMI;

    if (firstMarksBMI > firstJohnsBMI){
        let firstHeigherBMI = firstMarksBMI;
        console.log(`First Mark's BMI ${firstMarksBMI} is higher than John's ${firstJohnsBMI}`);
    } else {
        let firstHeigherBMI = firstJohnsBMI;
        console.log(`First John's BMI ${firstJohnsBMI} is higher than Mark's ${firstMarksBMI}`);
    }

    if (secondMarksBMI > secondJohnsBMI) {
        let secondHeigherBMI = secondMarksBMI;
        console.log(`Second Mark's BMI ${secondMarksBMI} is higher than John's ${secondJohnsBMI}`);
    } else {
        let secondHeigherBMI = secondJohnsBMI;
        console.log(`Second John's BMI ${secondJohnsBMI} is higher than Mark's ${secondMarksBMI}`);
    }
        
        
        