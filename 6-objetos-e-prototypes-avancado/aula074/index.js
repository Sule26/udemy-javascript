// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}`; Vai ser o primeiro
}
// pessoa1 ->> Pessoa.prototype --> Object.prototype


// instância
Pessoa.prototype.estouAqui = "Hahahaha";
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}
const pessoa1 = new Pessoa('Luiz', 'O.'); // <-- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <-- Pessoa = Função Construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
