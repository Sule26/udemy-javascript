/*
- If pode ser usado sozinho
- Sempre que utilizo a palavra else, preciso de um If antes
- Eu posso ter vários else ifs na checagem
- Só posso ter um else na checagem
*/

const hora = 23;

if(hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if(hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if(hora >= 18 && hora <= 23) {
    console.log("Boa Noite!");
} else {
    console.log("Horário inválido")
}

const tenhoGrana = true;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa!');
}
