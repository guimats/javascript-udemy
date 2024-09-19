import React, {Component} from "react";

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {

state = {
  novaTarefa: '',
  tarefas: [],
  index: -1
};

// carregando as tarefas do localStorage ao carregar a pagina (Mount)
componentDidMount() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));

  if (!tarefas) return

  this.setState({ tarefas });
}

// salvando as tarefas assim que uma nova é adicionada/removida/editada
componentDidUpdate(prevProps, prevState) {
  const { tarefas } = this.state;

  // se houver não houver alteração nas tarefas, retorna
  if (tarefas === prevState.tarefas) return;

  // se houver alteração, salva no localStorage
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// evento de enviar formulário
handleSubmit = (e) => {
  e.preventDefault();

  // pegando as tarefas já cadastradas
  const { tarefas, index } = this.state;
  // pegando a tarefa digitada
  let { novaTarefa } = this.state;
  // eliminando espaços antes e depois
  novaTarefa = novaTarefa.trim();

  // se tarefa já existir, retorna (evitar duplicação)
  if (tarefas.indexOf(novaTarefa) !== -1) return;

  // copiando as tarefas (não podemos editar os states diretamente)
  const novasTarefas = [...tarefas];

  if (index === -1) { // criando tarefa
  // seta o state com as tarefas antigas e a nova no final
    this.setState({
      tarefas: [...novasTarefas, novaTarefa ],
      novaTarefa: '',
    });
  } else { //editando tarefa
    novasTarefas[index] = novaTarefa;

    this.setState({
      tarefas: [...novasTarefas],
      index: -1,
      novaTarefa: ''
    });
  }
};

// evento de mudaça no input (digitação)
handleChange = (e) => {
  // setando o state com o valor digitado
  this.setState({
    novaTarefa: e.target.value,
  });
};

handleEdit = (e, index) => {
  const { tarefas } = this.state;
  this.setState({
    index,
    novaTarefa: tarefas[index]
  });
};

handleDelete = (e, index) => {
  // pegando as tarefas já cadastradas
  const { tarefas } = this.state;
  // copiando as tarefas (não podemos editar os states diretamente)
  const novasTarefas = [...tarefas];
  // utilizando o splice para remover o item com o indice enviado
  novasTarefas.splice(index, 1);

  this.setState({
    // seta o state com as tarefas sem a que foi removida
    tarefas: [...novasTarefas]
  })
};

render() {
  const { novaTarefa, tarefas } = this.state;

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
      />

      <Tarefas
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    </div>
  );
}
}
