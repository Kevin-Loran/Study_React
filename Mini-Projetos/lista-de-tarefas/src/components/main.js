import React, { Component } from "react";

import './main.css'

export default class Main extends Component {
        state = {
            novatarefa: '',
        };


    handleChange = (e) =>{
        this.setState({
            novatarefa: e.target.value,
        })
    }

    render() {
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form>
                    <input onChange={this.inputMudou} type="text"/>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        );
    }
}