/// <reference types="cypress"/>

import loginsistema from '../support/pages/login-sistema'
import login from '../support/pages/login'

beforeEach(() => {
    loginsistema.acessarSistema()
})

describe('Recuperar Senha', () => {
    it('Esqueci minha senha', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#uf').select('SC')
        cy.get('#lf-registro').type('11655')
        cy.get('#sf-email-different').click({force:true})
        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
    })

    it('Tentar recuperar senha utilizando Número do registro invalido', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#uf').select('SC')
        cy.get('#lf-registro').type('7777')
        cy.get('#sf-email-different').click({force:true})
        cy.get('#generic-error').should('have.text', 'Registro não localizado')
    })

    it('Reenviar email de recuperação de senha', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#uf').select('SC')
        cy.get('#lf-registro').type('11655')
        cy.get('#sf-email-different').click({force:true})
        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
        cy.get('#lf-resend-mail').click()
        cy.get('#lf-resend-mail').should('have.text', 'E-mail enviado!')
    })

    it('Alterar email de recuperação de senha', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#hcp-type').select('Farmacêutico (CRF)')
        cy.get('#uf').select('RS')
        cy.get('#lf-registro').type('1234')
        cy.get('#sf-email-different').click({force:true})
        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
        cy.get('.c-base-modal-content__body > :nth-child(8) > span').click({force:true})
        cy.get('.c-text--h2 > strong').should('have.text', 'Habilitar novo Email')
        
            
        cy.get('#sf-phone').type('489977777777')
        cy.get('.c-base-modal-content__paper').click()
        cy.wait(2000)
        cy.get('#lf-email').type('medicorenovaemail@servidor.com')
        cy.get('#sf-continue-validation').click()

        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
    })

    it('Tentar alterar email de recuperacao de senha utilizando Email invalido', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#hcp-type').select('Farmacêutico (CRF)')
        cy.get('#uf').select('RS')
        cy.get('#lf-registro').type('1234')
        cy.get('#sf-email-different').click({force:true})
        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
        cy.get('.c-base-modal-content__body > :nth-child(8) > span').click({force:true})
        cy.get('.c-text--h2 > strong').should('have.text', 'Habilitar novo Email')
        
            
        cy.get('#sf-phone').type('489977777777')
     
        cy.get('#lf-email').type('ABc123@teste')
        cy.get('#sf-continue-validation').click()

        cy.get('.c-base-modal__text-error').should('have.text', 'Email inválido')
    })

    it('Tentar alterar email de recuperacao de senha utilizando Email ja existente', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#hcp-type').select('Farmacêutico (CRF)')
        cy.get('#uf').select('RS')
        cy.get('#lf-registro').type('1234')
        cy.get('#sf-email-different').click({force:true})
        cy.get('.c-base-modal-content__body > :nth-child(1) > .c-text--h2').should('have.text', 'Esqueci minha senha')
        cy.get('.c-base-modal-content__body > :nth-child(8) > span').click({force:true})
        cy.get('.c-text--h2 > strong').should('have.text', 'Habilitar novo Email')
        
            
        cy.get('#sf-phone').type('489977777777')
        cy.get('.c-base-modal-content__paper').click()

        cy.get('#lf-email').type('maria@teste.com')
        cy.get('#sf-continue-validation').click()

        cy.get('.c-base-modal__text-error').should('have.text', 'Já existe um usuário com este e-mail')
    })

    it('Verificar obrigatoriedade dos campos UF e Registro ao Recuperar senha', () => {
        cy.get('.header__login > :nth-child(1)').click()
        cy.get('.menu-drawer__signin').click()
        cy.get('#forgot-pass').click()
        cy.get('#sf-email-different').click({force:true})
        cy.get('#uf-error').should('have.text', 'Escolher Estado')
        cy.get('#registro-error').should('have.text', 'Favor informar seu número de registro')
    })
})