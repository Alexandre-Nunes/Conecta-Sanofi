/// <reference types="cypress"/>

import loginsistema from '../support/pages/login-sistema'
import cadastro from '../support/pages/cadastro'

beforeEach(() => {
  loginsistema.acessarSistema()
})

describe('Cadastro', () => {

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

    it('Realizar cadastro de Nutricionista com sucesso', () => {
      cadastro.cadastroNutricionista()
    })
  })

