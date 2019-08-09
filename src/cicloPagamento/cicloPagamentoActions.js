import Constants from '../common/consts';
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

export function getList(){
    const request = axios.get(`${Constants.BASE_URL}`)
    return {
        type: Constants.PAGAMENTOS_GET,
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')

}

export function remove(values) {
    return submit(values, 'delete')

}

function submit(values, method){
    return dispatch => { //<--redux-thunk
        const id = values._id ? values._id : ""
        axios[method](`${Constants.BASE_URL}/${id}`, values)
        .then(resp => {
            toastr.success("Sucesso", "Operação Realizada com Sucessos.")
            dispatch([ //<-- redux multi
                resetForm(Constants.ID_FORM_PAGAMENTO),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(err => {
                toastr.error("Erro", err)
            });
        })

    }

}

export function showUpdate(cicloPagamento){
    //redux-multi...retorna um array de action
    return [
        showTabs("tabUpdate"),
        selectTab("tabUpdate"),
        initialize(Constants.ID_FORM_PAGAMENTO, cicloPagamento)
    ]
}

export function showDelete(cicloPagamento){
    //redux-multi...retorna um array de action
    return [
        showTabs("tabDelete"),
        selectTab("tabDelete"),
        initialize(Constants.ID_FORM_PAGAMENTO, cicloPagamento)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize(Constants.ID_FORM_PAGAMENTO, Constants.INITITAL_VALUES)
    ]
}