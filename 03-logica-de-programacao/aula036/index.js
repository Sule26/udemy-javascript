// for in -> Lê os indices do vetor ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

const chave = 'nome'
console.log(pessoa[chave]);

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

