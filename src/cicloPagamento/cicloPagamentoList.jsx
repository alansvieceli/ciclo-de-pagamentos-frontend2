import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './cicloPagamentoActions'

class CicloPagamentoList extends React.Component {

    componentWillMount(){
        this.props.getList();        
    }

    renderRows(){
        const list = this.props.list || [];

        return list.map ( obj => (
            <tr key={obj._id}>
                <td>{obj.nome}</td>
                <td>{obj.mes}</td>
                <td>{obj.ano}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(obj)} >
                        <i className="fa fa-pencil" />
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(obj)} >
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        ));
    }

    render(){        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>  
                            <th className="table-actions">Ações</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)
