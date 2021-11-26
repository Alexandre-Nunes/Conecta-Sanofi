/// <reference types="cypress"/>
import loginsistema from '../support/pages/login-sistema'
import login from '../support/pages/login'

beforeEach(() => {
  loginsistema.acessarSistema()
})

describe('Acessar Artigo com usuário deslogado', () => {

  context('Acessar artigo com sucesso', () => {

    it('Acessar artigo', () => {

      cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.get('#modal-search-box').should('be.visible').type('Artigo Modular Teste home automatizada')
      cy.get('.grid-lg-10 > .modal-search__icon').click()
      cy.wait(2000)
      cy.contains('Artigo Modular Teste home automatizada').click()
      cy.get('.c-hero-article__title').should('contain', 'Artigo Modular Teste')
    })
  })
})

describe('Acessar Artigo com usuário logado', () => {

  context('Acessar artigo com sucesso', () => {

    it('Acessar artigo', () => {

      login.loginMedico()

      cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.get('#modal-search-box').should('be.visible').type('Artigo Modular Teste home automatizada')
      cy.get('.grid-lg-10 > .modal-search__icon').click()
      cy.wait(2000)
      cy.contains('Artigo Modular Teste home automatizada').click()
      cy.get('.c-hero-article__title').should('contain', 'Artigo Modular Teste')
    })

    it.skip('Adicionar e Retirar Artigo dos favoritos', () => {

      cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.get('#modal-search-box').should('be.visible').type('Artigo Modular Teste home automatizada')
      cy.get('.grid-lg-10 > .modal-search__icon').click()
      cy.wait(2000)
      cy.contains('Artigo Modular Teste home automatizada').click()
      cy.get('.c-hero-article__title').should('contain', 'Artigo Modular Teste')

      cy.xpath("//div[contains(@class,'c-hero__icons')]//i[contains(@class,'favorite')]").click({ force: true })
      cy.wait(2000)
      cy.get('.grid-lg-11 > .c-text').should('have.text', 'Artigo adicionado à sua área pessoal')

      cy.wait(2000)
      
      cy.get("//div[contains(@class,'c-hero__icons')]//i[contains(@class,'favorite')]").click({ force: true })
      cy.wait(2000)
      cy.get('.grid-lg-11 > .c-text').should('have.text', 'Artigo removido à sua área pessoal')
    })

    it.only('Acessar artigo exclusivo', () => {

      cy.get('.c-navbar__area-logged > .c-navbar__item').click()
     cy.visit('https://stg-cd.sanoficonecta.com.br/artigos/resultados-empower-lung1-localmente-avancada')
     cy.get('.c-base-modal-content__body > .c-text--h2').should('have.text', 'Conteúdo exclusivo para Médico e Farmacêutico')
    })
  })
})
