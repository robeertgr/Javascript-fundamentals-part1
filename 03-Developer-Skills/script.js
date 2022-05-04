// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const soma = function(numero1, numero2) {
    return numero1 + numero2;
}

const subtracao = function(numero1, numero2) {
    return numero1 - numero2
}

const number1 = Number(prompt('Digite um número'));
const number2 = Number(prompt('Digite outro numero'));
const opcao = Number(prompt(`Digite uma operação:
1- Soma
2- Subtração`))

switch(opcao){
    case 1:
        console.log(soma(number1, number2));
        break;
    case 2:
        console.log(subtracao(number1, number2));
        break;
    default:
        console.log('Opcao inválida');
}
*/

// PROBLEM 1:
/* We work for a company building a smart home
    thermometer. Our most recent task is this: 'Given an
    array of temperatures of one day, calculate the
    temperatura amplitude. Keep in mind that sometimes 
    there might be a sensor error.' */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
    1) Understanding the problem
        - What is temp amplitude? Answer: difference
        between highest and lowest temp
        - How to compute max and min tempetarues?
        - What's a sensor error? And what to do?

    2) Breaking up into sub-problems
        - How to ignore errors?
        - Find max value in temp array
        - Find min value in temp array
        - Subtract min from max (amplitude) and return it


const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperature

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
  console.log(amplitudeNew);
 */ 

  const measureKelvin = function() {
      const measurement = {
          type: 'temp',
          unit: 'celsius',

          // C) FIX
        //   value: Number(prompt('Degrees celsius: ')),
        value: 10,
      };

    // B) FIND
    //   console.log(measurement);
      console.table(measurement);

    //   console.log(measurement.value);
    //   console.warn(measurement.value);
    //   console.error(measurement.value);


      const kelvin = measurement.value + 273
      return kelvin;
  }
  // A) IDENTIFY
  console.log(measureKelvin());
  

  // - Merge 2 arrays?

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
    
    //   debugger;
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
  // A) IDENTIFY
  console.log(amplitudeBug);