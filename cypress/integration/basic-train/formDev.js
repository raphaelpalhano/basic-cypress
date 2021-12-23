import  * as data from '../../fixtures/senha.json';


 describe('minha Unisul', () => {

    beforeEach(() => {
      cy.visit('https://minha.unisul.br/psp/pa91prd/?cmd=login')
      cy.get('#userid').type('raphael.arevalos')
      cy.get('#pwd').type(data.password),
      cy.get('button[type="submit"]').click()
    
    })
    
    it('fills the forms and submits it', () => {
      cy.get('#dados-usuario span').should('have.text','RAPHAEL')
    })


 })