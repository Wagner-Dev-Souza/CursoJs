const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Wagner';
const sobrenome02 = 'Souza';
const idade02 = 36;

//para agrupar as variáveis cria-se um objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//é possivel criar fuções para criar objetos
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('José', 'Clemente', 85);
const pessoa3 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa4 = criaPessoa('João', 'Moreira', 55);
const pessoa5 = criaPessoa('Junior', 'Lara', 44);

console.log(pessoa2.nome, pessoa3.sobrenome, pessoa4.idade, pessoa5)

//criando um método em um objeto
const pessoa6 = {
    nome: 'Grasi',
    sobrenome: 'Lima',
    idade: 33,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.incrementaIdade();
pessoa6.fala();
