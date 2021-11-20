/// <reference types="cypress"/>
import loginsistema from '../support/pages/login-sistema'

before(() => {
  loginsistema.acessarSistema()
})

describe('Artigo', () => {

   context('Acessar artigo com sucesso', () => {

    it('Acessar artigo exclusivo, utilizando perfil com permissão', () => {
     
      cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.get('#modal-search-box').should('be.visible').type('Artigo Modular Teste home automatizada')
      cy.get('.grid-lg-10 > .modal-search__icon').click()
      cy.wait(2000)
      cy.contains('Artigo Modular Teste home automatizada').click()
      cy.get('.c-hero-article__title').should('contain', 'Artigo Modular Teste')
    })
  })
})
