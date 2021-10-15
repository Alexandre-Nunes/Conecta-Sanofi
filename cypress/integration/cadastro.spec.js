/// <reference types="cypress"/>

import loginsistema from '../support/pages/login-sistema'
import cadastro from '../support/pages/cadastro'

describe('Cadastro', () => {

  before(() => {
    loginsistema.acessarSistema()
  })

  context('Cadastro com sucesso', () => {

    it('Realizar cadastro de Nutricionista com sucesso', () => {
      cadastro.cadastroNutricionista()
    })
  })

  context('Cadastro sem sucesso', () => {

    it('Tentar realizar cadastro de Médico com registro invalido', () => {
      cadastro.cadastroMedicoComRegistroInvalido()
    })

    it('Tentar realizar cadastro de Médico sem aceitar os termos', () => {
     cadastro.cadastroMedicoSemAceitarTermos()
    })

    it('Tentar realizar cadastro de Médico com registro já cadastrado', () => {
     cadastro.cadastroMedicoComRegistroJaCadastrado()
    })

    it('Tentar realizar cadastro de Médico com email já cadastrado', () => {
     cadastro.cadastroMedicoComEmailJaCadastrado()
    })

    it('Tentar realizar cadastro de Médico sem informar os dados obrigatórios', () => {
     cadastro.cadastroMedicoSemInformarDadosObrigatorios()
    })
  })
})
