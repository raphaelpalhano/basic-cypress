/// <reference types="cypress"/>

import * as url from "../../fixtures/urls.json";


describe('Hook', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })

    beforeEach('reload page', () => {
        cy.reload();
    })

    after('Clear cookie', () => {
        cy.log('all tests were executed');
        cy.clearCookies()
 
    })

    it('Use Then', () => {
        cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]').then(vestidos => {
            expect(vestidos).to.have.length(1)
            expect(vestidos).contain.text('Women')
            return "class-nova"
        }).and('eq', 'class-nova')
       
    })
})