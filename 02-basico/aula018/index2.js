const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`Me chamo ${this.nome} ${this.sobrenome} e minha idade atual é ${this.idade}...`);
    },

    incrementaIdade() {
        ++this.idade;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();