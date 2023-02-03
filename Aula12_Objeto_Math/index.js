//arredondando numeros float
let num1 = 9.491651
let num2 = Math.floor(num1);//arredonda para baixo
console.log(num2);
let num3 = Math.ceil(num1);//arredonda para cima
console.log(num3);
let num4 = Math.round(num1);//arredonda para o mais proximo
console.log(num4);
console.log(Math.max(1,2,3,4,5));//retorna o maior valor
console.log(Math.min(1,2,3,4,5));//retorna o menor valor
console.log(Math.random()); //retorna um numero aleatório entre 0 e 1.

const aleatorio = Math.round(Math.random() * (10 - 1) + 1);
console.log(aleatorio); // retorna um número aleatorio arredondado ente 1 e 10

console.log(Math.PI); // número Pi
console.log(Math.pow( 2, 10)); //potenciação com Math
console.log(2 ** 10); // potenciação sem Math
console.log(Math.sqrt(25))//raiz quadrada com Math 
console.log(25 ** 0.5)//raiz quadrada sem Math

console.log(100/0); //cai numa classe verdadeira chamada infinity
console.log(!!(100/0));//retorna verdadeiro