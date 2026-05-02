import React, { Component } from "react";

// form
import { FaPlus} from 'react-icons/fa'

// taefa
import { FaEdit, FaWindowClose   } from 'react-icons/fa'

import './main.css'

export default class Main extends Component {
    state = {
        novatarefa: '',
        tarefas: [],
        index: -1,
    };
    
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }



    handleSubmit= (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novatarefa } = this.state;
        novatarefa = novatarefa.trim();

        if(tarefas.indexOf(novatarefa) !== -1 && index === -1) return;
        if(novatarefa === '') return;

        const novatarefas = [ ...tarefas];

        if(index === -1){
            this.setState({
            tarefas: [ ...novatarefas, novatarefa],
            novatarefa: '',
            });
        } else {
            novatarefas[index] = novatarefa;
       
            this.setState({
                tarefas: [ ...novatarefas],
                index: -1,
                novatarefa: '',
            });
        }

    }
    
    
    handleChange = (e) =>{
        this.setState({
            novatarefa: e.target.value,
        })
    }
    
    handleEdit= (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index,
            novatarefa: tarefas[index],
        });
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