/* const tresHoras = 60 * 60 * 3 * 1000; // milisegundos
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);// 01/01/1970 Timestamp unix ou época unix
 */
const data = new Date(2019, 3, 20, 15, 14, 60); // ano, mês, dia, hora, minuto, segundo, milisegundo -- mês = 0-11

const data1 = new Date(1647998533709);
console.log('Dia', data1.getDate()); // Mês começa do zero
console.log('Mês', data1.getMonth());
console.log('Ano', data1.getFullYear());
console.log('Hora', data1.getHours());
console.log('Min', data1.getMinutes());
console.log('Seg', data1.getSeconds());
console.log('Ms', data1.getMilliseconds());
console.log('Dia semana', data1.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data1.toString());
console.log(Date.now()); // pmilisegundos
