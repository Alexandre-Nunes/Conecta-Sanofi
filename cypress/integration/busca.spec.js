/// <reference types="cypress"/>

import busca from '../support/pages/busca'
import loginsistema from '../support/pages/login-sistema'

before(() => {
    loginsistema.acessarSistema()
})

describe('Busca', () => {

    context('Busca com sucesso', () => {
        it('Realizar uma busca no header estando deslogado no sistema', () => {
           busca.BuscaDeslogadoHeaderComResultado()
        })
    })

    context('Busca sem sucesso', () => {
        it('Realizar uma busca no header por termo inexistente estando deslogado no sistema', () => {
           busca.BuscaDeslogadoHeaderSemResultado()
        })
    })
})

