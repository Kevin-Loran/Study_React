import React from 'react';
import styled from 'styled-components';

import { Conteiner } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled'

export default function Login(){
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
