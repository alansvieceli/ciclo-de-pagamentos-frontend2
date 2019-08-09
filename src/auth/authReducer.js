import Constants from '../common/consts';

const userKey = '_cliclo_pagamento_user'
const INITIAL_STATE = {
    //user: {name: "Alan", email: "alanb@ss.com"}, //
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case Constants.USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}