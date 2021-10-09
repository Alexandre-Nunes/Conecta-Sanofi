const el = require('./elements').ELEMENTS

class LoginSistema {

    acessarSistema() {
        cy.visit('/')
        cy.get(el.InputUsuarioSistema).type('sanoficonecta')
        cy.wait(500)
        cy.get(el.InputSenhaSistema).should('be.visible')
          .type('previewconecta')
        cy.get(el.ButtonLoginSistema).click()

        cy.get(el.ValidaLogin).should('be.visible')
          .should('contain', 'Doenças')
    }
}

export default new LoginSistema()
