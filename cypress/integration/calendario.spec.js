/// <reference types="cypress"/>

import loginsistema from '../support/pages/login-sistema'
import login from '../support/pages/login'

beforeEach(() => {
    loginsistema.acessarSistema()
})

describe('Calendario', () => {
    it('Acessar evento com data passada, como medico', () => {
        login.loginMedico()
        cy.get('[href="/calendario"] > p').click()
        cy.contains('Aula Médica isatuximabe – Dr. Edvan Crusoé').click()

        cy.get('.c-text--h1').should('contain', 'Aula Médica isatuximabe')
    })

    it('Acessar evento com data futura, como medico', () => {
        login.loginMedico()
        cy.get('[href="/calendario"] > p').click()
        cy.contains('Evento Zinpass Eze 2021 - Automação Data Futura').click()

        cy.get('.c-text--h1').should('contain', 'Evento Automação Data Futura')
    })

    it('Adicionar evento ao calendário, como medico', () => {
        login.loginMedico()
        cy.get('[href="/calendario"] > p').click()
        cy.get('#calendar-2021-dezembro > .c-pt-32 > .c-pt-16 > :nth-child(1) > .c-row > .grid-lg-ml-4 > :nth-child(1) > .c-button-align-box > .c-dropdown > .c-button-schedule').click()
        cy.get('.c-dropdown > ul > :nth-child(2)').click()

        // Falta validação, na outra aba.
    })

    it('Acessar evento ao vivo, como medico', () => {
        login.loginMedico()
        cy.get('[href="/calendario"] > p').click()
        
       // Falta criar evento ao vivo
    })
})