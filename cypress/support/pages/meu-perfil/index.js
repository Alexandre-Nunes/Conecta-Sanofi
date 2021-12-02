const el = require('./elements').ELEMENTS

class MeuPerfil {

    AcessarMinhaConta() {
        cy.get(el.ButtonMenu).click()
        cy.get(el.ButtonMeuPerfil).click()
        cy.wait(2000)
        cy.get(el.ButtonMinhaConta).click()
    }
}

export default new MeuPerfil()
