// A diferença é que for of retorna direto o valor ao invés do indice
const nome = ['Luiz', 'Otávio', 'Henrique'];

for (let valor of nome) {
    console.log(valor)
}

console.log('#####')

nome.forEach(function (e) {
    console.log(e)
});