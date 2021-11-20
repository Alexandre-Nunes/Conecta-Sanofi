const el = require('./elements').ELEMENTS

class LoginSistema {

    acessarSistema() {
        cy.visit('/')
        cy.get(el.InputUsuarioSistema).type('sanoficonecta')
        cy.wait(2000)
        cy.get(el.InputSenhaSistema).type('previewconecta')
        cy.wait(2000)  
        cy.get(el.ButtonLoginSistema).click()
        cy.wait(2000) 
    }
}

export default new LoginSistema()
