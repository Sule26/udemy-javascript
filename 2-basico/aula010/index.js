/*
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplição
 * ** Potenciação
 * % Resto da divisão
 * Incremento = ++
 * Decremento = --
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3);

let contador = 1;
contador++; // 2
++contador; // 3
contador++; // 4
++contador; // 5
console.log(contador);

console.log(contador++); // mostra e depois soma
console.log(++contador); // soma e depois mostra

const passo = 50;
let c = 0;
c += passo; // contador = contador + 50;
c += passo;
c += passo;
c *= passo;
console.log(c);

// NaN = Not a Number

const n1 = 10;
const n2 = Number('5.2'); // parseint(inteiro), parseFloat(decimais)
console.log(n1 * n2);
console.log(n1 + n2);
