/// <reference types="cypress" />

Cypress.Commands.add('login', user => {
    cy.get('#sign').click();
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password, {log: false});

})

