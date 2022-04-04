/*
&& -> false && true -> false -- Um falso já faz com que o resultado seja falso "o valor mesmo"
|| -> false || true -> true -- Um verdadeiro já faz com que o resultado seja verdadeiro
FALSY
* false
* 0
* '' "" ``
* null / undefined
* NaN
*/

console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && true && 'Maria');
console.log('Luiz Otávio' && true && NaN);
console.log('Luiz' && '' && 'Maria');
console.log('Luiz' && undefined && 'Maria');
console.log('Luiz' && null && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)

const a = 0;
const b = null;
const c = 'false'; // Verdadeiro pq é uma string
const d = false;
const e = NaN;
console.log(a || b || c || d || e);



