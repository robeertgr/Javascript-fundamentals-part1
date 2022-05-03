// Remember, we're gonna use strict mode in all scripts now!
'use strict';

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