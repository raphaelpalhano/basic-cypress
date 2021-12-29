/// <reference types="cypress"/>

import * as url from "../../fixtures/urls.json";
import {automation_pratice} from "../../fixtures/senha.json";


describe('Hook', () => {
    before('visit page', () => {
        
        cy.visit(url['automationPratice']);
    })

    beforeEach('reload page', () => {
        cy.reload();
    })

    after('Clear cookie', () => {
        cy.log('all tests were executed');
        cy.clearCookie();
 
    })

})

describe('behavior', () => {
    it('login page', () => {
        cy.get('a.login').click();
    })

    
    
   
})