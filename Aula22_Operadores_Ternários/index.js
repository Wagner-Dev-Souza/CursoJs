const pontuaçãoUsuario = 2000;
const nivelUsuario = pontuaçãoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'amarelo';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);