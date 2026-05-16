import React from 'react';

import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled'

import axios from '../../services/axios';

export default function Login(){
  React.useEffect(() => {
    async function getDate() {
      const response = await axios.get('/alunos');
      console.log(response);
    }
    
    getDate();
  }, [])

    return (
        <Conteiner>
        <Title $isRed={false}>
           Login
           <small>Oie</small>
        </ Title>
        <Paragrafo> alguma coisa muito bonita </Paragrafo>
        <a href=''>OIie</a>
        <button type='button'>Enviar</button>
      </ Conteiner>
    )
}
