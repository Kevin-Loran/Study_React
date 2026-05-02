import React, { Component } from "react";

// form
import { FaPlus} from 'react-icons/fa'

// taefa
import { FaEdit, FaWindowClose   } from 'react-icons/fa'

import './main.css'

export default class Main extends Component {
        state = {
            novatarefa: '',
            tarefas: []
        };


    handleSubmit= (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novatarefa } = this.state;
        novatarefa = novatarefa.trim();

        if(tarefas.indexOf(novatarefa) !== -1) return;

        const novatarefas = [ ...tarefas];

        this.setState({
            tarefas: [ ...novatarefas, novatarefa],
        });
    }
    
    
    handleChange = (e) =>{
        this.setState({
            novatarefa: e.target.value,
        })
    }
    
    handleEdit= (e, index) => {
        console.log(e, index)
    }
  
    handleDelete= (e, index) => {
        const { tarefas } = this.state;
        const novastarefas = [ ...tarefas ];
        novastarefas.splice(index, 1);

        this.setState({
            tarefas: [ ...novastarefas ],
        });
    }


    render() {
        const { novatarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input onChange={this.handleChange} type="text" value={this.state.novatarefa}/>
                    <FaPlus/>
                    <button type='submit'>Enviar</button>
                </form>

                <ul className="tarefas">
                   {tarefas.map((tarefa, index) => {
                   return  <li key={tarefa}>
                    { tarefa }
                    <span>
                        <FaEdit  
                         onClick={(e) => this.handleEdit(e, index)}
                         className="edit"/>

                        <FaWindowClose 
                         onClick={(e) => this.handleDelete(e, index)}
                         className="delete"/>
                    </span>
                    </li>
                   })}
                </ul>
            </div>
        );
    }
}