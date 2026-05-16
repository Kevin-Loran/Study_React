import React from 'react';
import { useDispatch } from 'react-redux';

import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled'



export default function Login(){
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });

  }

    return (
        <Conteiner>
        <Title $isRed={false}>
           Login
           <small>Oie</small>
        </ Title>
        <Paragrafo> alguma coisa muito bonita </Paragrafo>
        <a href=''>OIie</a>
        <button type='button' onClick={handleClick}>Enviar</button>
      </ Conteiner>
    )
}
