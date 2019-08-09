import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credito, debito}) => ( //destructor de props

    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credito}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debito}`} text='Total de Debitos' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${credito - debito}`} text='Valor Consolidado' />
            </Row>

        </fieldset>
    </Grid>
)