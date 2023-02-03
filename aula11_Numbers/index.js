let num1 = 10; //number
let num2 = 2.5; // number
let num3 = 4

console.log(num1 + num2); //faz o processo de adição nos numbers
console.log(num1.toString() + num2); //faz o processo de concatenação nos valores, pois o num1 foi temporariamente convertido em string
console.log(typeof num1)
console.log(num1.toString(2));//mostra a versão binaria do number
num1 = num1.toString(); //converte o number permanentemente em string
console.log(typeof num1)
console.log(num2.toFixed(4))//seleciona o número de casas decimais
console.log(Number.isInteger(num3));//verifica se um number é inteiro
let temp = num3 * 'Ola';
console.log(temp); // uma conta que não retorna um number
console.log(Number.isNaN(temp));
let temp2 = num3 * "5";//a conta passa, porém não é boa pratica de programação fazer contas com strings
console.log(temp2)
console.log(Number.isNaN(temp2))//retorna false pois o Js converte a string para number

//IEEE 754-2008 (Js usa essa configuração para numbers de ponto flutuante o que pode gerar certas imprecisões nas contas)
//exemplo:
let numero1 = 0.7; //number
let numero2 = 0.1; //number

numero1 += numero2 // equivalente a numero1 + numero2 = 0.8
numero1 += numero2 // 0.9
numero1 += numero2 // 1.0

console.log(numero1) //resposta deveria ser 1.0
console.log(numero1.toFixed(1))//agora ele se apresenta corrigido
console.log(Number.isInteger(numero1))//porem ainda não se apresenta como inteiro

//uma maneira de corrigir isso
numero1 = parseFloat(numero1.toFixed(1))
console.log(Number.isInteger(numero1))

// outra maneira seria 
numero1 = Number(numero1.toFixed(1))
console.log(Number.isInteger(numero1))

//outra maneira é fazer matematicamente
let prim_num = 0.7;
let seg_num = 0.1;

prim_num = ((prim_num * 100) + (seg_num * 100)) / 100; // 0.8
prim_num = ((prim_num * 100) + (seg_num * 100)) / 100; // 0.9
prim_num = ((prim_num * 100) + (seg_num * 100)) / 100; // 1.0

console.log(prim_num.toFixed(1))
console.log(Number.isInteger(prim_num))

