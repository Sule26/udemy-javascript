const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> Não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> Não aponta para local nenhuma na memória
const aprovado = true; // Boolean = true, false (Lógico)

console.log(typeof nome, nome);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);


const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
