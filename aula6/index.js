let idade; //declarou a variável, não deu valor a ela (valor undefined)
idade = 'Qualquer valor';//Inicializou a variável (deu um valor a ela)
let nome = 'Henrique'; //string

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Não podemos criar variáveis com palavras reservadas. (ex: let/ var / log / if etc... )
// Não podemos re-declarar variáveis com let.
// Variáveis precisam ter nomes significativos.
// Não podemos começar o nome de uma variável com números (ex: 1nome, 32cliente).
// Não podem conter espaços ou traços. (ex: nome do cliente / nome-cliente)
// Utilizamos por convenção camelCase. (ex: nome, nomeCompleto, nomeDoCliente)
// Case-sensitive
// NÃO UTILIZA VAR, UTILIZE LET.