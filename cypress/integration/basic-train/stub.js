/// <reference types="cypress" />

import * as url from "../fixtures/urls.json"    




describe('Utilizando ON', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })

    beforeEach('reload page', () => {
        cy.reload();
    })

    it('using stubs', () => {
        // utilizado para caputar o método ou simular
        const stub = cy.stub()
 
        cy.on('window:alert', stub)
 
        // agora estou pegando a chama anterior pelo getCall zero, sendo o índice
        // da chamada anterior
        cy.get('#alerta').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Mensagem do alerta anterior')
        })
    })

})