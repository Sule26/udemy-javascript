function funcao(a, b, c) { // Só para função declarada com function
    let total = 0;
    //console.log(arguments); 
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e ,f);
}

funcao2(1, 2, 3);


function soma(a = 0, b = 2, c = 4) {
    console.log(a + b + c); // 2 + undefined = NaN
}
soma(2, 10);
soma(2, c = 20);
soma(2, 10 , 20);
soma(2, '', 20);
soma(2, undefined, 20); // undefined para ir com valor padrão


function funcao3( {nome, sobrenome, idade} ) {
    console.log(nome, sobrenome, idade);
}
funcao3({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

function funcao4([valor1, valor2, valor3]) { 
    console.log(valor1, valor2, valor3);
}

funcao4(['Luiz', 'Otávio', 'Miranda']);


const conta = function(operador, acumulador, ...numeros) { // todo o resto vai estar em um array
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
