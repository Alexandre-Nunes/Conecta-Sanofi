/// <reference types="cypress"/>

import busca from '../support/pages/busca'
import loginsistema from '../support/pages/login-sistema'
import login from '../support/pages/login'

before(() => {
    loginsistema.acessarSistema()
})

describe('Busca com usuário deslogado', () => {

    context('Busca com sucesso', () => {
        it('Realizar uma busca pelo nome completo do termo', () => {
            busca.BuscaDeslogadoHeaderComResultado()
        })

        it('Realizar uma busca por parte do nome do termo', () => {
            busca.BuscaParteNomeTermo()
        })

        it('Realizar uma busca por termo utilizando traço', () => {
            busca.BuscaPorTermoComTraco()
        })

        it('Realizar uma busca por termo utilizando acentuação e preposição', () => {
            busca.BuscaPorTermoComAcentuacaoePreposicao()
        })
    })

    context('Busca sem sucesso', () => {
        it('Realizar uma busca por termo inexistente', () => {
            busca.BuscaDeslogadoHeaderSemResultado()
        })

        it('Realizar uma busca vazia', () => {
            busca.BuscaVaziaDeslogado()
        })
    })

    describe('Busca com usuário logado como Médico', () => {

        beforeEach(() => {
            login.loginMedicoComRegistro()
        })

        context('Busca com sucesso', () => {
            it('Realizar uma busca pelo nome completo do termo', () => {
                busca.BuscaDeslogadoHeaderComResultado()
            })
        })

        context('Busca sem sucesso', () => {
            it('Realizar uma busca por termo inexistente', () => {
                busca.BuscaDeslogadoHeaderSemResultado()
            })
        })
    })
})

