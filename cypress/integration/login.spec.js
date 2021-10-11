/// <reference types="cypress"/>

import login from '../support/pages/login'
import loginsistema from '../support/pages/login-sistema'

before(() => {
  loginsistema.acessarSistema()
})

describe('Login', () => {

  context('Login com sucesso', () => {

    it('Realizar login de Médico com número de registro', () => {
      login.loginMedicoComRegistro()
    })

   
    it('Realizar login de Médico com email', () => {
      login.loginMedicoComEmail()
    })
  })

  context('Login sem sucesso', () => {

    it('Tentar realizar login sem informar os dados obrigatórios', () => {
      login.loginSemDadosObrigatorios()
    })

    it('Tentar realizar login com dados inválidos', () => {
      login.loginComDadosInvalidos()
    })
  })
})
