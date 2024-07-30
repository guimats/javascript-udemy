const inputText = document.querySelector('#input-tarefa');
const tarefas = document.querySelector('ul.tarefas');
const btnTarefa = document.querySelector('.btn-tarefa');

// criando li para adicionar as tarefas
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// função para criar as tarefas digitadas
function criaTarefa(texto) {
    const li = criaLi();
    li.innerHTML = texto;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

// limpa o imput após enviar e volta o foco para ele
function limpaInput() {
    inputText.value = '';
    inputText.focus();
}

// função para criar o botão de apagar que é adicionado junto a tarefa
function criaBtnApagar(li) {
    li.innerText += '  ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(btnApagar);
}

function salvarTarefas() {
    // Selecionando todos os li criados na ul tarefas
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    // pegando o texto de cada um dos li e adicionando ao array listaTarefas
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        // removendo a palavra apagar que veio do botão e tirando os espaços com trim()
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto)
    }

    // convertendo array para um JSON em formato string
    const tarefasJSON = JSON.stringify(listaTarefas);
    // salvando a string JSON no localStorage (aceita somente string)
    localStorage.setItem('tarefas', tarefasJSON)
}

// pegando as tarefas salvas no local storage e adicionando novamente no site
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa)
    }
}

// coletando o evento de pressionar do enter e criando a tarefa
inputText.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputText.value) return;
        criaTarefa(inputText.value);
    }
});

// pegando o evento de click no botão adicionar tarefa e criando a tarefa
btnTarefa.addEventListener('click', function (e) {
    if (!inputText.value) return;
    criaTarefa(inputText.value);
});

// pegando o evento de click do botçao apagar e removendo a tarefa
document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        // selecionando o elemento pai do input e apagando
        el.parentElement.remove();
        salvarTarefas();
    }
})

adicionaTarefasSalvas();