/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso/(altura*altura)
anoNascimento = 2010 - idade

// `texto completoentre crases` ${escrever o valor aqui} - busca o valor entre chaves
// ( + )sinal de + soma os numeros ou agrupa as strings

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg');
console.log('tem ' + altura + ' de altura e seu imc é de ' + imc);
console.log(`${nome} nasceu em ${anoNascimento}`); // forma mais moderna e legivel
