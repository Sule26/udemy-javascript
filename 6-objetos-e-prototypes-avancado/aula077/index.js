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


function ValidaCpf(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get() {
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
  this.cpfArray = Array.from(this.cpfLimpo);
  
}

ValidaCpf.prototype.criaDigito = function(cpf) {
    const soma = cpf
        .map((valor, indice) => Number(valor) * (cpf.length + 1 - indice))
        .reduce((acumulador, valor) => acumulador + Number(valor))
    const digito = 11 - (soma % 11);
    return digito > 9 ? '0' : `${digito}`;
}

ValidaCpf.prototype.verificaCpf = function() {
    let cpfArrayParaVerificar = this.cpfArray
        .filter((valor, indice) => indice < 9)
    cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
    cpfArrayParaVerificar.push(this.criaDigito(cpfArrayParaVerificar));
    const cpfLimpoParaVerificar = cpfArrayParaVerificar.join("");
    console.log(this.resultado(cpfLimpoParaVerificar));
}

ValidaCpf.prototype.resultado = function(cpf) {
    console.log(`CPF passado: ${this.cpfLimpo}`);
    console.log(`CPF gerado: ${cpf}`);
    if(cpf === this.cpfLimpo) return 'CPF Válido!';
    return 'CPF Inválido!';
}

const cpf1 = new ValidaCpf('182.775.917-80');
cpf1.verificaCpf();
