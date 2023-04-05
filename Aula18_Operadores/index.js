/*
Operadores de Comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) **
=== igualdade estrita (valor e tipo)
!= diferente (valor) **
!== diferente estrito (valor e tipo)
** - não utilizar
*/
/*
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
/* Avaliação de curto-circuito
&& -> false && true -> retorna o valor false literal
|| -> true || false -> retorna o valor true literal

FALSY
false
0
"" '' ``
null / undefined
NaN
*/
console.log("Luiz" && undefined && "Maria");
//imprime o primeiro valor falso
console.log(0 || null || false || "Luiz Otávio" || true);
//imprime o primeiro valor verdadeiro

//ex: 
function falaOi () {
    return `Oi`
}
const vaiExecutar = "false";
console.log(vaiExecutar && falaOi());

const corUsuario= 'vermelho';
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)