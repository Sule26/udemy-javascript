// new Array(); []

const pessoa1 = new Object();
pessoa1.nome = 'Marcos';
pessoa1.sobrenome = 'Vinícius';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
  return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}


const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
  

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

//delete pessoa1.nome;
console.log(pessoa1);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1) {
  console.log(pessoa1[chave]);
}
