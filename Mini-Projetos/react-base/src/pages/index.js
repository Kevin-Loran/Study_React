import React from 'react';

import { Conteiner } from '../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login(){
    return (
        <Conteiner>
        <Title isRed={false}>
           Login
           <smail>Oie</smail>
        </ Title>
        <Paragrafo> alguma coisa muito bonita </Paragrafo>
        <a href=''>OIie</a>
        <button type='button'>Enviar</button>
      </ Conteiner>
    )
}
