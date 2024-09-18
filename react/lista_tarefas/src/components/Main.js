import React, {Component} from "react";
import './Main.css';

// To use react icons: npm i react-icons

// Form - icons
import { FaPlus } from 'react-icons/fa'

// Tarefas - icons
import { FaEdit } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'

export default class Main extends Component {

state = {
  novaTarefa: '',
  tarefas: [
  ]
};

// evento de enviar formulário
handleSubmit = (e) => {
  e.preventDefault();

  // pegando as tarefas já cadastradas
  const { tarefas } = this.state;
  // pegando a tarefa digitada
  let { novaTarefa } = this.state;
  // eliminando espaços antes e depois
  novaTarefa = novaTarefa.trim();

  // se tarefa já existir, retorna (evitar duplicação)
  if (tarefas.indexOf(novaTarefa) !== -1) return;

  // copiando as tarefas (não podemos editar os states diretamente)
  const novasTarefas = [...tarefas];

  // seta o state com as tarefas antigas e a nova no final
  this.setState({
    tarefas: [...novasTarefas, novaTarefa ]
  })

};

// evento de mudaça no input (digitação)
handleChange = (e) => {
  // setando o state com o valor digitado
  this.setState({
    novaTarefa: e.target.value,
  });
};

handleEdit = (e, index) => {
  console.log('edit', index);
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

      <form onSubmit={this.handleSubmit} action='#' className="form">
        <input onChange={this.handleChange} type="text" value={novaTarefa}/>
        <button type="submit"><FaPlus /></button>
      </form>

      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit"/>
              <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete"/>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
}
