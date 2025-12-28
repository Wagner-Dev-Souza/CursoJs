//contados em milésimos de segundos
const tresHoras = 60 * 60 * 3 * 1000; //ajuste do fusohorario
const umDia = 60 * 60 * 24 * 1000

var data = new Date(); 
console.log(data.toString()); // imprime o dia atual

var data = new Date(0); // Date(0) 01/01/1970 Timestamp Unix
console.log(data.toString()); //imprime a data 0 com fusohorario
var data = new Date(0 + tresHoras);
console.log(data.toString()); // data 0 sem fuso
var data = new Date(0 + tresHoras + umDia);
console.log(data.toString()); // data 0 + um dia 

var data = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString());

var data = new Date('2019-04-20 20:20:59');
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //começa no mês 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());// 0 - Domingo
console.log(Date.now()); //valor em ms da data 0 ate o ms atual


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(valorData) {
    const dia = zeroAEsquerda(valorData.getDate());
    const mes = zeroAEsquerda(valorData.getMonth() * 1);
    const ano = zeroAEsquerda(valorData.getFullYear());
    const hora = zeroAEsquerda(valorData.getHours());
    const min = zeroAEsquerda(valorData.getMinutes());
    const seg = zeroAEsquerda(valorData.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const valorData = new Date();
const dataBrasil = formataData(valorData);
console.log(dataBrasil);
