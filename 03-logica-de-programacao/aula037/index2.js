const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

for (let valor of pessoa) {
    console.log(valor);
}
