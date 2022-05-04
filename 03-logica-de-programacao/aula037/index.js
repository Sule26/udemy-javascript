const nome = 'Luiz Otávio';

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let valor of nome) {
    console.log(valor);
}

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function (valor, indice) {
    console.log(valor, indice)
});
