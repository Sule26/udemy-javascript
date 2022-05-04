// Função construtora -> Objetos
// Função fabrica -> Objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = () => {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', "Oliveira");

console.log(p1, p2);

console.log(typeof p1);

p1.metodo();
p2.metodo();
