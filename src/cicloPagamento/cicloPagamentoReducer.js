import Constants from '../common/consts';

const INITIAL_STATE = {list: []}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case Constants.PAGAMENTOS_GET:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}