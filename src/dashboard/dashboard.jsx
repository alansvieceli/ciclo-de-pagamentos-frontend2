import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends React.Component {

    componentDidMount(){
        this.props.getSummary()
    }

    render (){
        const { credito, debito } = this.props.sumario
        //ou credito = this.props.sumario.credito
        //   debito = this.props.sumario.debito 
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                        value={`R$ ${credito}`} text="Total de Créditos" />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debito}`} text="Total de Débitos" />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credito - debito}`} text="Total Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

    //dashboard esta em reducers.js
const mapStateToProps = state => ({sumario: state.dashboard.sumario})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)