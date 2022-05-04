/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (Define várias propriedades)
Object.defineProperty (Define uma propriedade)
*/


const produto = {nome: 'Camiseta', preco: 1.8};
// const outracoisa = produto;
const caneca = Object.assign({}, produto, {material: 'Porcelana'}); // Copia e acrescenta
// const caneca = {nome: produto.nome, preco: produto.preco} // Forma rudimentar
caneca.nome = 'Caneca';
caneca.preco = 2.5;
console.log(produto)
console.log(caneca);




console.log(Object.keys(produto)); // Retorna as chaves em um array
console.log(Object.values(produto)); // Retorna os valores em um array
// Object.freeze(produto); // Congela o objeto, não deixando alterar
Object.defineProperty(produto, 'nome', {
    writable: true,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostra as propriedades
console.log(produto)

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}


