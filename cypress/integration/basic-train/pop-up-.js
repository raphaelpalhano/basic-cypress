/// <reference types="cypress" />
import * as url from "../../fixtures/urls.json";


describe('pop-up', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })
    // pegando os elements do iframe (contents)

    it('Acess pop-up', () => {
        cy.window().then((win) => {
            // função para verificar se abriu algo na tela
           cy.stub(win, 'open').as('winOpened')

       })
       //clicando no botão para gerar pop-up
       cy.get('#button-pop-up').click()
       // para evitar que procure pelo html, coloca-se @winOpened
       cy.get('@winOpened').should('be.called')

    })
})