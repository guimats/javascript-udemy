// map -> sempre tem o tamanho do array orignial
// dobrando os valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Retorne apenas a chave "nome" do objeto
// Adicione a chave id em cada objeto (id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const somenteNome = pessoas.map(objeto => objeto.nome);
const removerNome = pessoas.map(objeto => ({ idade: objeto.idade }));
const adicionarId = pessoas.map((objeto, indice) => {
    const newObjeto = { ...objeto };
    newObjeto.id = indice + 1;
    return newObjeto;
});

console.log(somenteNome);
console.log(removerNome);
console.log(adicionarId);
