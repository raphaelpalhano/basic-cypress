/// <reference types="cypress" />
import * as url from "../../fixtures/urls.json";



describe('Wrap...', () => {
    before('visit page', () => {
        cy.visit(url['automationPratice']);
    })

    it('teste using wrap', () =>{
        const object = {nome: 'Juca Moreno', idade: 22}
        expect(object).to.have.property('nome').and.eq('Juca Moreno')
        
        // tenho um objeto do jquery e preciso trazer dnv para o cypress
        cy.get('input[class="search_query form-control ac_input"]').then($qr => {
            cy.wrap($qr).type('Dress').should('have.value', 'Dress')
        })
        
    })

    it('Promise com wrap', () =>{
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(`valor ${10*10}`)
            }, 500)
        })

        
        cy.get('input[class="search_query form-control ac_input"').then(() => console.log("Campo de pesquisa"))
        
        // sem encapsular
        promise.then(valor => console.log(valor))

        // encapsulado
        cy.wrap(promise).then(promi => console.log(promi))

    })

    

})