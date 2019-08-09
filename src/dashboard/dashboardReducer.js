import Constants from '../common/consts';

const INITIAL_STATE = {sumario: {credito: 0, debito: 0}}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case Constants.PAGAMENTOS_SUMARIO_GET:
            return { ...state, sumario: action.payload.data }
        default:
            return state
    }
}