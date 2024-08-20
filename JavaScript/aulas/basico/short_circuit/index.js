/*

&& -> false && true -> retorna o último valor falso encontrado (se todos forem verdadeiros, retorna o último)
|| ->  true && false -> retorna o primeiro valor verdadeiro encontrado (se todos forem falso, retorna o último)

FALSY (valores falsos):
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi() {
    console.log('Oi')
}

const vaiExecutar = false

// com esse short circuit, não precisamos criar uma lógica de if para validar o que deve ser feito
vaiExecutar && falaOi() // -> se vaiExecutar for true, falaOi() vai ser executado, e caso false, a expressão para no vaiExecutar


// console.log(0 || false || null || 'Luiz Otavio' || true)

const corUsuario = null
// se o valor corUsuário for FALSY, a cor padrão será 'red'. Caso tenha um valor true, corPadrao recebe o valor de corUsuario
const corPadrao = corUsuario || 'red'

console.log(corPadrao)

