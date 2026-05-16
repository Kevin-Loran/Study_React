import * as types from '../example/types'

const initialState = {
    botaoClicado: false,
};

export default function(state = initialState, action) {
    switch (action.types) {
        case 'BOTAO_CLICADO': {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado
            return newState;
        }

        default: {
            return state;
        }
    }
};