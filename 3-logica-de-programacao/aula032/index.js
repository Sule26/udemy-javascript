// ... rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);


const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um2, , tres2, , cinco2, , sete2] = numeros2;
console.log(um2, tres2, cinco2, sete2);

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros3 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros3;
const [lista1, lista2, lista3] = numeros3;
console.log(seis);
console.log(lista3[2]);
