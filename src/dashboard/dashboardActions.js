import Constants from '../common/consts';

import axios from 'axios'

export function getSummary(){
    const request = axios.get(`${Constants.BASE_URL}/sumario`)
    return {
        type: Constants.PAGAMENTOS_SUMARIO_GET,
        payload: request
    }
}