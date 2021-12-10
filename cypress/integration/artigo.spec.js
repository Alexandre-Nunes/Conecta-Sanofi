/// <reference types="cypress"/>
import loginsistema from '../support/pages/login-sistema'
import login from '../support/pages/login'
import artigo from '../support/pages/artigo'

beforeEach(() => {
  loginsistema.acessarSistema()
})

describe('Acessar Artigo com usuário deslogado', () => {

  context('Acessar artigo com sucesso', () => {
    it('Tentar acessar artigo exclusivo para médico e farmacêutico, estando deslogado', () => {
      cy.visit('https://stg-cd.sanoficonecta.com.br/artigos/resultados-empower-lung1-localmente-avancada')
      cy.get('.c-base-modal-content__paper').should('be.visible')
      cy.get('.c-base-modal-content__body > .c-text--h2').should('contain', 'Conteúdo exclusivo para Médico e  Farmacêutico')
    })

    it('Acessar artigo', () => {
      artigo.AcessarArtigo()
    })
  })
})

describe('Acessar Artigo com usuário logado', () => {

  context('Acessar artigo com sucesso', () => {

    it('Acessar artigo', () => {

      login.loginMedico()
      artigo.AcessarArtigo()
    })

    it.skip('Adicionar e Retirar Artigo dos favoritos', () => {

      artigo.AcessarArtigo()

      cy.xpath("//div[contains(@class,'c-hero__icons')]//i[contains(@class,'favorite')]").click({ force: true })
      cy.wait(2000)
      cy.get('.grid-lg-11 > .c-text').should('have.text', 'Artigo adicionado à sua área pessoal')

      cy.wait(2000)

      cy.get("//div[contains(@class,'c-hero__icons')]//i[contains(@class,'favorite')]").click({ force: true })
      cy.wait(2000)
      cy.get('.grid-lg-11 > .c-text').should('have.text', 'Artigo removido à sua área pessoal')
    })

    it('Tentar acessar artigo exclusivo para médico e farmacêutico, utilizando perfil sem permissão', () => {
      login.loginFisioterapeutaComRegistro()
      //cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.visit('https://stg-cd.sanoficonecta.com.br/artigos/resultados-empower-lung1-localmente-avancada')
      cy.get('.c-base-modal-content__body > .c-text--h2').should('contain', 'Conteúdo exclusivo para Médico e  Farmacêutico')
    })

    it('Tentar acessar artigo exclusivo, com Soft Login', () => {
      //cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.visit('https://stg-cd.sanoficonecta.com.br/artigos/resultados-empower-lung1-localmente-avancada')
      cy.get('.c-base-modal-content__body > .c-text--h2').should('contain', 'Conteúdo exclusivo para Médico e  Farmacêutico')

      cy.get('input[value="true"]').check()
      cy.get('#sf-continue-validation').click()

      cy.get('#hcp-type').select('Farmacêutico (CRF)')
      cy.get('#uf').select('RS')
      cy.get('#sf-register-2').type('4444444')
      cy.get('#sf-email').type('farma104@teste.com')

      cy.get('#opt-in').check()
      cy.get('#sf-continue-validation').click()

      cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Criar conta')
    })

    it('Acessar artigo exclusivo para médico e farmacêutico, utilizando perfil de Farmacêutico', () => {
      login.loginFarmaceutico()
      //cy.get('.c-navbar__area-logged > .c-navbar__item').click()
      cy.visit('https://stg-cd.sanoficonecta.com.br/artigos/resultados-empower-lung1-localmente-avancada')
      cy.get('.c-hero-article__title').should('contain', 'Resultados do cemiplimabe')
    })
  })
})
