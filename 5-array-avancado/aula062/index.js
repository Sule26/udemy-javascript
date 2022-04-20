// Valor por referência
// const nomes = ['Eduardo', 'Maria', 'Joana'] Array Literal
const nomes = new Array('Eduardo', 'Maria', 'Joana') // Construtor
const novo = [...nomes];
const removido = novo.shift(); // POP - FINAL --- Shift - Início
novo.push('João'); // Adiciona no fim
novo.unshift('Wallace'); // Adiciona no início
console.log(nomes, nomes.length);
console.log(novo, novo.length, removido);
