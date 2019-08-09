import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './cicloPagamentoActions'

import CicloPagamentoList from './cicloPagamentoList'
import CicloPagamentoForm from './cicloPagamentoForm'

class CicloPagamento extends React.Component {

    componentWillMount(){
        this.props.init();
    }

    render (){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alerar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <CicloPagamentoList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <CicloPagamentoForm 
                                    onSubmit={this.props.create}
                                    submitLabel="Incluir"
                                    submitClass="primary"/>
                            </TabContent>                                
                            <TabContent id='tabUpdate'>
                                <CicloPagamentoForm 
                                    onSubmit={this.props.update}
                                    submitLabel="Alterar"
                                    submitClass="info"/>
                            </TabContent>
                            <TabContent id='tabDelete'>                                
                                <CicloPagamentoForm 
                                    onSubmit={this.props.remove} 
                                    submitLabel="Excluir"
                                    submitClass="danger"
                                    readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamento)