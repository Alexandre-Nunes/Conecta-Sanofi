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

  BuscaParteNomeTermo() {
    cy.get(el.LinkBuscaHeader).click()
    cy.get(el.InputBuscaHeader).clear()
      .type('cov')
    cy.get(el.ButtonBuscarHeader).click()
    cy.get(el.RetornuBuscaParteTermo).should('contain', 'COVID-19')
  }

  BuscaVaziaDeslogado() {
    cy.get(el.LinkBuscaHeader).click()
    cy.get(el.InputBuscaHeader).clear()
    cy.get(el.ButtonBuscarHeader).click()
    cy.get(el.ValidaBuscaVazia).should('contain.text', 'Nenhum resultado para ""')
  }

  BuscaPorTermoComTraco() {
    cy.get(el.LinkBuscaHeader).click()
    cy.get(el.InputBuscaHeader).clear()
      .type('covid-19')
    cy.get(el.ButtonBuscarHeader).click()
    cy.get(el.RetornuBuscaParteTermo).should('contain', 'COVID-19')
  }

  BuscaPorTermoComAcentuacaoePreposicao() {
    cy.get(el.LinkBuscaHeader).click()
    cy.get(el.InputBuscaHeader).clear()
      .type('Otimizando a vacinação em adolescentes')
    cy.get(el.ButtonBuscarHeader).click()
    cy.get(el.RetornoBuscaTermoAcentuado).should('have.text', 'Otimizando a vacinação em adolescentes: imunização em escolas')
  }
}

export default new Busca()
