function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
        /* nome: nome,
        sobrenome: sobrenome, 
        idade: idade, */
    };
}

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
};


const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa('João', 'Moreira', 32);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);
const pessoa6 = criaPessoa('Sule', 'Silva', 21);


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);
console.log(pessoa6);

