// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacao = 1200
const nivel = pontuacao >= 1000 ? 'VIP' : 'Normal'
console.log(`Usuário ${nivel}`)

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(corPadrao)