
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.split(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(-2, Number.MAX_VALUE);
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes, removidos);
console.log(Number.MAX_VALUE);
