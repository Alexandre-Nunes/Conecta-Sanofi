const el = require('./elements').ELEMENTS

class Login {

  loginMedico() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Médico (CRM)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('4163')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Doctor Four')
  }

  loginMedicoComRegistro() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Médico (CRM)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('4163')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Doctor Four')
    
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginFarmaceuticoComRegistro() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Farmacêutico (CRF)')
    cy.get(el.SelectEstado).select('RS')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('1234')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Farmaceutico')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginEnfermeiroComRegistro() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Enfermeiro (COREN)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('12333')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Enfermeio')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginNutricionistaComRegistro() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Nutricionista (CRN)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('14959')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Nutricionista')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginFisioterapeutaComRegistro() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Fisioterapeuta (CREFITO)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('12345')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Fisioterapeuta')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginMedicoComEmail() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.RadioEmail).check()
    cy.wait(1000)
    cy.get(el.InputEmail).type('medico04@teste.com')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Doctor Four')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginFarmaceuticoComEmail() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.RadioEmail).check()
    cy.wait(1000)
    cy.get(el.InputEmail).should('be.visible').type('farmaceutico01@teste.com')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Farma')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginEnfermeiroComEmail() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.RadioEmail).check()
    cy.wait(1000)
    cy.get(el.InputEmail).should('be.visible').type('enfermeiro01@teste.com')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Enfermeio')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginNutricionistaComEmail() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.RadioEmail).check()
    cy.wait(1000)
    cy.get(el.InputEmail).should('be.visible').type('nutricionista01@teste.com')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Nutricionista')


    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginFisioterapeutaComEmail() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.RadioEmail).check()
    cy.wait(1000)
    cy.get(el.InputEmail).should('be.visible').type('fisioterapeuta01@teste.com')
    cy.get(el.InputSenha).should('be.visible').type('123456')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.wait(2000)
    cy.get(el.ValidaLogin).should('contain', 'Fisioterapeuta')

    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonSairProfile).click({ force: true })
   
  }

  loginSemDadosObrigatorios() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.UFError).should('contain', 'Escolher Estado')
    cy.get(el.RegistroError).should('contain', 'Favor informar seu número de registro')
    cy.get(el.PassError).should('contain', 'Favor informar sua senha')
    cy.get(el.ButtonFecharModalLogin).click()
  }

  loginComDadosInvalidos() {
    cy.get(el.MenuProfile).click()
    cy.get(el.ButtonEntrarProfile).click()
    cy.get(el.SelectTipoHCP).select('Médico (CRM)')
    cy.get(el.SelectEstado).select('BA')
    cy.get(el.InputNumeroRegistro).should('be.visible').type('0000')
    cy.get(el.InputSenha).type('00000')
    cy.get(el.ButtonEntrar).click({ force: true })
    cy.get(el.GenericError).should('contain', 'Documento e/ou senha inválidos')
    cy.get(el.ButtonFecharModalLogin).click()
  }
}

export default new Login()
