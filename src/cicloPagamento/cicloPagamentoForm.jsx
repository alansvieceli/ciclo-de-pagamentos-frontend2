import Constants from '../common/consts';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './cicloPagamentoActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Sumary from './sumary'

class CicloPagamentoForm extends React.Component {

    calcularSumario(){
        //técnica map-reduce
        //+valor converte para valor
        const sum = (t, v) => t + v
        return {
            somaDeCreditos: this.props.creditos.map(c => +c.valor || 0).reduce(sum),
            somaDeDebitos: this.props.debitos.map(d => +d.valor || 0).reduce(sum)
        }
    }

    render(){

        const { handleSubmit, readOnly, creditos, debitos } = this.props //o reduxform add isso no props
        const { somaDeCreditos, somaDeDebitos } = this.calcularSumario();

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder="Informe o nome" />
                    <Field name='mes' component={labelAndInput} readOnly={readOnly} type='number'
                        label='Mês' cols='12 4' placeholder="Informe o mês"/>
                    <Field name='ano' component={labelAndInput} readOnly={readOnly} type='number'
                        label='Ano' cols='12 4' placeholder="Informe o ano"/>
                    <Sumary credito={somaDeCreditos} debito={somaDeDebitos} />
                    <ItemList cols="12 6" list={creditos} readOnly={readOnly}
                        field='creditos' caption='Créditos'/>
                    <ItemList cols="12 6" list={debitos} readOnly={readOnly}
                        field='debitos' caption='Debitos' showStatus={true}/>                        
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }
}

CicloPagamentoForm = reduxForm({form: Constants.ID_FORM_PAGAMENTO, destroyOnUnmount: false})(CicloPagamentoForm)

const selector = formValueSelector(Constants.ID_FORM_PAGAMENTO)
const mapStateToProps = state => ({
    creditos: selector(state, 'creditos'),
    debitos: selector(state, 'debitos')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoForm) 

//destroyOnUnmount: nao quero q ele destrua os dados do form quando o componente for destruido