// IEEE 754-2008

let num1 = 10;
let num2 = 2.5;
let num3 = 10.5789551255547;

console.log(num1.toString() + num2);
console.log(typeof num1);

console.log(num3.toFixed(2));
console.log(Number.isInteger(num1));

console.log(num1.toString(2));
num1 = num1.toString();
console.log(typeof num1);

let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

let n1 = 0.7;
let n2 = 0.1;

n1 = ((n1 * 100) + (n2 * 100)) / 100;
n1 = ((n1 * 100) + (n2 * 100)) / 100;
n1 = ((n1 * 100) + (n2 * 100)) / 100;

n1 = Number(n1.toFixed(2));

console.log(n1);
console.log(Number.isInteger(n1));


