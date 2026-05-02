import React, { Component } from "react";

// form
import { FaPlus } from 'react-icons/fa'

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

                <form  action="#" className="form">
                    <input onChange={this.handleChange} type="text" value={this.state.novatarefa}/>
                    <FaPlus/>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        );
    }
}