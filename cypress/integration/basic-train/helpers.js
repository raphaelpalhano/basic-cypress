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

    it('Using Its', () => {
        const object = {nome: 'Juca Moreno', idade: 22}
        cy.wrap(object).should('have.a.property', 'nome', 'Juca Moreno')
        
        // its == para acessar o valor diretamente sem passar pela propriedade
        cy.wrap(object).its('nome').should('be.equal' ,'Juca Moreno')

        // encadeamento 
        const object2 = {nomes: {um: 'Joao', dois: 'Maria', tres: "Ana"}}
        cy.wrap(object2).its('nomes').its('um').should('be.eq', 'Joao')
        cy.wrap(object2).its('nomes.um').should('be.eq', 'Joao')


        //cy 
        cy.title().its(length).should('have.length', '1')
    })


    it.only('Invoke', () => {
        const duplicateValue = () => 'Ola mundo'
        const object = {funcao: duplicateValue}

        //estou acessando a propriedade para executa-la como função 
        cy.wrap(object).invoke('funcao').should('be.eq', 'Ola mundo')

        // passando parâmetros para a funcao pelo invoke
        const potenciacao = (a,p) => a**p
        const objectPo = {fn: potenciacao}
        
        // 10*10==100*10==1000
        cy.wrap(objectPo).invoke('fn', 10,3).should('be.eq', 1000)
        
        //Pegando texto na página
        cy.get('div > .shopping_cart > a > b').invoke('text').should('be.eq', 'Cart')

        // digitando um valor no campo
        cy.get('input[class="search_query form-control ac_input"]').invoke('val', 'Printed Chiffon')

        // criar um elemento na tela 
        cy.get('div > .shopping_cart > a > b').invoke('html', '<h2 style="color:red;"> HACKEADO </h2>')
    })

})