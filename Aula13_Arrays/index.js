//array - lista de coisas
const alunos = ['Luiz', 'Maria', 'João', 1, true, null]; // não é boa pratica de programação por coisas de tipos diferentes num mesmo array
console.log (alunos); //porem funciona normalmente

//indexação da strig:
//            012345678910
const nome = 'Luiz Otávio';
console.log(nome[0]);//retorna o indice 0 da string = primeira letra

//indexação da array
//               0        1        2
const nomes = ['Luiz', 'Maria', 'João'];
console.log(nomes[0]);//retorna o indice 0 do array = Luiz

//alterar e adicionar índices na array
nomes[0] = 'Eduardo';
nomes[3] = 'Luiza';
console.log(nomes);
console.log(nomes.length)//mostra o tamanho da array

nomes[nomes.length] = 'Jonas';//adiciona o elemento
nomes[nomes.length] = 'Luana';//no fim da array
console.log(nomes);

nomes.push('Otávio');//adiciona elemento no final da array tb
console.log(nomes);

nomes.unshift('Fábio');//adiciona elemento no inicio da array
console.log(nomes);

nomes.pop();//remove o ultimo elemento do array
console.log(nomes)

// o elemento removido pode ser salvo em uma variével:
const removido = nomes.pop();
console.log(removido)
console.log(nomes)

//da mesma forma pode-se remover o primeiro item:
nomes.shift();
console.log(nomes)

delete nomes[1];//apaga o elemento do indice deixando o indice vazio
console.log(nomes)
console.log(nomes[1])//retornará um item não definido
console.log(nomes[50])//tb retornará um item não definido

console.log(nomes.slice(0, 3))//fatiamento = pega os itens de 0 a 2
console.log(nomes.slice(0, -3))//pega os itens menos os ultimos 3

console.log(typeof nomes)//retorna objeto
console.log(alunos instanceof Array)//testa se é um array