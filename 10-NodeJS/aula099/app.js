const Cachorro = require('./Z/mod2');

const path = require('path');

const cachorrinho = new Cachorro('Dog')

cachorrinho.latir()

console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'modelo', 'assets')); // Volta 2 páginas
