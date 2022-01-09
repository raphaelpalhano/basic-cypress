import * as url from "../fixtures/urls.json"    

/// <reference types="cypress" />


describe('Utilizando Mock', () => {
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

    it('check load page using ON', () => {
        
        cy.on('scrolled', loaded => {
            expect(loaded).to.be.true
        })
    })
})