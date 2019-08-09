import Constants from '../consts';

const INITIAL_STATE = { selected: '', visible: {} }

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case Constants.TAB_SELECTED:
            return { ...state, selected: action.payload }
        case Constants.TAB_SHOWED:
            return { ...state, visible: action.payload }
        default:
            return state
    }
}