function saudacao (nome) {
    console.log(`Bom dia ${nome}`)
}

saudacao('Luiz');
saudacao('Maria');
const variavel = saudacao('Felipe');
console.log(variavel);//retorna indefinido

function ola (nome) {
    console.log(`Bom dia ${nome}`)
    return 12345
}

const teste = ola('Jose')
console.log(teste)//retorna o return

function hello (name) {
    return `Bom dia ${name}!`
}

const constante = hello('Wagner')
console.log(constante)

function soma (x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 3));
console.log(soma());//retorna NaN pois tenta concatenar dois undefined
console.log(soma('Luiz', ' Otávio'));//concatena as strings

function adicao (x = 1, y = 1) {//faz x e y assumirem o valor 1 caso não se declare valor
    const resultado = x + y;
    return resultado;
}

const resultado = adicao()
console.log(resultado)//exibe o resultado com os valores assumidos por x e y como padrão

const resposta = adicao(4)
console.log(resposta)//exibe reultado assumindo valor padrão somete para y pois x foi declarado

const resto = adicao(4, 2)
console.log(resto)

//outra forma de criar uma função
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//maneira mais moderna => arrow fuction
const raiz2 = (n) => {
    return n ** 0.5;
};
console.log(raiz2(16));

//maneira simplificada
const raiz3 = n => n ** 0.5;
//caso haja apenas um parametro pode eliminar os parenteses
//caso haja apenas uma funcionalidade elimina-se as chaves e o return
console.log(raiz3(25));