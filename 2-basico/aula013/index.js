let txt1= "Um \"texto\"";
let txt2 = "Um texto";
let txt3 = "O rato roeu a roupa do rei de roma."

console.log(txt1);
console.log(txt2[3]);
console.log(txt2.charAt(6));
console.log(txt2.charCodeAt(6)); // tabela
console.log(txt2.concat(' em', ' um', ' lindo dia.'));
console.log(txt2 + ' em um lindo dia.');
console.log(`${txt2} em um lindo dia.`)
console.log(txt2.indexOf('o', 3)); // funciona com palavras
console.log(txt2.lastIndexOf('o', 3)); // funciona de trás pra frente
console.log(txt2.match(/[a-z]/g));
console.log(txt2.search(/x/));
console.log(txt2.replace('Um', 'Outro'));
console.log(txt3.replace(/r/g, '#')); // O G faz trocar em todas
console.log(txt3.length);
console.log(txt3.slice(-5, -1)); // Negativos começam de trás pra frente
console.log(txt3.substring(txt3.length - 5, txt3.length - 1));
console.log(txt3.split(' ', 2)); // Vc consegue escolher a quantidade de vezes
console.log(txt3.toUpperCase());
console.log(txt3.toLowerCase());
