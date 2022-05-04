/*
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);
console.log(!false);
console.log(!!true);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
