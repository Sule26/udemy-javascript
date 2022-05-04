// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar constantes com let
// Não podemos modificar o valor de uma constante
// Não utilize VAR, utilize CONST

const nome = 'João';
console.log(nome);

const primeiroNumero = '5'; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado)

console.log(typeof primeiroNumero)
console.log(typeof(primeiroNumero + segundoNumero)) // transforma o segundo em string tbm
console.log(typeof(nome))
