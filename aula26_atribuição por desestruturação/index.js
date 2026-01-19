//Desestruturação simples:
let a = "A" // B
let b = "B" // C
let c = "C" // A

console.log(a, b, c);

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//DESESTRUTURAÇÃO DE ARRAY:
//Desestruturação simples de array
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, dois, tres, ...resto] = numeros; //rest operator
const [primeiro, , terceiro, , quinto, ...outros] = numeros;
console.log(um, dois, tres);
console.log(resto);
console.log(primeiro, terceiro, quinto);
console.log(outros);

//desestruturação de array de arrays
const array_num = [[1, 2, 3], [4 , 5, 6], [7, 8, 9]];
//para pegar o numero 6:
console.log(array_num[1][2])
//pegando o seis por desestruturação (metodo complexo)
const [,[,,seis]] = array_num;
console.log(seis);
//forma mais simple
const [lista1, lista2, lista3] = array_num;
console.log(lista2[2]);

//DESESTRUTURAÇÃO DE OBJETOS:
const pessoa = {
    nome: "Wagner",
    sobrenome: "Souza",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 500
    }
};

//atribuição normal
const nome1 = pessoa.nome;
console.log(nome1);

//Atribuição via desestruturação
const { nome, sobrenome: lastname, signo = "Aries", idade } = pessoa;
console.log(nome, lastname, signo, idade);

const { endereco: {rua: r = 12345, numero}, endereco, ...rest} = pessoa;
console.log(r, numero, endereco)
console.log(rest)