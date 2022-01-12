/// <reference types="cypress" />

import * as url from "../fixtures/urls.json"    




describe('Utilizando ON', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })

    beforeEach('reload page', () => {
        cy.reload();
    })

    it
})