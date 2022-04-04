// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA'){
            return `${this.nome} está ${assunto}.`
        },

        altura,
        peso,
        // Getter
        get imc() { // get faz com q IMC apareça como um atributo ao invés de um método
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);

p1.nomeCompleto = 'Maria Otávio Miranda';
console.log(p1.nomeCompleto);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p2.nomeCompleto);
console.log(p2.fala('falando sobre o Cirilo'));
console.log(p2.imc);
