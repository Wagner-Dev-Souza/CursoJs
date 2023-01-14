let umaString = "Um \"texto\""; /*pode se usar barra invertida
(\) para escapar um a caracter em um texto. No exemplo escapamos as 
aspas duplas, assim, permitindo usa-las como string em um 
texto com aspas duplas.*/
console.log(umaString);

umaString = "Um \texto";
console.log(umaString);

umaString = "Um \\texto";
console.log(umaString);

//str são indexadas
//           01234567
umaString = 'Um texto';
console.log(umaString[4]);
console.log(umaString[8]);
console.log(umaString[-1]);
console.log(umaString.charAt(6));//função = a anterior
console.log(umaString.charAt(8));//devolve sem valor
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g));// expressão regular pra retornar todas as letras minusculas
//g representa uma flag para array
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outro'));
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString);
console.log(umaString.replace(/r/, "#"));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2,6));
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length -1));
//mesma coisa que a de cima
console.log(umaString.split(' '));
console.log(umaString.split('r'));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());