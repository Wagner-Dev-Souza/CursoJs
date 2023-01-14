nome = 'luiz' //-> não faça isso (variavel global) -> vc não quer isso no seu código js

// diferença entre let e var
var nome = 'Luiz'; //ECMAScript 2015 (ES6) - (var saiu de linha)
var nome = 'Otávio';
console.log(nome);// função var permite alteração da variavel
//comportamento não desejado

//utilizar let
let Nome = 'Luiz';
//let Nome = 'Otavio'; let não permite redeclarar variaveis já declaradas
Nome = 'otávio' //redeclarar sem o let
console.log(Nome)

// Tipos de dados primitivos
// string, number, undefined, null, boolean, symbol
const nome1 = 'wagner'; //string
const nome2 = "wagner"; //string
const nome3 = `wagner`; //string
const num1 = 10; // number
const num2 = 10.52 //number
let nomeAluno; //undifined ->ainda não aponta pra lugar nenhum
const sobrenome = null; // (object) nulo -> não aponta pra lugar nenhum na memória
const aprovado =  false; // Boolean = true, false (lógico)

console.log(typeof sobrenome, sobrenome) 

//Operadores aritiméticos
// (), **, *, /, %, +, -, --, ++, +=, -=, *= ...
//NaN -  not a number
const n1 = 10;
const n2 = parseInt('5.2'); //parseInt(converte para inteiro)
//parseInt(), parseFloat(), Number() ->converte em número
console.log(n1 + n2);
console.log(typeof n2)