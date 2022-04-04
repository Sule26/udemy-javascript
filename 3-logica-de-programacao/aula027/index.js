// ? :

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)
console.log(pontuacaoUsuario >= 1000 ? 'VIP' : 'Não VIP')

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);
