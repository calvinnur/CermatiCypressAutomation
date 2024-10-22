
import{register} from "../pageobjects/register"
const registerData = require("../fixtures/register.json")

describe('Register test suite', () => {
  const registerClass = new register()
  beforeEach(() => {
    cy.visit(registerData.url_register_user)
    cy.viewport(1280,720)
    cy.wait(2000)
    cy.url().should('eq',registerData.url_register_user)
    cy.get(registerClass.titleRegister).should('be.visible')
    cy.xpath(registerClass.btnSubmitDisabled).should("be.visible")
  })

  
  it('As a user, i want to register in cermati app', () => {
    cy.types(registerClass.formHandphone,registerData.example_phone_number+Math.floor((Math.random() * 10000) + 1))
    cy.types(registerClass.formEmail,registerData.example_email+Math.floor((Math.random() * 10000) + 1)+"@yopmail.com")
    cy.types(registerClass.formFirstName,registerData.example_first_name)
    cy.types(registerClass.formLastName,registerData.example_last_name)
    cy.clicks(registerClass.btnSubmitEnabled)
    cy.url().should('eq',registerData.url_registerr_otp)
    cy.get(registerClass.titleOtp).should('be.visible')
  })
})