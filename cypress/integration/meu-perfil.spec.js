/// <reference types="cypress"/>

import login from '../support/pages/login'
import loginsistema from '../support/pages/login-sistema'
import meuperfil from '../support/pages/meu-perfil'
beforeEach(() => {
    loginsistema.acessarSistema()
})

describe('Meu Perfil', () => {
    it('Alterar numero do celular', () => {
        login.loginMedico()
        meuperfil.AcessarMinhaConta()

        cy.get(':nth-child(3) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').clear()
          .type('51987165588{enter}')
        cy.get(':nth-child(2) > #profile').click()
      
    
        // Falta validacão, pois não temos um feedback ao salvar a alteração.
    })

    it('Alterar numero do celular utilizando um numero inválido', () => {
        login.loginMedico()
        meuperfil.AcessarMinhaConta()

        cy.get(':nth-child(3) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').clear()
            .type('00111111111{enter}')
        cy.get(':nth-child(3) > .form-element > .form-element__error-message').should('have.text', 'Celular inválido')
    })

    it('Alterar email', () => {
        login.loginMedico()
        meuperfil.AcessarMinhaConta()

        cy.get(':nth-child(4) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').clear()
            .type('medico04@teste.com.br{enter}')
    })

    it('Alterar email utilizando email inválido', () => {
        login.loginMedico()
        meuperfil.AcessarMinhaConta()
        cy.get(':nth-child(4) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').clear()
          .type('testemedico{enter}')
        cy.get(':nth-child(2) > #profile').click()
        cy.get(':nth-child(4) > .form-element > .form-element__error-message').should('have.text', 'E-mail inválido')
    })

    it('Tentar alterar email ja existente', () => {
        login.loginMedico()
        meuperfil.AcessarMinhaConta()
        cy.get(':nth-child(4) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').clear()
            .type('testemedico@grr.la{enter}')
        cy.wait(2000)
        cy.get('.c-my-profile__save-container--btn').click()
        // Falta validacão, pois não temos um feedback ao salvar a alteração.
    })

    it('Alterar senha', () => {
        login.loginMedico()
      
        cy.get('.menu-profile__indicator').click()
        cy.get('.menu-profile > #menu-profile-panel > .menu-profile__panel-content > .menu-profile__panel-row > [href="/perfil"]').click()
        cy.get(':nth-child(2) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.get('.c-my-profile__section-form-buttons > .c-my-profile__button').click()

        cy.get('.modal-change-password__form > :nth-child(1) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').type('123456')
        cy.get('.modal-change-password__form > :nth-child(2) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').type('123456')

        cy.get('.modal-change-password__form-buttons > button').click({ force: true })
        cy.get('.grid-lg-11 > .c-text').should('have.text', 'Dados alterados com sucesso')
    })

    it('Tentar alterar senha, utilizando uma senha com menos de seis caracteres', () => {
        login.loginMedico()

        cy.get('.menu-profile__indicator').click()
        cy.get('.menu-profile > #menu-profile-panel > .menu-profile__panel-content > .menu-profile__panel-row > [href="/perfil"]').click()
        cy.get(':nth-child(2) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.get('.c-my-profile__section-form-buttons > .c-my-profile__button').click()

        cy.get('.modal-change-password__form > :nth-child(1) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').type('123')
        cy.contains('Senha inválida').should('have.text', 'Senha inválida')
    })

    it('Tentar alterar senha, utilizando a senha de confirmação diferente', () => {
        login.loginMedico()

        cy.get('.menu-profile__indicator').click()
        cy.get('.menu-profile > #menu-profile-panel > .menu-profile__panel-content > .menu-profile__panel-row > [href="/perfil"]').click()
        cy.get(':nth-child(2) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.get('.c-my-profile__section-form-buttons > .c-my-profile__button').click()

        cy.get('.modal-change-password__form > :nth-child(1) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').type('Teste@123')
        cy.get('.modal-change-password__form > :nth-child(2) > .form-element > :nth-child(1) > .input-wrapper > .input-wrapper__text-input').type('Teste@999')

        cy.get('.modal-change-password__form-buttons > button').click({ force: true })

        cy.contains('Os Passwords digitados estão diferentes.').should('have.text', 'Os Passwords digitados estão diferentes.')
    })

    it('Alterar especialidades para usuário perfil de médico', () => {
        login.loginMedico()

        cy.get('.menu-profile__indicator').click()
        cy.get('.menu-profile > #menu-profile-panel > .menu-profile__panel-content > .menu-profile__panel-row > [href="/perfil"]').click()
        cy.get(':nth-child(2) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.get('#expertiseprimary').select('Angiologia')
        cy.get('#expertisesecondary').select('Cirurgia geral')
        cy.get('.c-my-profile__save-container--btn').click()
        cy.get('.grid-lg-11 > .c-text').should('have.text', 'Dados alterados com sucesso')

        cy.get('#expertiseprimary').select('Cardiologia')
        cy.get('#expertisesecondary').select('Neurologia')
        cy.get('.c-my-profile__save-container--btn').click()
        cy.get('.grid-lg-11 > .c-text').should('have.text', 'Dados alterados com sucesso')
    })

    it('Adicionar Interesse e Especialidade para usuário perfil de médico', () => {
        login.loginMedico()

        cy.get('.menu-profile__indicator').click()
        cy.get('.menu-profile > #menu-profile-panel > .menu-profile__panel-content > .menu-profile__panel-row > [href="/perfil"]').click()
        cy.get(':nth-child(2) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > #profile > .grid-md-10 > .c-accordion-item__title-text > .c-my-profile__section-error').click()
        cy.get('#expertiseprimary').select('Endoscopia')
        cy.get('#expertisesecondary').select('Geriatria')
       
        cy.get(':nth-child(9) > .c-select-list__option').click()
        cy.get('.c-my-profile__save-container--btn').click()
        cy.get('.grid-lg-11 > .c-text').should('have.text', 'Dados alterados com sucesso')
        cy.wait(2000)
        cy.get(':nth-child(9) > .c-select-list__option').click()
        cy.get('.grid-lg-11 > .c-text').should('have.text', 'Dados alterados com sucesso')
    })
})