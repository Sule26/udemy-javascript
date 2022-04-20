class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

// Na classe vc n precisa usar prototype para colocar os métodos no proto
const p1 = new Pessoa('Sule', 'Russel');
const p2 = new Pessoa2('Keysing', 'Dietrich');
console.log(p1);
console.log(p2);
