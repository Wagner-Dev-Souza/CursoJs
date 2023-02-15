/*
Primitivos (imutáveis) - string, number, boolean,
undefined, null (bigian, symbol) - Valor

Referência (mutável) - array, object, function
*/

let a = 'A';
let b = a; //copia o valor
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = c; //copia a referência
let e = d;
console. log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);
c.push('Luis');
console.log(e);//apresenta mesmo valor de c e d

let f = [1, 2, 3];
let g = [...f]; //(spread) copia o valor valor da referência
let h = g;

console.log(f, g);
f.push(4);
console.log(f, g);
g.pop();
console.log(f, g);
f.push('Luis');
console.log(h);//apresenta o mesmo valor de g mas não de f

//em objetos:
const a1 = {
    nome: 'Luis',
    sobrenome: 'Otávio'
};
const b1 = a1;
a1.nome = 'João';
console.log(b1);

const a2 = {
    nome: 'Luis',
    sobrenome: 'Otávio'
};
const b2 = {...a2};//spread
a2.nome = 'João';
console.log(b2);
