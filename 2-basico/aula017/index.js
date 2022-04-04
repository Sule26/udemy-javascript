function saudacao(nome) {
    return `Bom dia, ${nome}!`
}


const variavel = saudacao('Sule');

console.log(variavel);

function soma(x = 0, y = 0) {
    return x + y;
}

console.log(soma(6, 5));
console.log(soma(10, 5));
console.log(soma(12, 5));
console.log(soma(3, 5));
console.log(soma());

/* const raiz = function (n) {
    return n ** 0.5;
}; */

const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

