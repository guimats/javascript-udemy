function criaCadastro(nome, sobrenome, peso, idade) {
    return { nome, sobrenome, peso, idade }
}
const cadastros = []

function cadastrar() {
    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const res = document.querySelector('div.res')

    const pessoa = criaCadastro(nome, sobrenome, peso, altura)

    cadastros.push(pessoa)
    res.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`
    console.log(cadastros)
}