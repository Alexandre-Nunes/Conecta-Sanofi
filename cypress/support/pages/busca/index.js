const el = require('./elements').ELEMENTS

class Busca {

    BuscaDeslogadoHeaderComResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('importância')
        cy.get(el.ButtonBuscarHeader).click()
        cy.get(el.RetornoBusca).should('contain', 'Importância da proteção para Hepatite B')
    }

    BuscaDeslogadoHeaderSemResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('cypress')
        cy.get(el.ButtonBuscarHeader).click()
        cy.get(el.RetornoError).should('contain', 'Nenhum resultado para "cypress"')
    }
   
}

export default new Busca()
