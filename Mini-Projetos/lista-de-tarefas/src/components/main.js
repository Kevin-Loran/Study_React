import React, { Component } from "react";
import Form from './Form';
import Tarefas from './Tarefas';


import './main.css';

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

                <Form 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                novatarefa={novatarefa}
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