/// <reference types="cypress" />
import * as url from "../../fixtures/urls.json";


describe('Iframe', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })
    // pegando os elements do iframe (contents)

    it('Acess Iframe', () => {
        cy.get('#iframe').then((iframe) => {
            const body = iframe.contents().find('body');
            cy.wrap(body).find('input[id="campText"]').type('testando').should('have.valu', 'testando');
        })
    })
})