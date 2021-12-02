const el = require('./elements').ELEMENTS

class Artigo {

    AcessarArtigo() {
        cy.get(el.LinkBuscaHeader).click()
        cy.get(el.InputBuscaHeader).should('be.visible')
          .type('Artigo Modular Teste home automatizada')
        cy.get(el.ButtonBuscarHeader).click()
        cy.wait(2000)
        cy.contains(el.RetornoBusca).click()
        cy.get(el.RetornuBuscaParteTermo).should('contain', 'Artigo Modular Teste')
  
    }
}

export default new Artigo()
