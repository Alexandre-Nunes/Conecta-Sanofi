/// <reference types="cypress"/>

import loginsistema from '../support/pages/login-sistema'

let Chance = require('chance')
let chance = new Chance()

describe('Cadastro', () => {

  before(() => {
    loginsistema.acessarSistema()
  })

  context('Cadastro sem sucesso', () => {

    it('Tentar realizar cadastro de Médico com registro invalido', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Médico (CRM)')
      cy.get('#uf').select('BA')
      cy.get('#sf-register-2').type(chance.phone())
      cy.get('#sf-email').type(chance.email())
      cy.get('#opt-in').check()
      cy.get('#sf-continue-validation').click({ force: true })
      cy.get('#registro-error').should('contain.text', 'CRM inválido no CFM')
      cy.get('.c-base-modal-content__head > .icon').click()
    })

    it('Tentar realizar cadastro de Médico sem aceitar os termos', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Médico (CRM)')
      cy.get('#uf').select('BA')
      cy.get('#sf-register-2').type('4163')
      cy.get('#sf-email').type(chance.email())
      cy.get('#sf-continue-validation').click({ force: true })
      cy.get('#terms-error').should('contain.text', 'Marcar o aceite')
      cy.get('.c-base-modal-content__head > .icon').click()
    })

    it('Tentar realizar cadastro de Médico duplicado', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Médico (CRM)')
      cy.get('#uf').select('BA')
      cy.get('#sf-register-2').type('4163')
      cy.get('#sf-email').type(chance.email())
      cy.get('#opt-in').check()
      cy.get('#sf-continue-validation').click({ force: true })
      cy.get('.c-text--h3 > strong').should('contain.text', 'Olá, identificamos que você já tem uma conta')
      cy.get('.c-base-modal-content__head > .icon').click()
    })

    it('Tentar realizar cadastro de Médico sem informar os dados', () => {
      cy.get('.menu-profile__indicator').click()
      cy.get('#btnSignUp').click()
      cy.get('#hcp-type').select('Médico (CRM)')
      cy.get('#sf-continue-validation').click({ force: true })

      cy.get('#uf-error').should('contain.text', 'Escolher Estado')
      cy.get('#registro-error').should('contain.text', 'Favor informar seu número de registro')
      cy.get('#email-error').should('contain.text', 'Email inválido')
      cy.get('#terms-error').should('contain.text', 'Marcar o aceite')
      cy.get('.c-base-modal-content__head > .icon').click()
    })
  })
})
