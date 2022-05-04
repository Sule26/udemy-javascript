export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo',  {
            enumerable: true,
            writable:false,
            configurable: false,
            get() {
                return cpf.replace(/\D+/g, '');
            },
        });
        this.cpfArray = Array.from(this.cpfLimpo);
    }

    static criaDigito(cpf) {
        const soma = cpf
            .map((valor, indice) => Number(valor) * (cpf.length + 1 - indice))
            .reduce((acumulador, valor) => acumulador + Number(valor))
        const digito = 11 - (soma % 11);
        return digito > 9 ? '0' : `${digito}`;
    }

    validadorDeCpf(cpf){
        if(cpf != this.cpfLimpo) return false;
        return true;
    }


    verificaCpf() {
        if(this.cpfArray.length !== 11) return false;
        let cpfArrayParaVerificar = this.cpfArray
            .filter((valor, indice) => indice < 9);
        cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
        cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
        const cpfLimpoParaVerificar = cpfArrayParaVerificar.join("");
        return this.validadorDeCpf(cpfLimpoParaVerificar);
    }

}
