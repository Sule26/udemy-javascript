/*
Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null , (Bigint, Symbol) - valor

Referência (mutável) - array, object, function - Passados por referência
*/

let nome = 'Luiz';
nome[0] = 'R'; // Imutável
console.log(nome[0]);

let a = 'A';
let b = a; // Cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

let A = [1, 2, 3];
let B = A; // Aponta pro mesmo lugar na memória
let C = [...B]; // copia os valores
console.log(A, B);
A.push(4);
console.log(A, B);
B.pop();
console.log(A, B);
A.push('Luiz');
console.log(A, B, C)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
}

const pessoa2 = {...pessoa1};
pessoa2.nome = 'João';
console.log(pessoa1, pessoa2);
