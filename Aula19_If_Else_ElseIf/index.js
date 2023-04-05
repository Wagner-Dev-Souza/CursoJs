// If pode ser utilizado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posse ter vários else ifs na checagem
// Só podemos ter um else na checagem
// Podemos ter condições sem else if, utilizando apenas if e else


/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa noite
*/
const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Hora identificou um erro...')
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else{
    console.log('Não vou sair de casa');
}

// Ao encontrar algo verdadeiro na condicional ele executa a condicional e encerra as condicionais sem checar o restante.

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')   
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.')
} else if (numero === 10) {//verdadeiro
    console.log('O número é 10!!!') 
} else if (numero >=9 && numero <= 11) {//verdadeiro
    console.log('O numero esté entre 9 e 11.') 
} else {
    console.log('O número não está entre 0 e 11.')
}