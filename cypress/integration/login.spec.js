/// <reference types="cypress"/>

import login from '../support/pages/login'
import loginsistema from '../support/pages/login-sistema'

describe('Login', () => {

  beforeEach(() => {
    loginsistema.acessarSistema()
  })

  context('Login com sucesso', () => {

    it('Realizar login de Médico com número de registro', () => {
      login.loginMedicoComRegistro()
    })

    it('Realizar login de Farmacêutico com número de registro', () => {
      login.loginFarmaceuticoComRegistro()
    })

    it('Realizar login de Enfermeiro com número de registro', () => {
      login.loginEnfermeiroComRegistro()
    })

    it('Realizar login de Nutricionista com número de registro', () => {
      login.loginNutricionistaComRegistro()
    })

    it('Realizar login de Fisioterapeuta com número de registro', () => {
      login.loginFisioterapeutaComRegistro()
    })

    /////////// Login com Email ///////////////

    it('Realizar login de Médico com email', () => {
      login.loginMedicoComEmail()
    })

    it('Realizar login de Farmacêutico com email', () => {
      login.loginFarmaceuticoComEmail()
    })

    it('Realizar login de Enfermeiro com email', () => {
      login.loginEnfermeiroComEmail()
    })

    it('Realizar login de Nutricionista com email', () => {
      login.loginNutricionistaComEmail()
    })

    it('Realizar login de Fisioterapeuta com email', () => {
      login.loginFisioterapeutaComEmail()
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
