/// <reference types="cypress"/>

import login from '../support/pages/login'
import loginsistema from '../support/pages/login-sistema'

before(() => {
  loginsistema.acessarSistema()
})

describe('Login', () => {

  context('Cadastro com sucesso', () => {

    it('Realizar cadastro de Médico', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Médico (CRM)')
      cy.get('#uf').select('BA')
      cy.get('#sf-register-2').type('12354')
      cy.get('#sf-email').type('mediconovo@teste.com')
      cy.get('#opt-in').check()
      cy.get('#sf-continue-validation').click( {force: true} )

      cy.get('#sf-name').type('Shaun')
      cy.get('#sf-lastname').type('Murphy')
      cy.get('#sf-cellphone').type('48999999999')
      cy.get('#sf-password').type('123456')
      cy.get('#sf-password-confirm').type('123456')
      //cy.get('#sf-continue-validation').click()
    })

    it.only('Realizar cadastro de Enfermeiro', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Enfermeiro (COREN)')
      cy.get('#uf').select('SP')
      cy.get('#sf-register-2').type('123333')
      cy.get('#sf-email').type('mediconovo@teste.com')
      cy.get('#opt-in').check()
      cy.get('#sf-continue-validation').click( {force: true} )

      cy.get('#sf-name').type('Shaun')
      cy.get('#sf-lastname').type('Murphy')
      cy.get('#sf-cellphone').type('48999999999')
      cy.get('#sf-password').type('123456')
      cy.get('#sf-password-confirm').type('123456')
      //cy.get('#sf-continue-validation').click()


    })
    
  })
})
