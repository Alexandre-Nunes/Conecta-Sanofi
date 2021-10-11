const el = require('./elements').ELEMENTS

class LoginSistema {

    acessarSistema() {
        cy.visit('/')
        cy.get(el.InputUsuarioSistema).type('sanoficonecta')
        cy.get(el.InputSenhaSistema).should('be.visible')
          .type('previewconecta')
        cy.wait(1000)  
        cy.get(el.ButtonLoginSistema).click()

        cy.get(el.ValidaLogin).should('be.visible')
          .should('contain', 'Doenças')
    }
}

export default new LoginSistema()
