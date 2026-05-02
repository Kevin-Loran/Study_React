import React, { Component } from "react";

// form
import { FaPlus} from 'react-icons/fa'

// taefa
import { FaEdit, FaWindowClose   } from 'react-icons/fa'

import './main.css'

export default class Main extends Component {
        state = {
            novatarefa: '',
            tarefas: 
           [ 'fazer cafe',
            'estudar',
            'tomar banho']
        };


    handleChange = (e) =>{
        this.setState({
            novatarefa: e.target.value,
        })
    }

    render() {
        const { novatarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form  action="#" className="form">
                    <input onChange={this.handleChange} type="text" value={this.state.novatarefa}/>
                    <FaPlus/>
                    <button type='submit'>Enviar</button>
                </form>

                <ul className="tarefas">
                   {tarefas.map((tarefa) => {
                   return  <li key={tarefa}>
                    { tarefa }
                    <div>
                        <FaEdit className="edit"/>
                        <FaWindowClose className="delete"/>
                    </div>
                    </li>
                   })}
                </ul>
            </div>
        );
    }
}