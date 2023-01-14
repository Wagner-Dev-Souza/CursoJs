/*faça as variáveis A, B, C, apontarem pros 
valores das variáveis B, C, A.*/

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// forma mais moderna:
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

//forma mais antiga criando uma nova constante temporária:
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

