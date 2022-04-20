// Factory Functions / Constructor Functions / Classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);


// Constructor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this
// p2 = (ENDERECOMEMORIA) -> 'Valor
const p2 = new Pessoa('Marcos', 'Miranda');
Object.freeze(p2); // Impede q mude algum valor do objeto
p2.nome = 'Outra coisa'; // Não dá erro
// p2 = 'Outra coisa'  ERRO
console.log(p2);
const p3 = new Pessoa('Maria', 'Silva');
console.log(p3);
