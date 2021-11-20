const el = require('./elements').ELEMENTS

let Chance = require('chance')
let chance = new Chance()

class Cadastro {

  cadastroNutricionista() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.SelectTipoHCP).select('Nutricionista (CRN)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).type(chance.phone())
    cy.get(el.InputEmail).type(chance.email())
    cy.get(el.CheckBoxTermos).check()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(3000)
    cy.get(el.InputName).should('be.visible').type('Teste')
    cy.get(el.InputLastName).type(chance.last())
    cy.get(el.InputTelefone).type('48997778895')
    cy.get(el.InputSenha).type('123456', { force: true })
    cy.get(el.InputConfirmaSenha).type('123456', { force: true })
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(1000)
    cy.get(el.ValidaCadastro).should('contain.text', 'Bem-vindo Teste')
    cy.wait(1000)
    cy.get(el.ButtonFecharModalLogin).click()
   
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click()
    cy.get(el.ValidaLogout).should('be.visible')
      .should('contain', 'Doenças')
  }

  cadastroMedicoComRegistroInvalido() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).type('0000')
    cy.get(el.InputNumeroRegistro).should('be.visible').type(chance.phone())
    cy.get(el.InputEmail).type('medico55@teste.com')
    cy.get(el.CheckBoxTermos).check()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.RegistroError).should('contain.text', 'CRM inválido no CFM')
    cy.get(el.ButtonFecharModalLogin).click()
  }

  cadastroMedicoSemAceitarTermos() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type(chance.phone())
    cy.get(el.InputEmail).should('be.visible').type(chance.email())
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.TermsError).should('contain.text', 'Marcar o aceite')
    cy.get(el.ButtonFecharModalLogin).click()
  }

  cadastroMedicoComRegistroJaCadastrado() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).type('4163')
    cy.get(el.InputEmail).should('be.visible').type(chance.email())
    cy.get(el.CheckBoxTermos).check()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.RegistroJaCadastrado).should('contain.text', 'Opa! Parece que você já está cadastrado aqui!')
    cy.get(el.ButtonFecharModalLogin).click()
  }

  cadastroMedicoComEmailJaCadastrado() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).type('12345')
    cy.get(el.InputEmail).type('medico04@teste.com')
    cy.get(el.CheckBoxTermos).check()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.EmailJaCadastrado).should('contain.text', 'Opa! Parece que você já está cadastrado aqui!')
    cy.get(el.ButtonFecharModalLogin).click()
  }

  cadastroMedicoSemInformarDadosObrigatorios() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonCriarContaProfile).click()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.UFError).should('contain.text', 'Escolher Estado')
    cy.get(el.RegistroError).should('contain.text', 'Favor informar seu número de registro')
    cy.get(el.EmailError).should('contain.text', 'Email inválido')
    cy.get(el.TermsError).should('contain.text', 'Marcar o aceite')
    cy.get(el.ButtonFecharModalLogin).click()
  
  }
}

export default new Cadastro()
