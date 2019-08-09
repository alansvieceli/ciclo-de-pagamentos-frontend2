import React from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import Constants from '../common/consts';
import If from '../common/operador/if'

class ItemList extends React.Component {

    remove(index) {
      
        if ((this.props.readOnly) || this.props.list.length <= 1){
            return;
        }

        this.props.arrayRemove(Constants.ID_FORM_PAGAMENTO, this.props.field, index)   
    }

    add(index, item = {}) {     
        if (this.props.readOnly){
            return;
        }

        this.props.arrayInsert(Constants.ID_FORM_PAGAMENTO, this.props.field, index, item)    
    }

    renderRows(){
        const list = this.props.list || []

        return list.map ((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].nome`} component={Input} 
                    placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].valor`} component={Input} 
                    placeholder="Informe o valor" readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus} >
                    <td><Field name={`${this.props.field}[${index}].situacao`} component={Input} 
                        placeholder="Informe a situação" readOnly={this.props.readOnly} /></td>
                </If>                
                <td>
                    <button type='button' className='bt btn-success' onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus" />
                    </button>
                    <button type='button' className='bt btn-warning' onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone" />
                    </button>
                    <button type='button' className='bt btn-danger' onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o" />
                    </button>                    
                    
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.caption}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus} >
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList) 