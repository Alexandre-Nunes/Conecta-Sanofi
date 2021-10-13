const el = require('./elements').ELEMENTS

class Busca {

    BuscaDeslogadoHeaderComResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('covid')
        cy.get(el.ButtonBuscarHeader).click()
        cy.contains(el.RetornoBusca).should('contain.text', 'ARTIGO')
       

    }

    BuscaDeslogadoHeaderSemResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('cypress')
        cy.get(el.ButtonBuscarHeader).click()
        cy.contains(el.RetornoError).should('contain.text', 'Nenhum resultado para "cypress"')
    }
   
}

export default new Busca()
