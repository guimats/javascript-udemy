const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
/*
Conseguimos atribuir somente alguns atributos de um objeto utilizando esse método.

No exemplo abaixo, pegamos o nome, sobrenome e idade de pessoa.

Caso queira pegar um atributo e atribui-lo a outro nome de variavel, utilizamos o ':' e damos um nome, como no exemplo abaixo
*/

// const {nome: n = '', sobrenome, idade} = pessoa

/* No caso do endereço ou qualquer objeto dentro de outro objeto, se pegarmos diretamente o enredeço, teremos o objeto completo. Caso queiramos pegar um dos atributos dentro dele, utilizamos também o ':' abrindo a chave e selecionando os atributos desejados (nesse caso não existira mais variavel endereco, somente rua) */

const { endereco: {rua} } = pessoa
// console.log(rua)

const { nome, ...resto } = pessoa
console.log(nome, resto)