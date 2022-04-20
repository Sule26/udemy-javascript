// Some todos os números (Reduce)
// Retorne um arry com os pares (Filter)
// Retorne um array com o dobro dos valores

//               0   1  2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => acumulador += valor);

const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []);

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, []);

console.log(total);
console.log(pares);
console.log(dobro);



// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);
