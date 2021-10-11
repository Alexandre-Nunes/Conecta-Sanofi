const el = require('./elements').ELEMENTS

class Busca {

    BuscaDeslogadoHeaderComResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('importância')
        cy.get(el.ButtonBuscarHeader).click()
        cy.contains(el.RetornoBusca).should('contain.text', 'A importância do monitoramento de drogas terapêuticas no tratamento de infecções graves')
    }

    BuscaDeslogadoHeaderSemResultado() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).clear()
          .type('cypress')
        cy.get(el.ButtonBuscarHeader).click()
        cy.contains(el.RetornoError)
    }
   
}

export default new Busca()
