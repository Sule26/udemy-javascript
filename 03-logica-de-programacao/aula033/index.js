const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome: teste = 'Não existe', sobrenome, endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(teste, sobrenome, r, numero, endereco);

const { nome: nome1, ...resto } = pessoa;
console.log(resto);
