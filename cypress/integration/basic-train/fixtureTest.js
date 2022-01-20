/// <reference types="cypress"/>

import * as url from "../../fixtures/urls.json";
import {automation_pratice} from "../../fixtures/senha.json";


describe('Hook', () => {
    before('visit page', () => {
        
        cy.visit(url.automationPratice.url);
        cy.get('a[class="login"]').click();
    })

    beforeEach('reload page', () => {
        cy.reload();
    })

    it('type value using fixtures', function() {
        cy.fixture('senha').as('acesso').then(() => {
            cy.get('input[id="email"]').type(this.acesso.automation_pratice.email);
            cy.get('input[id="passwd"]').type(this.acesso.automation_pratice.senha);
        })
    })

})
