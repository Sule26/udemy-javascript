const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[1]);


alunos[0] = 'Eduardo';
alunos[3] = 'Luíza';
alunos[alunos.length] = 'Fabio';
alunos.push('Luana');
alunos.unshift('Otávio') // Adiciona no início
const removido = alunos.pop(); // remove do fim e consegue salvar
console.log(removido);

delete alunos[2]; // Deixa vazio e n apaga a posição

console.log(alunos.slice(0, 3));

console.log(typeof alunos);
console.log(alunos instanceof Array);

console.log(alunos);
console.log(alunos[1]);
