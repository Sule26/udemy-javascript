// 705.484.450-52            070.987.720-03
/*
7 x 10 = 70
0 x 9 = 0
5 x 8 = 40
4 x 7 = 28
8 x 6 = 48
4 x 5 = 20
4 x 4 = 16
5 x 3 = 15
0 x 2 = 0
Total = 237
11 - (237 % 11) = 5 (Primeiro dígito) - Se maior que 9, então valor igual a 0

7 x 11 = 77
0 x 10 = 0
5 x 9 = 45
4 x 8 = 32
8 x 7 = 56
4 x 6 = 24
4 x 5 = 20
5 x 4 = 20
0 x 3 = 0
5(digito adicionado) x 2 = 10
Total = 284
12 - (284 % 11) = 2 (Segunddo dígito) - Se maior que 9, então valor igual a 9

Comparar os dígitos no final
*/


class ValidaCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo',  {
            enumerable: true,
            get() {
                return cpf.replace(/\D+/g, '');
            },
        });
        this.cpfArray = Array.from(this.cpfLimpo);
    }

    criaDigito(cpf) {
        const soma = cpf
            .map((valor, indice) => Number(valor) * (cpf.length + 1 - indice))
            .reduce((acumulador, valor) => acumulador + Number(valor))
        const digito = 11 - (soma % 11);
        return digito > 9 ? '0' : `${digito}`;
    }

    validadorDeCpf(cpf){
        console.log(`CPF Passado: ${this.cpfLimpo}`);
        console.log(`CPF Gerado: ${cpf}`);
        if(cpf === this.cpfLimpo) return 'CPF Válido!';
        return 'CPF Inválido'
    }

    verificaCpf() {
        if(this.cpfArray.length !== 11) return false;
        let cpfArrayParaVerificar = this.cpfArray
            .filter((valor, indice) => indice < 9);
        cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
        cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
        const cpfLimpoParaVerificar = cpfArrayParaVerificar.join("");
        this.validadorDeCpf(cpfLimpoParaVerificar);
    }

}

