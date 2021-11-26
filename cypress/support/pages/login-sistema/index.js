const el = require('./elements').ELEMENTS

class LoginSistema {

    acessarSistema() {
        cy.visit('/')
        cy.get(el.FecharBanner).click()
        cy.get(el.InputUsuarioSistema).type('sanoficonecta', { delay: 100 })
        cy.get(el.InputSenhaSistema).type('previewconecta', { delay: 100 })
        cy.get(el.ButtonLoginSistema).click()
    }
}

export default new LoginSistema()
